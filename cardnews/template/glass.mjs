// 흰지로 카드뉴스 — 유리판 테마 (1080×1080, 정방형)
// 디자인 출처 = 모션그래픽 기본 디자인 '유리판' (~/youtube-pd/youtube-pd/_tools/hf-sanji-study/design-rules.md §2·3·5·6·17·19,
//   기준 코드 thumb_glass/c1/glass.css). 바탕 #1b35c4 + 오로라 띠 3개 + 유리 판(흰 10% + 위 하이라이트 + 2px 흰 테).
// 덱 문법은 paper.mjs와 같다(cover · page + blocks) → deck.mjs를 바꾸지 않고 테마만 갈아 끼운다.

export const W = 1080, H = 1080;   // 2026-11-09 시영: 모든 카드뉴스 정방형

const esc = (s = '') => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const rich = (s = '') => esc(s)
  .replace(/==(.+?)==/g, '<span class="em">$1</span>')
  .replace(/\*\*(.+?)\*\*/g, '<b>$1</b>')
  .replace(/~~(.+?)~~/g, '<s>$1</s>')
  .replace(/\n/g, '<br>');

const CSS = `
@import url('https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css');
:root{--base:#1b35c4;
  --w100:#fff;--w96:rgba(255,255,255,.96);--w86:rgba(255,255,255,.86);--w80:rgba(255,255,255,.80);--w60:rgba(255,255,255,.60);--w35:rgba(255,255,255,.35);
  --sky:rgba(115,200,255,.30);--pink:rgb(240,130,165)}
*{margin:0;padding:0;box-sizing:border-box}
html,body{width:${W}px;height:${H}px;background:var(--base)}
body{font-family:'Pretendard Variable',Pretendard,'Apple SD Gothic Neo',sans-serif;-webkit-font-smoothing:antialiased;word-break:keep-all;color:#fff}
b{font-weight:750;color:#fff}
.em{color:#fff;text-shadow:0 0 28px rgba(140,210,255,.75)}
s{text-decoration-color:var(--pink);text-decoration-thickness:3px;color:var(--w60)}

/* 바탕: #1b35c4 + 오로라 띠 3개 (§19, 띠 2600×640 blur50 → 4:5 판에 맞춰 세로로 펼침) */
.page{position:relative;width:${W}px;height:${H}px;overflow:hidden;background:var(--base)}
.aur{position:absolute;inset:0;overflow:hidden}
.band{position:absolute;left:-760px;width:2600px;height:640px;filter:blur(50px);transform-origin:50% 50%}

/* 유리 판 (§2·thumb_glass glass.css): 흰 10% + 위→아래 하이라이트 25%→0 + 2px 테 (왼쪽 위 .60 → 오른쪽 아래 .30). 그림자 없음 */
.gl{position:relative;background-color:rgba(255,255,255,.10);
  background-image:linear-gradient(180deg,rgba(255,255,255,.25) 0%,rgba(255,255,255,.14) 35%,rgba(255,255,255,0) 96%)}
.gl::after{content:"";position:absolute;inset:0;border-radius:inherit;padding:2px;pointer-events:none;
  background:linear-gradient(150deg,rgba(255,255,255,.60),rgba(255,255,255,.30));
  -webkit-mask:linear-gradient(#000 0 0) content-box,linear-gradient(#000 0 0);-webkit-mask-composite:xor;mask-composite:exclude}
/* 얇은 줄 (§2-3): 흰 11.8% + 1.5px 테, 빛 없음 */
.row{background:rgba(255,255,255,.118);border:1.5px solid rgba(255,255,255,.28)}
/* 강조 = 하늘색 한 겹 + 바깥 빛 (§6) — 한 장에 하나 */
.hi{background-image:linear-gradient(180deg,rgba(255,255,255,.42) 0%,rgba(255,255,255,.20) 35%,rgba(255,255,255,0) 96%),linear-gradient(var(--sky),var(--sky));
  box-shadow:0 0 70px rgba(140,210,255,.45)}

.label{position:absolute;top:64px;left:64px;height:56px;padding:0 26px;border-radius:999px;display:inline-flex;align-items:center;font-size:24px;font-weight:750;letter-spacing:.01em;color:#fff;z-index:3}
.main{position:absolute;top:156px;left:64px;right:64px;bottom:118px;display:flex;flex-direction:column;z-index:2}
.head{font-size:64px;font-weight:800;line-height:1.26;letter-spacing:-.025em}
.sub{margin-top:24px;font-size:30px;font-weight:450;color:var(--w86);letter-spacing:-.01em;line-height:1.5}
.txt{font-size:30px;line-height:1.55;color:var(--w86);letter-spacing:-.01em;font-weight:450}
.note{font-size:22px;color:var(--w60);letter-spacing:-.01em;line-height:1.5;font-weight:500}
.box{border-radius:36px;padding:30px 40px;flex:none}
.box .t{font-size:38px;font-weight:800;letter-spacing:-.025em}
.box .d{margin-top:10px;font-size:29px;line-height:1.5;color:var(--w96);font-weight:450}
.foot{position:absolute;left:64px;right:64px;bottom:44px;height:44px;display:flex;align-items:center;justify-content:space-between;font-size:22px;font-weight:700;color:var(--w86);z-index:3}
.foot .c{position:absolute;left:50%;transform:translateX(-50%);color:var(--w60);font-weight:600}
.logo{display:flex;align-items:center;gap:10px;font-weight:750;color:#fff}
.logo i{width:28px;height:28px;border-radius:8px;background:#fff;display:grid;place-items:center}
.logo i:after{content:'';border-left:10px solid var(--base);border-top:6.5px solid transparent;border-bottom:6.5px solid transparent;margin-left:3px}
.num{width:58px;height:58px;border-radius:50%;flex:none;display:grid;place-items:center;font-size:24px;font-weight:700;color:#fff}
.frame{border-radius:24px;overflow:hidden}
.frame img{display:block;width:100%;aspect-ratio:16/9;object-fit:cover}
`;

