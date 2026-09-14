// Post-build step for GitHub Pages.
//
// Discord (and every other link unfurler) does not run JavaScript, so a SPA can
// only advertise the tags that are already in the served HTML file. To give a
// route its own embed card we have to write a real HTML file for it, with the
// <!-- og:start --> … <!-- og:end --> block swapped out. The page still boots
// the same bundle, so React Router takes over from there.
//
// Also writes 404.html, which is what makes deep links survive a hard refresh
// on GitHub Pages.

import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const DIST = 'dist';
const SITE = 'https://blackwither.dev';

// ── Per-route metadata ──────────────────────────────────────────────────────
const ROUTES = [
    {
        dir: 'leo-crew',
        title: 'The Leo Crew',
        description:
            'There is exactly one Leo. There are also, somehow, six of him. A field guide to every variant — dinosaur, phoenix, giraffe, businessman — and how each one happened.',
        image: '/static/images/leo/leo-original.png',
        imageWidth: 256,
        imageHeight: 256,
        imageAlt: 'Leo, with angel wings',
        themeColor: '#f57f00',
    },
];
// ───────────────────────────────────────────────────────────────────────────

const OG_BLOCK = /<!-- og:start -->[\s\S]*?<!-- og:end -->/;

const esc = str =>
    str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

function metaBlock(route) {
    const url = `${SITE}/${route.dir}`;
    const image = `${SITE}${route.image}`;
    return `<!-- og:start -->
    <title>${esc(route.title)}</title>
    <meta name="description" content="${esc(route.description)}" />
    <meta name="theme-color" content="${route.themeColor}" />
    <meta property="og:type" content="website" />
    <meta property="og:site_name" content="Black_Wither" />
    <meta property="og:url" content="${url}" />
    <meta property="og:title" content="${esc(route.title)}" />
    <meta property="og:description" content="${esc(route.description)}" />
    <meta property="og:image" content="${image}" />
    <meta property="og:image:width" content="${route.imageWidth}" />
    <meta property="og:image:height" content="${route.imageHeight}" />
    <meta property="og:image:alt" content="${esc(route.imageAlt)}" />
    <meta name="twitter:card" content="summary" />
    <!-- og:end -->`;
}

const index = readFileSync(join(DIST, 'index.html'), 'utf8');

if (!OG_BLOCK.test(index)) {
    throw new Error('index.html is missing the <!-- og:start --> … <!-- og:end --> block');
}

// SPA fallback: unknown paths (and hard refreshes on a route) get the app back.
writeFileSync(join(DIST, '404.html'), index);

for (const route of ROUTES) {
    const html = index.replace(OG_BLOCK, metaBlock(route));

    // Written twice on purpose. GitHub Pages resolves "/leo-crew" against
    // "leo-crew.html" and "/leo-crew/" against "leo-crew/index.html"; emitting
    // both means the route serves its own card either way, instead of falling
    // through to 404.html and showing the site-wide one.
    mkdirSync(join(DIST, route.dir), { recursive: true });
    writeFileSync(join(DIST, route.dir, 'index.html'), html);
    writeFileSync(join(DIST, `${route.dir}.html`), html);
    console.log(`og: wrote ${route.dir}.html and ${route.dir}/index.html`);
}
