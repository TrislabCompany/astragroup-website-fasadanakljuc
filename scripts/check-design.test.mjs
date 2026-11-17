import assert from "node:assert/strict";
import { test } from "node:test";
import { designProblems, hasEnglishSegment, visibleText } from "./check-design.mjs";

const page = (body) => `<!doctype html><html><head><title>t</title></head><body>${body}</body></html>`;

test("a clean page has no problems", () => {
  assert.deepEqual(designProblems(page('<h1>Prenova fasade</h1><a href="/zasebnost">Politika zasebnosti</a>')), []);
});

test("a style attribute is a problem", () => {
  assert.equal(designProblems(page('<p style="color:red">x</p>')).length, 1);
});

test("placeholder text is a problem, in Slovenian and English", () => {
  assert.equal(designProblems(page("<p>Vzorčno besedilo.</p>")).length, 1);
  assert.equal(designProblems(page("<p>Lorem ipsum dolor</p>")).length, 1);
  assert.equal(designProblems(page("<p>TODO</p>")).length, 1);
});

test("an image without alt text, or shown twice, is a problem", () => {
  assert.equal(designProblems(page('<img src="/a.avif">')).length, 1);
  assert.equal(designProblems(page('<img src="/a.avif" alt=""><img src="/a.avif" alt="">')).length, 1);
});

test("a vague link is a problem", () => {
  assert.equal(designProblems(page('<a href="/subvencije">Več</a>')).length, 1);
  assert.equal(designProblems(page('<a href="/subvencije">Preberite več…</a>')).length, 1);
  assert.deepEqual(designProblems(page('<a href="/subvencije">Subvencija Eko sklada na kratko</a>')), []);
});

test("a link to an English page name is a problem", () => {
  assert.equal(designProblems(page('<a href="/imprint">Pravno obvestilo</a>')).length, 1);
  assert.equal(designProblems(page('<a href="/privacy#x">Politika zasebnosti</a>')).length, 1);
  assert.deepEqual(designProblems(page('<a href="https://example.com/about">Zunanja stran</a>')), []);
});

test("an English segment is found in a path, not in a longer word", () => {
  assert.equal(hasEnglishSegment("/sitemap.html"), true);
  assert.equal(hasEnglishSegment("/en/contact"), true);
  assert.equal(hasEnglishSegment("/zemljevid-strani"), false);
  assert.equal(hasEnglishSegment("/sitemap-index.xml"), false);
});

test("visible text leaves out scripts and tags", () => {
  assert.equal(visibleText(page("<script>TODO</script><p>Fasada</p>")), "Fasada");
});
