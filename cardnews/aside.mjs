// Aside 예약 원클릭: 검수완료 덱 이미지를 Aside 폴더로 복사 + 예약 프롬프트(HANDOFF_aside_prompt.txt) 생성
// 사용: node cardnews/aside.mjs 2026-11-16 2026-11-22   (날짜 생략 = 오늘 이후 검수완료 덱 전부)
// 그다음: aside --permission full-access "$(cat cardnews/HANDOFF_aside_prompt.txt)"
import { readdirSync, existsSync, mkdirSync, copyFileSync, writeFileSync, rmSync } from 'fs';
import { join, dirname } from 'path';
import { homedir } from 'os';
import { fileURLToPath, pathToFileURL } from 'url';

const here = dirname(fileURLToPath(import.meta.url));
const decksDir = join(here, 'decks');
const upload = join(homedir(), '.aside/u/0/cardnews_upload');
const today = new Date(Date.now() + 9 * 3600e3).toISOString().slice(0, 10);   // KST
const [from = today, to = '9999-12-31'] = process.argv.slice(2);

const picked = [];
for (const name of readdirSync(decksDir).sort()) {
  const date = name.slice(0, 10);
  if (date < from || date > to || date < today) continue;
  const { default: d } = await import(pathToFileURL(join(decksDir, name, 'deck.mjs')).href);
  if (d.status !== '검수완료') { console.warn(`건너뜀(검수완료 아님): ${name}`); continue; }
  if (!d.post) { console.error(`❌ post 없음: ${name}`); process.exit(1); }
  const out = join(decksDir, name, `out-${d.theme || 'note'}`);
  const pngs = existsSync(out) ? readdirSync(out).filter(f => /^card-\d+\.png$/.test(f)).sort() : [];
  if (!pngs.length) { console.error(`❌ 이미지 없음: ${name}`); process.exit(1); }
  const dst = join(upload, name);
  rmSync(dst, { recursive: true, force: true }); mkdirSync(dst, { recursive: true });
  pngs.forEach(f => copyFileSync(join(out, f), join(dst, f)));
  picked.push({ name, date, n: pngs.length, dst, post: d.post.trim() });
}
const dup = picked.map(p => p.date).filter((x, i, a) => a.indexOf(x) !== i);
if (dup.length) { console.error(`❌ 같은 날짜에 덱이 2개: ${[...new Set(dup)].join(', ')} — 하루 하나만`); process.exit(1); }
if (!picked.length) { console.error('예약할 덱이 없어요.'); process.exit(1); }

const now = picked.filter(p => p.date === today), later = picked.filter(p => p.date !== today);
const block = p => `■ ${p.date} ${p.date === today ? '지금 바로 게시' : '오전 7:00 (한국 시간) 예약'} — 이미지 ${p.n}장
폴더: ${p.dst}/
본문:
\`\`\`
${p.post}
\`\`\``;
const prompt = `유튜브 '흰지로의 오답노트' 채널(@hinjiroffffff)에 이미지 게시물 ${picked.length}개를 올려 줘. 이미 로그인돼 있어.

방법 (게시물마다 반복):
1. https://www.youtube.com/@hinjiroffffff/posts 열기 → 글쓰기 상자에서 '이미지' → '컴퓨터에서 선택'
2. 아래 폴더의 card-01.png부터 번호 순서대로 전부 올리기 (순서 바꾸지 말 것)
3. '메시지 작성...' 칸에 아래 본문을 줄바꿈·빈 줄까지 그대로 붙여 넣기
4. ${later.length ? "예약: '게시' 오른쪽 ▾(작업 메뉴) → '게시물 예약' → 날짜 고르기 → 시간 7:00 AM → 시간대 (GMT+0900) 확인 → '예약'" : ''}${now.length ? "\n   오늘 날짜 게시물만 '게시'를 바로 누른다." : ''}
5. '예약됨' 탭에서 날짜·시간·이미지 장수가 맞는지 확인

주의:
- 오늘 날짜가 아닌 게시물은 '게시'를 바로 누르지 말 것 (전부 예약).
- 이미 예약·게시된 날짜와 겹치면 올리지 말고 알려 줄 것.
- 기존 게시물의 '작업 메뉴'(수정/삭제)를 누르지 말 것 — 새 글쓰기 상자 '게시' 바로 옆 ▾만.
- 이미지는 아래 지정한 폴더만 쓸 것. 다른 폴더나 예전 이미지 쓰지 말 것.
- 끝나면 ${picked.length}개 각각 날짜·시간·이미지 장수를 표로 알려 줘.

${picked.map(block).join('\n\n')}
`;
writeFileSync(join(here, 'HANDOFF_aside_prompt.txt'), prompt);
console.log(picked.map(p => `${p.date}  ${p.n}장  ${p.name}`).join('\n'));
console.log(`\n→ 이미지 ${upload}/ 에 복사, 프롬프트 cardnews/HANDOFF_aside_prompt.txt`);
console.log(`실행: aside --permission full-access "$(cat cardnews/HANDOFF_aside_prompt.txt)"`);
