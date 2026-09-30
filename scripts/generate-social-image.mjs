import { createElement as h } from 'react';
import { ImageResponse } from 'next/og.js';
import { readFile, writeFile } from 'node:fs/promises';

const asset = async (path) => `data:image/png;base64,${(await readFile(new URL(`../public/images/${path}`, import.meta.url))).toString('base64')}`;
const [logo, app, panel] = await Promise.all([asset('logo-horizontal.png'), asset('app/app1.png'), asset('admin/pedidos.png')]);
const box = (style, ...children) => h('div', { style: { display: 'flex', ...style } }, ...children);
const img = (src, width, height, style = {}) => h('img', { src, width, height, style });
const card = box({ width: '100%', height: '100%', background: '#FFC400', color: '#063477', padding: 52, position: 'relative', overflow: 'hidden', fontFamily: 'sans-serif' },
  box({ position: 'absolute', right: -110, top: -80, width: 570, height: 850, background: '#063477', borderRadius: 220, transform: 'rotate(12deg)' }),
  box({ flexDirection: 'column', width: 640 },
    img(logo, 310, 95),
    box({ marginTop: 38, fontSize: 63, fontWeight: 700, lineHeight: 1.04, letterSpacing: -2, flexDirection: 'column' }, 'TU NEGOCIO.', box({}, 'TU APP.'), box({}, 'TODO EL CONTROL.')),
    box({ marginTop: 24, fontSize: 26, lineHeight: 1.35, width: 550 }, 'Pedidos, cocina y ventas. Con tu marca.'),
    box({ marginTop: 28, gap: 12 },
      box({ background: '#063477', color: '#fff', borderRadius: 24, padding: '10px 20px', fontSize: 19 }, 'iOS + Android'),
      box({ border: '2px solid #063477', borderRadius: 24, padding: '8px 20px', fontSize: 19 }, 'Panel de gestión')),
    box({ marginTop: 24, fontSize: 20 }, 'arepabuilder.com')),
  box({ position: 'absolute', right: 38, top: 74, width: 365, background: '#fff', padding: 6, borderRadius: 15, transform: 'rotate(4deg)', flexDirection: 'column', boxShadow: '0 12px 30px #03265b55' },
    box({ background: '#063477', color: '#fff', padding: '10px 12px', fontSize: 15, borderRadius: '10px 10px 0 0' }, 'Tu panel de pedidos'),
    img(panel, 353, 188, { objectFit: 'contain' })),
  box({ position: 'absolute', right: 105, top: 206, width: 166, padding: 5, border: '2px solid #8b939f', borderRadius: 26, background: '#111827', overflow: 'hidden', boxShadow: '0 14px 26px #0005' }, img(app, 152, 330, { borderRadius: 20 })),
  box({ position: 'absolute', right: 42, bottom: 32, color: '#fff', fontSize: 18 }, 'Para restaurantes y negocios de comida')
);
const response = new ImageResponse(card, { width: 1200, height: 630 });
await writeFile(new URL('../public/images/arepa-builder-social.png', import.meta.url), Buffer.from(await response.arrayBuffer()));
console.log('Social image generated: 1200 × 630');
