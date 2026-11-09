// 대시보드 데이터 만들기: decks/* 를 훑어 dashboard/data.js 생성 (AI 토큰 0)
// 사용: node cardnews/dashboard/build.mjs [--open]
import { readdirSync, existsSync, readFileSync, writeFileSync, statSync, mkdirSync, copyFileSync } from 'fs';
import { execFileSync } from 'child_process';
import { join, dirname } from 'path';
import { fileURLToPath, pathToFileURL } from 'url';

const here = dirname(fileURLToPath(import.meta.url));
const decksDir = join(here, '..', 'decks');
const out = [];

for (const name of readdirSync(decksDir).sort()) {
  const dir = join(decksDir, name);
  if (!statSync(dir).isDirectory() || !existsSync(join(dir, 'deck.mjs'))) continue;
  const { default: deck } = await import(pathToFileURL(join(dir, 'deck.mjs')).href + `?t=${Date.now()}`);
  const theme = deck.theme || 'paper';
  const outName = theme === 'paper' ? 'out' : `out-${theme}`;
  const pngDir = join(dir, outName);
  const slides = existsSync(pngDir) ? readdirSync(pngDir).filter(f => /^card-\d+\.(png|gif)$/.test(f)).sort() : [];
  const date = deck.date || (name.match(/^\d{4}-\d{2}-\d{2}/) || [''])[0];
  const capPath = join(dir, 'captions.md');
  const srcPath = join(dir, 'source.md');
  const facts = !existsSync(srcPath) ? 'none' : /^- \[ \]/m.test(readFileSync(srcPath, 'utf8')) ? 'open' : 'ok';
  // 다른 버전: decks/<덱>/variants/card-NN@이름.png → 뷰어에서 원본과 바꿔 보기·나란히 비교 (원본은 지우지 않는다)
  const vDir = join(dir, 'variants'), variants = {};
  if (existsSync(vDir)) for (const f of readdirSync(vDir).sort()) {
    const m = f.match(/^card-(\d+)@(.+)\.png$/); if (!m) continue;
    (variants[+m[1]] ||= []).push({ name: m[2], src: `../decks/${name}/variants/${encodeURIComponent(f)}` });
  }
  // 한 번에 받기용 zip (덱 폴더/<덱>.zip) — 대시보드 버튼을 눌렀을 때만 내려받는다
  const zipPath = join(dir, `${name}.zip`);
  if (slides.length) { try { execFileSync('rm', ['-f', zipPath]); execFileSync('zip', ['-j', '-q', zipPath, ...slides.map(f => join(pngDir, f))]); } catch (e) { console.warn('zip 실패', name); } }
  out.push({ variants, zip: slides.length ? `../decks/${name}/${encodeURIComponent(name)}.zip` : '',
    id: name, date, title: deck.title || name, status: deck.status || '초안', theme,
    source: deck.source || null, facts,
    post: deck.post || '', cover: (deck.cards.find(c => /Cover/.test(c.type)) || {}).title || '',
    slides: slides.map(f => `../decks/${name}/${outName}/${f}`),
    captions: existsSync(capPath) ? readFileSync(capPath, 'utf8') : '',
  });
}

// ── 주간 묶음: 주(ISO)마다 zip 하나 — 안은 날짜별 폴더(01.png…, 캡션.md). 사실 체크 통과한 덱만 넣는다
const DOW = ['일', '월', '화', '수', '목', '금', '토'];
const isoWeek = ds => { const d = new Date(ds + 'T00:00:00Z'); const day = d.getUTCDay() || 7; d.setUTCDate(d.getUTCDate() + 4 - day);
  const y = new Date(Date.UTC(d.getUTCFullYear(), 0, 1)); return `${d.getUTCFullYear()}-W${String(Math.ceil(((d - y) / 864e5 + 1) / 7)).padStart(2, '0')}`; };
const safe = t => t.replace(/[\/:*?"<>|]/g, '').trim();
const weeks = {};
for (const x of out) { if (!x.date) continue; (weeks[isoWeek(x.date)] ||= []).push(x); }
const wkDir = join(here, 'weeks'); mkdirSync(wkDir, { recursive: true });
const weekInfo = {};
for (const [wk, list] of Object.entries(weeks)) {
  const ok = list.filter(x => x.facts === 'ok' && x.slides.length), skip = list.filter(x => !ok.includes(x)).map(x => x.title);
  const root = `흰지로_카드뉴스_${wk}`, stage = join(wkDir, '_stage'), zip = join(wkDir, `${root}.zip`);
  execFileSync('rm', ['-rf', stage, zip]);
  for (const x of ok) {
    const dd = new Date(x.date + 'T00:00:00Z'), folder = join(stage, root, safe(`${x.date}_${DOW[dd.getUTCDay()]}_${x.title}`));
    mkdirSync(folder, { recursive: true });
    x.slides.forEach((s, k) => copyFileSync(join(here, s), join(folder, `${String(k + 1).padStart(2, '0')}.png`)));
    if (x.captions) writeFileSync(join(folder, '캡션.md'), x.captions);
  }
  if (ok.length) execFileSync('zip', ['-r', '-q', zip, root], { cwd: stage });
  execFileSync('rm', ['-rf', stage]);
  weekInfo[wk] = { zip: ok.length ? `weeks/${encodeURIComponent(root)}.zip` : '', count: ok.length, skip };
}

writeFileSync(join(here, 'weeks.js'), `window.CARDNEWS_WEEKS = ${JSON.stringify(weekInfo, null, 1)};\n`);
writeFileSync(join(here, 'data.js'), `// build.mjs가 만든 파일 — 직접 고치지 않는다 (${new Date().toISOString()})\nwindow.CARDNEWS = ${JSON.stringify(out, null, 1)};\n`);
console.log(`덱 ${out.length}개 → dashboard/data.js`);
if (process.argv.includes('--open')) execFileSync('open', ['-a', 'Google Chrome', join(here, 'index.html')]);