// 오로라 띠: 색·투명도 = BG_aurora_keys.json, 위치 = 4:5 판 위·가운데·아래
const AURORA = `<div class="aur">
  <div class="band" style="top:-60px;transform:rotate(-18deg);background:radial-gradient(ellipse at center,#3d6dff 0%,rgba(61,109,255,0) 70%);opacity:.75"></div>
  <div class="band" style="top:430px;transform:translateX(120px) rotate(-14deg);background:radial-gradient(ellipse at center,#6b4dff 0%,rgba(107,77,255,0) 70%);opacity:.5"></div>
  <div class="band" style="top:880px;transform:translateX(-120px) rotate(-22deg);background:radial-gradient(ellipse at center,#2fa0ff 0%,rgba(47,160,255,0) 70%);opacity:.35"></div>
</div>`;

const doc = body => `<!doctype html><html lang="ko"><head><meta charset="utf-8"><style>${CSS}</style></head><body>${body}</body></html>`;
const pad = k => String(k).padStart(2, '0');

// ── 커버: 유리 카드 4장(옛 규칙, 분홍 취소선) + 큰 흰 제목
function cover(c, d) {
  const tilt = [-5, 3, -2.5, 4.5], dx = [-40, 60, -20, 40];
  const stack = c.rules.map((r, k) => `
    <div class="gl" style="position:absolute;left:${150 + dx[k]}px;top:${60 + k * 140}px;width:720px;height:118px;border-radius:40px;transform:rotate(${tilt[k]}deg);
      display:flex;align-items:center;gap:24px;padding:0 30px">
      <span class="num gl" style="width:62px;height:62px">${pad(k + 1)}</span>
      <span style="position:relative;font-size:44px;font-weight:750;color:var(--w96);letter-spacing:-.02em">${esc(r)}
        <span style="position:absolute;left:-8px;right:-8px;top:54%;height:5px;border-radius:3px;background:var(--pink);transform:rotate(-1.5deg)"></span></span>
    </div>`).join('');
  const stamp = `<div class="gl hi" style="position:absolute;right:56px;top:330px;width:250px;height:250px;border-radius:50%;transform:rotate(-12deg);display:grid;place-items:center;text-align:center">
      <div><div style="font-size:22px;font-weight:800;letter-spacing:.18em;color:var(--w86)">EXPIRED</div>
      <div style="font-size:50px;font-weight:900;letter-spacing:-.03em;line-height:1.1;margin-top:6px">유통기한<br>만료</div></div></div>`;
  return doc(`<div class="page">${AURORA}
  <span class="label gl" style="font-weight:800;letter-spacing:.05em">${esc(c.pill).toUpperCase()}</span>
  <div style="position:absolute;left:0;right:0;top:140px;height:700px;z-index:2">${stack}${stamp}</div>
  <div style="position:absolute;left:64px;right:64px;bottom:140px;z-index:2">
    <div style="font-size:44px;font-weight:750;color:var(--w86);letter-spacing:-.02em;margin-bottom:20px">${esc(c.kicker)}</div>
    <div style="font-size:112px;font-weight:900;line-height:1.1;letter-spacing:-.035em">${rich(c.title)}</div>
  </div>
  <div class="foot"><span>${esc(d.brand)}</span></div></div>`);
}

