// 덱 렌더러: decks/<폴더>/deck.mjs → out/card-NN.png (1080×1350) + preview.html
// 사용: node cardnews/template/render.mjs cardnews/decks/2026-11-09_old-rules [--theme glass|paper] [--no-open]
import { writeFileSync, mkdirSync, existsSync, readFileSync } from 'fs';
import { execFileSync } from 'child_process';
import { resolve, join } from 'path';
import { pathToFileURL } from 'url';

const CHROME = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const deckDir = resolve(process.argv[2] || '.');
const { default: deck } = await import(pathToFileURL(join(deckDir, 'deck.mjs')).href + `?t=${Date.now()}`);
const ti = process.argv.indexOf('--theme');
const theme = ti > 0 ? process.argv[ti + 1] : (deck.theme || 'paper');
const { renderCard: page, W, H } = await import(`./${theme}.mjs`);
const outDir = join(deckDir, theme === 'paper' ? 'out' : `out-${theme}`);
mkdirSync(outDir, { recursive: true });

// 이미지 경로(deck 폴더 기준) → file:// 절대경로
const fix = o => {
  for (const k in o) {
    if (k === 'img' && typeof o[k] === 'string') {
      const p = resolve(deckDir, o[k]);
      if (!existsSync(p)) console.warn('  이미지 없음:', o[k]);
      o[k] = pathToFileURL(p).href;
    } else if (o[k] && typeof o[k] === 'object') fix(o[k]);
  }
};

const n = deck.cards.length;
deck.cards.forEach((c, i) => {
  fix(c);
  const nn = String(i + 1).padStart(2, '0');
  const html = join(outDir, `card-${nn}.html`), png = join(outDir, `card-${nn}.png`);
  writeFileSync(html, page(c, deck, i, n));
  execFileSync(CHROME, ['--headless=new', '--disable-gpu', '--hide-scrollbars', '--no-sandbox',
    `--screenshot=${png}`, `--window-size=${W},${H}`, '--force-device-scale-factor=1',
    '--virtual-time-budget=9000', '--allow-file-access-from-files', pathToFileURL(html).href], { stdio: 'ignore' });
  console.log('rendered', png);
});

// 사실 체크 관문 (wiki/6-사실-체크.md): source.md 없음 / 체크 안 된 항목 → 경고
const src = join(deckDir, 'source.md');
const open_ = existsSync(src) ? (readFileSync(src, 'utf8').match(/^- \[ \]/gm) || []).length : -1;
if (open_ !== 0) console.warn(`\n⚠️  사실 체크 미완: ${open_ < 0 ? 'source.md 없음' : `체크 안 된 항목 ${open_}개`} → wiki/6-사실-체크.md 대로 확인 후 올리세요\n`);
else console.log('✓ 사실 체크 완료 (source.md)');

const cells = deck.cards.map((c, i) => { const nn = String(i + 1).padStart(2, '0');
  return `<figure><img src="card-${nn}.png"><figcaption>${nn} · ${c.label || c.type}</figcaption></figure>`; }).join('');
writeFileSync(join(outDir, 'preview.html'), `<!doctype html><html lang="ko"><head><meta charset="utf-8"><title>${deck.title}</title>
<style>body{margin:0;background:#111;color:#999;font:14px -apple-system,sans-serif;padding:32px}
.g{display:grid;grid-template-columns:repeat(auto-fill,minmax(300px,1fr));gap:24px}
figure{margin:0}img{width:100%;border-radius:12px;display:block;box-shadow:0 8px 30px rgba(0,0,0,.5)}figcaption{margin-top:8px}</style>
</head><body><h2 style="color:#eee">${deck.title}</h2><div class="g">${cells}</div></body></html>`);
if (!process.argv.includes('--no-open')) execFileSync('open', ['-a', 'Google Chrome', join(outDir, 'preview.html')]);
console.log('done →', outDir);
