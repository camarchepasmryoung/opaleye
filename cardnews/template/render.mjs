// 덱 렌더러: decks/<폴더>/deck.mjs → out/card-NN.png (1080×1350) + preview.html
// 사용: node cardnews/template/render.mjs cardnews/decks/2026-11-09_old-rules [--theme glass|paper] [--no-open]
import { writeFileSync, mkdirSync, existsSync, readFileSync } from 'fs';
import { execFileSync } from 'child_process';
import { resolve, join } from 'path';
import { pathToFileURL } from 'url';

const CHROME = process.env.CHROME_PATH || (existsSync('/Applications/Google Chrome.app/Contents/MacOS/Google Chrome')
  ? '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'
  : (existsSync('/usr/bin/google-chrome') ? '/usr/bin/google-chrome' : '/opt/pw-browsers/chromium'));
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

// 잘림 자동 보정 (2026-11-09 시영): 본문이 상자 폭을 넘겨 잘리면(줄 꺾임), 그 장 하나만
// 48 → 47 → 46…로 1px씩 줄여 다시 렌더한다. 내용(문장)은 절대 줄이지 않는다. 다른 장·다른 덱은 손대지 않는다.
const checkWrap = (html) => {
  const tmp = join(outDir, `_wrapchk.html`);
  writeFileSync(tmp, html.replace('</body>', `<script>document.fonts.ready.then(()=>{
    const b = document.querySelector('.wrapchk');
    if (!b) { document.title = 'NA'; return; }
    const prevWS = b.style.whiteSpace; b.style.whiteSpace = 'nowrap';
    const wraps = b.scrollWidth > b.clientWidth + 1;
    b.style.whiteSpace = prevWS;
    document.title = wraps ? 'WRAP' : 'OK';
  });</script></body>`));
  const out = execFileSync(CHROME, ['--headless=new', '--disable-gpu', '--no-sandbox', '--allow-file-access-from-files',
    '--virtual-time-budget=6000', '--dump-dom', pathToFileURL(resolve(tmp)).href], { encoding: 'utf8', stdio: ['ignore', 'pipe', 'ignore'] });
  return (out.match(/<title>(.*?)<\/title>/) || [])[1];
};
const render = (c, d, i, n, png) => {
  const html = join(outDir, `card-${String(i + 1).padStart(2, '0')}.html`);
  const body = page(c, d, i, n);
  writeFileSync(html, body);
  execFileSync(CHROME, ['--headless=new', '--disable-gpu', '--hide-scrollbars', '--no-sandbox',
    `--screenshot=${png}`, `--window-size=${W},${H}`, '--force-device-scale-factor=1',
    '--virtual-time-budget=9000', '--allow-file-access-from-files', pathToFileURL(html).href], { stdio: 'ignore' });
  return body;
};

const n = deck.cards.length;
deck.cards.forEach((c, i) => {
  fix(c);
  const nn = String(i + 1).padStart(2, '0');
  const png = join(outDir, `card-${nn}.png`);
  const base = c.size || 48;
  let body = render(c, deck, i, n, png);
  if ('size' in c) {
    let size = base;
    while (checkWrap(body) === 'WRAP' && size > 30) {
      size -= 1;
      console.warn(`  ⚠️  ${nn}장 본문이 ${size + 1}px에서 잘려서 ${size}px로 줄임 (그 장만, 내용은 그대로)`);
      c.size = size;
      body = render(c, deck, i, n, png);
    }
    if (size !== base) c.size = size; // 메모리상 유지(다음 로직 참고용), 파일은 고치지 않음
  }
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