// ── 안쪽 장 블록 (문법은 paper.mjs와 같음, 재료만 유리)
const blocks = {
  list: b => `<div style="display:flex;flex-direction:column;gap:${b.small ? 12 : 18}px">${b.items.map((it, k) => `
      <div class="row" style="border-radius:32px;display:flex;align-items:${it.desc ? 'flex-start' : 'center'};gap:26px;padding:${b.small ? '15px 28px' : '30px 32px'}">
        <span class="num gl">${pad(it.no ?? k + 1)}</span>
        <div style="padding-top:${it.desc ? 4 : 0}px"><div style="font-size:${b.small ? 40 : 48}px;font-weight:800;letter-spacing:-.025em;line-height:1.25">${rich(it.title)}</div>
        ${it.desc ? `<div class="txt" style="margin-top:6px;font-size:28px">${rich(it.desc)}</div>` : ''}</div></div>`).join('')}</div>`,
  imageStats: b => `<div class="gl" style="border-radius:40px;padding:24px;display:flex;gap:26px;align-items:center">
      <div class="frame" style="width:500px;flex:none"><img src="${b.img}"></div>
      <div style="flex:1;display:flex;flex-direction:column;gap:12px">${b.stats.map(s => `<div class="row" style="border-radius:22px;padding:12px 20px">
        <div style="font-size:20px;font-weight:650;color:var(--w60)">${esc(s[0])}</div>
        <div style="font-size:36px;font-weight:800;letter-spacing:-.02em">${rich(s[1])}</div></div>`).join('')}</div></div>
      <div class="note" style="margin-top:14px">${esc(b.cap)}</div>`,
  stat: b => `<div class="gl" style="border-radius:40px;padding:44px 44px;display:flex;align-items:center;gap:40px">
      <div style="font-size:158px;font-weight:800;letter-spacing:-.04em;line-height:1;text-shadow:0 0 60px rgba(255,255,255,.36)">${esc(b.num)}</div>
      <div class="txt" style="font-size:32px;color:var(--w96)">${rich(b.label)}</div></div>
      ${b.cap ? `<div class="note" style="margin-top:14px">${esc(b.cap)}</div>` : ''}`,
  bars: b => `<div class="gl" style="border-radius:40px;padding:40px;display:flex;flex-direction:column;gap:36px">
      ${b.rows.map(r => `<div><div style="display:flex;justify-content:space-between;font-size:27px;font-weight:650;color:${r.good ? '#fff' : 'var(--w60)'};margin-bottom:14px"><span>${esc(r.label)}</span><span style="letter-spacing:.1em">${r.stars}</span></div>
        <div class="${r.good ? 'gl hi' : 'row'}" style="height:84px;border-radius:24px;display:flex;align-items:center;padding:0 28px;font-size:30px;font-weight:750;color:${r.good ? '#fff' : 'var(--w60)'}">${esc(r.bar)}</div></div>`).join('')}
      </div><div class="note" style="margin-top:14px">${esc(b.cap)}</div>`,
  timeline: b => `<div class="gl" style="border-radius:40px;padding:36px 36px 28px">
      <div style="display:flex;align-items:flex-end;gap:12px;height:300px">
      ${b.points.map(p => p.gap
        ? `<div style="flex:2.2;align-self:center;text-align:center;border-top:3px dashed var(--w35);padding-top:12px;font-size:24px;font-weight:700;color:var(--w60)">${esc(p.gap)}</div>`
        : `<div style="flex:1;display:flex;flex-direction:column;align-items:center;gap:10px">
            <span style="font-size:24px;font-weight:750;color:${p.hi ? '#fff' : 'var(--w80)'}">${esc(p.v)}</span>
            <div class="${p.hi ? 'gl hi' : 'row'}" style="width:100%;height:${p.h}px;border-radius:16px;${p.hi ? 'background-color:rgba(255,255,255,.55)' : ''}"></div>
            <span style="font-size:20px;color:var(--w60);font-weight:650">${esc(p.d)}</span></div>`).join('')}
      </div></div><div class="note" style="margin-top:14px">${esc(b.cap)}</div>`,
  rows: b => `<div style="display:flex;flex-direction:column;gap:14px">${b.items.map(r => `<div class="row" style="border-radius:30px;display:flex;align-items:center;gap:24px;padding:16px 28px 16px 16px;${r.dim ? 'opacity:.5' : ''}">
        <div class="frame" style="width:220px;flex:none;border-radius:18px"><img src="${r.img}"></div>
        <div style="flex:1;font-size:27px;font-weight:650;line-height:1.4;letter-spacing:-.01em;color:var(--w96)">${esc(r.title)}</div>
        <div style="text-align:right;flex:none"><div style="font-size:50px;font-weight:800;letter-spacing:-.03em;${r.dim ? '' : 'text-shadow:0 0 30px rgba(140,210,255,.8)'}">${esc(r.x)}</div>
        <div style="font-size:20px;color:var(--w60);font-weight:650">${esc(r.views)}</div></div></div>`).join('')}</div>
      <div class="note" style="margin-top:14px">${esc(b.cap)}</div>`,
  image: b => `<div class="gl frame" style="padding:18px;border-radius:40px"><div class="frame"><img src="${b.img}"></div></div><div class="note" style="margin-top:14px">${esc(b.cap)}</div>`,
  fill: b => { const bl = t => `<span class="row" style="display:inline-block;min-width:210px;border-radius:20px;text-align:center;padding:0 18px;line-height:1.35;margin:6px 0">${esc(t)}</span>`;
    return `<div class="gl" style="border-radius:40px;padding:44px;font-size:50px;font-weight:800;line-height:1.7;letter-spacing:-.03em">이 영상은<br>${bl(b.a)} 을(를) 원하는<br>${bl(b.b)} 을(를) 위한 영상이다.</div>
      ${b.example ? `<div class="note" style="margin-top:14px">${esc(b.example)}</div>` : ''}`; },
  text: b => `<div class="txt">${rich(b.text)}</div>`,
  gap: b => `<div style="height:${b.h ?? 40}px;flex:none"></div>`,
};

