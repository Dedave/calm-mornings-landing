// Dependency-free regression checks. No events are sent to Meta or Google.
const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const path = require('node:path');
const root = path.join(__dirname, '..');
const read = file => fs.readFileSync(path.join(root, file), 'utf8');
const events = [];
const googleEvents = [];
const listeners = new Map();
const windowListeners = new Map();
const visible = new Set();
const faq = Array.from({ length: 3 }, () => ({
  open: false,
  addEventListener(type, fn) { this[type] = fn; },
  removeEventListener(type) { delete this[type]; },
}));
const year = {};
let cleanup;
class Element {
  constructor(source) { this.source = source; }
  closest() { return this.source ? this : null; }
  getAttribute() { return this.source; }
}
const window = {
  scrollY: 0,
  fbq: (...args) => events.push(args),
  gtag: (...args) => googleEvents.push(args),
  addEventListener: (name, fn) => windowListeners.set(name, fn),
  removeEventListener: name => windowListeners.delete(name),
};
const document = {
  addEventListener: (name, fn) => listeners.set(name, fn),
  removeEventListener: name => listeners.delete(name),
  getElementById: id => id === 'year' ? year : {
    classList: { add: name => visible.add(name), remove: name => visible.delete(name) },
  },
  querySelector: () => ({ getBoundingClientRect: () => ({ bottom: 700 - window.scrollY }) }),
  querySelectorAll: () => faq,
};
const source = read('app/SiteInteractions.js')
  .replace('import { useEffect } from "react";', '')
  .replace('export default function SiteInteractions', 'function SiteInteractions')
  .replace('export { CONFIG };', '');
vm.runInNewContext(source + '\nSiteInteractions();', {
  window, document, Element, useEffect: fn => { cleanup = fn(); },
});
const page = read('app/page.js');
assert.match(page, /const CHECKOUT_URL = "https:\/\/selar.com\/0m73087f66"/);
const links = [...page.matchAll(/<a\b[^>]*href=\{CHECKOUT_URL\}[^>]*>/g)];
assert.equal(links.length, 5);
for (const [link] of links) {
  const source = link.match(/data-cta="([^"]+)"/)?.[1];
  assert.ok(source, 'Every purchase CTA has a source');
  listeners.get('click')({ target: new Element(source) });
  const event = events.at(-1);
  assert.equal(event[0], 'trackCustom');
  assert.equal(event[1], 'SelarOutboundClick');
  assert.equal(event[2].source, source);
  assert.equal(event[2].value, 7);
  assert.equal(event[2].currency, 'USD');
  assert.equal(event[2].content_name, 'Calm Mornings - Visual Routine System');
}
assert.equal(events.length, 5);
assert.equal(googleEvents.length, 0, 'Null Google IDs stay inactive, even if gtag exists');
listeners.get('click')({ target: new Element() });
assert.equal(events.length, 5, 'Non-CTA clicks are ignored');
window.fbq = undefined;
assert.doesNotThrow(() => listeners.get('click')({ target: new Element('hero') }));
assert.equal(visible.has('visible'), false);
window.scrollY = 701;
windowListeners.get('scroll')();
assert.equal(visible.has('visible'), true);
window.scrollY = 0;
windowListeners.get('scroll')();
assert.equal(visible.has('visible'), false);
faq[0].open = true;
faq[1].open = true;
faq[1].toggle({ currentTarget: faq[1] });
assert.deepEqual(faq.map(item => item.open), [false, true, false]);
assert.equal(year.textContent, String(new Date().getFullYear()));
cleanup();
assert.equal(listeners.size, 0);
assert.equal(windowListeners.size, 0);
assert.ok(faq.every(item => !item.toggle));

const pixel = read('app/layout.js').match(/<Script id="meta-pixel"[\s\S]*?\{`([\s\S]*?)`\}/)[1];
const calls = [];
vm.runInNewContext(pixel, {
  window: { fbq: () => {} }, document: {}, fbq: (...args) => calls.push(args),
});
assert.equal(calls.filter(event => event[1] === 'PageView').length, 1);
assert.equal(calls.filter(event => event[1] === 'ViewContent').length, 1);
assert.equal(calls[0][1], '1801314857574173');
assert.ok([...events, ...calls].every(event => !['Purchase', 'InitiateCheckout'].includes(event[1])));
for (const [, asset] of page.matchAll(/(?:src: |src=)"(\/assets\/[^\"]+)"/g)) {
  assert.ok(fs.existsSync(path.join(root, 'public', asset)), asset);
}
console.log('PASS: five CTA sources and URLs, custom event payloads, no Purchase/InitiateCheckout, inactive Google tracking, sticky visibility, FAQ exclusivity, cleanup, one PageView/ViewContent call, and image paths.');

// Optionally check the built app: node scripts/verify-interactions.cjs http://127.0.0.1:3100
if (process.argv[2]) {
  (async () => {
    const base = process.argv[2];
    const response = await fetch(base);
    assert.equal(response.status, 200);
    const html = await response.text();
    assert.ok(html.includes('Your 14-Day School Morning Reset'));
    assert.equal([...html.matchAll(/data-cta="/g)].length, 5);
    const images = [...new Set([...html.matchAll(/<img\b[^>]*src="([^"]+)"/g)]
      .map(match => match[1].replaceAll('&amp;', '&')).filter(src => src.startsWith('/')))];
    const sharp = require('sharp');
    await Promise.all(images.map(async src => {
      const image = await fetch(new URL(src, base));
      assert.equal(image.status, 200, src);
      const metadata = await sharp(Buffer.from(await image.arrayBuffer())).metadata();
      assert.ok(metadata.width > 0 && metadata.height > 0, src);
    }));
    console.log(`PASS: production HTTP response and ${images.length} rendered image URLs load and decode.`);
  })().catch(error => { console.error(error); process.exitCode = 1; });
}
