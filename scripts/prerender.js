// Renders each route to static HTML after `react-scripts build`, so crawlers and
// link previews (Facebook, iMessage) get real content and per-page meta tags.
const fs = require('fs');
const path = require('path');

process.env.NODE_ENV = 'production';
process.env.BABEL_ENV = 'production';

// Styles are already bundled by react-scripts; skip them when rendering in Node.
['.scss', '.css'].forEach(ext => { require.extensions[ext] = () => {}; });

require('@babel/register')({
  presets: [[require.resolve('babel-preset-react-app'), { runtime: 'automatic' }]],
  only: [path.resolve(__dirname, '../src')],
  extensions: ['.js', '.jsx'],
});

const React = require('react');
const { renderToString } = require('react-dom/server');
const { StaticRouter } = require('react-router-dom/server');
const { Helmet } = require('react-helmet');
const { ServerStyleSheet } = require('styled-components');
const App = require('../src/App').default;

const BUILD_DIR = path.resolve(__dirname, '../build');
const ROUTES = ['/', '/registration', '/schedule', '/equipment', '/area-teams', '/contact', '/404'];

// Remove the static fallback tags; Helmet supplies per-page versions.
const template = fs.readFileSync(path.join(BUILD_DIR, 'index.html'), 'utf8')
  .replace(/<title>.*?<\/title>/s, '')
  .replace(/<meta name="description"[^>]*>/g, '')
  .replace(/<meta property="og:[^"]*"[^>]*>/g, '');

function render(route) {
  const sheet = new ServerStyleSheet();
  try {
    const body = renderToString(sheet.collectStyles(
      React.createElement(StaticRouter, { location: route }, React.createElement(App))
    ));
    const helmet = Helmet.renderStatic();
    const head = [helmet.title, helmet.meta, helmet.link, helmet.script]
      .map(tag => tag.toString())
      .join('') + sheet.getStyleTags();
    return template
      .replace('</head>', `${head}</head>`)
      .replace('<div id="root"></div>', `<div id="root">${body}</div>`);
  } finally {
    sheet.seal();
  }
}

for (const route of ROUTES) {
  const file = route === '/' ? 'index.html' : `${route.slice(1)}.html`;
  fs.writeFileSync(path.join(BUILD_DIR, file), render(route));
  console.log(`Prerendered ${route} -> build/${file}`);
}