function page(c, d, i, n) {
  const body = (c.blocks || []).map(b => blocks[b.type](b)).join('');
  return doc(`<div class="page">${AURORA}
  <span class="label gl">${esc(c.label ?? d.series)}</span>
  <div class="main">
    <div class="head">${rich(c.head)}</div>
    ${c.sub ? `<div class="sub">${rich(c.sub)}</div>` : ''}
    <div style="height:${c.gapTop ?? 44}px;flex:none"></div>
    ${body}
    ${c.box ? `<div style="${c.pinBox ? 'flex:1;min-height:30px' : 'height:30px;flex:none'}"></div><div class="box gl hi"><div class="t">${rich(c.box.t)}</div>${c.box.d ? `<div class="d">${rich(c.box.d)}</div>` : ''}</div>` : ''}
    ${c.note ? `<div class="note" style="margin-top:18px">${rich(c.note)}</div>` : ''}
  </div>
  <div class="foot"><span>${esc(d.brand)}</span><span class="c">${pad(i + 1)} / ${pad(n)}</span></div>
</div>`);
}


// ── v3 단순 형식 (2026-11-09 시영 "비워내기" · wiki/5-가독성-기준.md)
//   글은 바탕 위 맨 글자만. 블록·이미지 안에 글 없음. 위쪽 라벨·장 번호 없음. 순서는 헤드라인 앞 `01.`
const visualsV3 = {
  // 이미지: 유리 테 액자만, 안에 글 없음
  image: v => `<div class="gl" style="border-radius:44px;padding:18px;width:${H < 1300 ? 720 : 952}px;margin:0 auto"><div class="frame" style="border-radius:28px"><img src="${v.img}"></div></div>`,
  // 점 n개 중 k개 켜기 (예: 10개 중 8개)
  dots: v => `<div style="display:grid;grid-template-columns:repeat(5,1fr);gap:34px 0;justify-items:center;padding:20px 40px">${Array.from({ length: v.n }, (_, k) =>
      `<div class="${k < v.on ? 'gl hi' : 'row'}" style="width:120px;height:120px;border-radius:50%;${k < v.on ? '' : 'opacity:.55'}"></div>`).join('')}</div>`,
  // 같은 길이 막대 2개 + 막대 밖 별점
  bars: v => `<div style="display:flex;flex-direction:column;gap:46px;padding:10px 0">${v.rows.map(r => `
      <div style="display:flex;align-items:center;gap:26px">
        <div class="${r.good ? 'gl hi' : 'row'}" style="flex:1;height:110px;border-radius:30px;${r.good ? '' : 'opacity:.6'}"></div>
        <span style="width:250px;flex:none;font-size:44px;letter-spacing:.06em;color:${r.good ? '#fff' : 'var(--w35)'}">${r.stars}</span></div>`).join('')}</div>`,
  // 막대 그래프 (판 없음): 값·날짜는 막대 밖
  chart: v => `<div style="display:flex;align-items:flex-end;gap:16px;height:440px">${v.points.map(p => p.gap
      ? `<div style="flex:1.8;align-self:center;text-align:center;border-top:3px dashed var(--w35);padding-top:14px;font-size:28px;font-weight:700;color:var(--w60)">${esc(p.gap)}</div>`
      : `<div style="flex:1;display:flex;flex-direction:column;align-items:center;gap:12px">
          <span style="font-size:30px;font-weight:800;color:${p.hi ? '#fff' : 'var(--w60)'}">${esc(p.v)}</span>
          <div class="${p.hi ? 'gl hi' : 'row'}" style="width:100%;height:${p.h}px;border-radius:20px"></div>
          <span style="font-size:24px;color:var(--w60);font-weight:650">${esc(p.d)}</span></div>`).join('')}</div>`,
  // 아이콘 하나 (마지막 장): 저장 표시
  save: () => `<div style="display:grid;place-items:center;padding:20px 0"><div class="gl hi" style="width:260px;height:260px;border-radius:72px;display:grid;place-items:center">
      <svg width="110" height="130" viewBox="0 0 22 26"><path d="M2 3a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v21l-9-6-9 6z" fill="#fff"/></svg></div></div>`,
};

// 안쪽 장: [옛 규칙 취소선] → `01.` 헤드라인 → 그림 → 맨 글자 한 줄
function step(c, d) {
  return doc(`<div class="page">${AURORA}
  <div class="main" style="top:120px;bottom:130px;justify-content:space-between">
    <div>
      ${c.old ? `<div style="font-size:34px;font-weight:600;color:var(--w60)"><s>${esc(c.old)}</s></div>` : ''}
      <div class="head" style="font-size:78px;line-height:1.22;margin-top:${c.old ? 18 : 0}px">${c.no ? `<span style="color:var(--w60)">${esc(c.no)}.</span> ` : ''}${rich(c.head)}</div>
    </div>
    <div>${visualsV3[c.visual.type](c.visual)}</div>
    <div class="txt" style="font-size:36px;line-height:1.5;color:var(--w96);font-weight:500">${rich(c.line)}</div>
  </div>
  <div class="foot"><span>${esc(d.brand)}</span>${c.src ? `<span style="font-weight:500;color:var(--w60);font-size:20px">${esc(c.src)}</span>` : ''}</div>
</div>`);
}

// 표지: 옛 규칙을 블록 없이 큰 맨 글자 + 분홍 취소선, 아래 질문 + 큰 제목
function coverPlain(c, d) {
  const lines = c.rules.map((r, k) => `<div style="position:relative;display:inline-block;font-size:${H < 1300 ? 60 : 76}px;font-weight:800;color:var(--w60);letter-spacing:-.03em;line-height:1.42;margin-left:${[0, 70, 20, 110][k % 4]}px">${esc(r)}
      <span style="position:absolute;left:-10px;right:-10px;top:52%;height:8px;border-radius:4px;background:var(--pink);transform:rotate(${[-2, 1.5, -1, 2][k % 4]}deg)"></span></div>`).join('<br>');
  return doc(`<div class="page">${AURORA}
  <div style="position:absolute;left:64px;right:64px;top:${H < 1300 ? 80 : 110}px;z-index:2">${lines}</div>
  <div style="position:absolute;left:64px;right:64px;bottom:140px;z-index:2">
    <div style="font-size:46px;font-weight:750;color:var(--w86);letter-spacing:-.02em;margin-bottom:22px">${esc(c.kicker)}</div>
    <div style="font-size:116px;font-weight:900;line-height:1.1;letter-spacing:-.035em">${rich(c.title)}</div>
  </div>
  <div class="foot"><span>${esc(d.brand)}</span></div></div>`);
}

export const types = { cover, page, step, coverPlain };
export const renderCard = (c, d, i, n) => types[c.type](c, d, i, n);
