// 흰지로 카드뉴스 템플릿 v2 — 1080×1350 (4:5)
// 규칙 = design-rules.md (maven__ai × Higgsfield 캐러셀 역추적). 커버만 어둡고, 안쪽 장은 흰 종이.
// 카드 타입: cover(커버) · page(안쪽 장, blocks 조합)

export const W = 1080, H = 1350;

const esc = (s = '') => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
// **굵게** → 진하게, ==분홍== → 포인트색, ~~취소~~ → 취소선, \n → 줄바꿈
const rich = (s = '') => esc(s)
  .replace(/==(.+?)==/g, '<span class="pk">$1</span>')
  .replace(/\*\*(.+?)\*\*/g, '<b>$1</b>')
  .replace(/~~(.+?)~~/g, '<s>$1</s>')
  .replace(/\n/g, '<br>');

const CSS = `
@import url('https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css');
:root{--pk:#EB2560;--paper:#F7F7F7;--ink:#111111;--ink2:#333333;--gray:#707070;--light:#A0A0A0;--rule:#DADADA;--bar:#E4E4E4}
*{margin:0;padding:0;box-sizing:border-box}
html,body{width:${W}px;height:${H}px}
body{font-family:'Pretendard Variable',Pretendard,'Apple SD Gothic Neo',sans-serif;-webkit-font-smoothing:antialiased;word-break:keep-all}
.pk{color:var(--pk)} s{text-decoration-color:var(--pk);text-decoration-thickness:3px;color:var(--light)}

/* 안쪽 장 */
.page{position:relative;width:${W}px;height:${H}px;overflow:hidden;background:var(--paper);color:var(--ink)}
.page b{font-weight:700;color:var(--ink)}
.label{position:absolute;top:70px;left:64px;font-size:21px;font-weight:700;letter-spacing:.01em;text-transform:uppercase}
.main{position:absolute;top:150px;left:64px;right:64px;bottom:120px;display:flex;flex-direction:column}
.head{font-size:59px;font-weight:700;line-height:1.3;letter-spacing:-.03em}
.sub{margin-top:26px;font-size:28px;font-weight:400;color:var(--gray);letter-spacing:-.02em;line-height:1.5}
.hr{height:1px;background:var(--rule);flex:none}
.txt{font-size:29px;line-height:1.62;color:var(--ink2);letter-spacing:-.02em}
.note{font-size:21px;color:var(--light);letter-spacing:-.01em;line-height:1.5}
.box{background:var(--pk);color:#fff;padding:32px;flex:none}
.box .t{font-size:36px;font-weight:700;letter-spacing:-.03em}
.box .d{margin-top:10px;font-size:28px;line-height:1.5;letter-spacing:-.02em;opacity:.95}
.box b{color:#fff}
.foot{position:absolute;left:64px;right:64px;bottom:0;height:92px;border-top:1px solid var(--rule);display:flex;align-items:center;justify-content:space-between;font-size:20px;font-weight:700}
.foot .c{position:absolute;left:50%;transform:translateX(-50%);color:var(--gray);font-weight:500}
.logo{display:flex;align-items:center;gap:9px;font-size:22px;font-weight:700;letter-spacing:-.01em}
.logo i{width:24px;height:24px;border-radius:7px;background:var(--pk);display:grid;place-items:center}
.logo i:after{content:'';border-left:9px solid #fff;border-top:6px solid transparent;border-bottom:6px solid transparent;margin-left:3px}
.img{display:block;width:100%;aspect-ratio:16/9;object-fit:cover}

/* 커버 */
.cover{position:relative;width:${W}px;height:${H}px;overflow:hidden;background:#0B0B0E;color:#fff}
.glow{position:absolute;inset:0;background:radial-gradient(700px 520px at 92% -6%,rgba(235,37,96,.24),transparent 70%),radial-gradient(600px 500px at -10% 105%,rgba(235,37,96,.10),transparent 70%)}
.grid{position:absolute;inset:0;opacity:.35;background-image:linear-gradient(rgba(255,255,255,.035) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.035) 1px,transparent 1px);background-size:54px 54px;-webkit-mask-image:linear-gradient(#000,transparent 75%)}
.pill{position:absolute;top:64px;left:64px;display:inline-flex;align-items:center;height:46px;padding:0 22px;border-radius:999px;background:var(--pk);color:#fff;font-size:21px;font-weight:800;letter-spacing:.06em;text-transform:uppercase;z-index:5}
.cfoot{position:absolute;bottom:56px;left:64px;right:64px;display:flex;justify-content:space-between;align-items:center;z-index:5}
.cfoot .h{font-size:21px;font-weight:600;color:#8A8A94;letter-spacing:.04em}
.cfoot .logo{color:var(--pk);font-size:34px;font-weight:800}.cfoot .logo i{width:30px;height:30px}
`;

const doc = body => `<!doctype html><html lang="ko"><head><meta charset="utf-8"><style>${CSS}</style></head><body>${body}</body></html>`;
const pad = k => String(k).padStart(2, '0');

// ── 커버 (레퍼런스 01장): 위 그래픽 · 아래 포인트색 서브라인 + 흰 큰 제목 · 바닥 핸들/로고
function cover(c, d) {
  const tilt = [-5, 3, -2.5, 4.5], dx = [-30, 70, -10, 50];
  const stack = c.rules.map((r, k) => `
    <div style="position:absolute;left:${150 + dx[k]}px;top:${70 + k * 138}px;width:700px;height:116px;transform:rotate(${tilt[k]}deg);
      background:#17171D;border:1.5px solid #2C2C35;border-radius:26px;display:flex;align-items:center;gap:26px;padding:0 34px;box-shadow:0 24px 50px rgba(0,0,0,.45)">
      <span style="font-size:26px;font-weight:800;color:var(--pk);letter-spacing:.04em">${pad(k + 1)}</span>
      <span style="position:relative;font-size:42px;font-weight:700;color:#D7D7DE;letter-spacing:-.03em">${esc(r)}
        <span style="position:absolute;left:-8px;right:-8px;top:54%;height:5px;border-radius:3px;background:var(--pk);opacity:.9;transform:rotate(-1.5deg)"></span></span>
    </div>`).join('');
  const stamp = `<div style="position:absolute;right:70px;top:330px;width:250px;height:250px;border-radius:50%;border:7px solid var(--pk);
      transform:rotate(-14deg);display:grid;place-items:center;text-align:center;color:var(--pk);background:rgba(11,11,14,.6)">
      <div><div style="font-size:24px;font-weight:800;letter-spacing:.18em">EXPIRED</div>
      <div style="font-size:50px;font-weight:900;letter-spacing:-.04em;line-height:1.1;margin-top:6px">유통기한<br>만료</div></div></div>`;
  return doc(`<div class="cover"><div class="glow"></div><div class="grid"></div><span class="pill">${esc(c.pill)}</span>
  <div style="position:absolute;left:0;right:0;top:130px;height:700px">${stack}${stamp}</div>
  <div style="position:absolute;left:0;right:0;bottom:0;height:640px;background:linear-gradient(transparent,#0B0B0E 42%)"></div>
  <div style="position:absolute;left:64px;right:64px;bottom:150px;z-index:4">
    <div style="font-size:44px;font-weight:700;color:var(--pk);letter-spacing:-.03em;margin-bottom:18px">${esc(c.kicker)}</div>
    <div style="font-size:112px;font-weight:900;line-height:1.08;letter-spacing:-.045em">${rich(c.title)}</div>
  </div>
  <div class="cfoot"><span class="h">${esc(d.brand)}</span></div></div>`);
}

// ── 안쪽 장 블록 (레퍼런스 02장 문법: 구분선 · 번호 목록 · 각진 강조 박스)
const blocks = {
  // 번호 목록: items [{title, desc, no?}], small = 제목 작게
  list: b => `<div>${b.items.map((it, k) => `<div class="hr"></div>
      <div style="display:flex;padding:${b.small ? 22 : 32}px 0">
        <span style="width:97px;flex:none;font-size:21px;font-weight:700;color:var(--gray);padding-top:${b.small ? 12 : 20}px">${pad(it.no ?? k + 1)}</span>
        <div><div style="font-size:${b.small ? 38 : 52}px;font-weight:700;letter-spacing:-.03em;line-height:1.3">${rich(it.title)}</div>
        ${it.desc ? `<div class="txt" style="margin-top:6px">${rich(it.desc)}</div>` : ''}</div></div>`).join('')}<div class="hr"></div></div>`,
  // 이미지 + 오른쪽 숫자 목록
  imageStats: b => `<div class="hr"></div><div style="display:flex;gap:40px;padding:32px 0;align-items:center">
      <img class="img" style="width:470px;flex:none" src="${b.img}">
      <div style="flex:1">${b.stats.map((s, k) => `<div style="padding:12px 0;${k ? 'border-top:1px solid var(--rule)' : ''}">
        <div style="font-size:20px;font-weight:700;color:var(--gray)">${esc(s[0])}</div>
        <div style="font-size:40px;font-weight:700;letter-spacing:-.03em">${rich(s[1])}</div></div>`).join('')}</div></div>
      <div class="hr"></div><div class="note" style="margin-top:14px">${esc(b.cap)}</div>`,
  // 큰 숫자
  stat: b => `<div class="hr"></div><div style="display:flex;align-items:center;gap:44px;padding:34px 0">
      <div style="font-size:150px;font-weight:800;letter-spacing:-.06em;line-height:1;color:var(--pk)">${esc(b.num)}</div>
      <div class="txt" style="font-size:31px;color:var(--ink)">${rich(b.label)}</div></div><div class="hr"></div>
      ${b.cap ? `<div class="note" style="margin-top:14px">${esc(b.cap)}</div>` : ''}`,
  // 막대 비교
  bars: b => `<div class="hr"></div><div style="padding:40px 0;display:flex;flex-direction:column;gap:40px">
      ${b.rows.map(r => `<div><div style="display:flex;justify-content:space-between;font-size:26px;font-weight:600;color:var(--ink2);margin-bottom:12px"><span>${esc(r.label)}</span><span style="color:${r.good ? 'var(--pk)' : 'var(--light)'};letter-spacing:.1em">${r.stars}</span></div>
        <div style="height:84px;background:${r.good ? 'var(--ink)' : 'var(--bar)'};display:flex;align-items:center;padding:0 28px;font-size:30px;font-weight:700;color:${r.good ? '#fff' : 'var(--gray)'}">${esc(r.bar)}</div></div>`).join('')}
      </div><div class="hr"></div><div class="note" style="margin-top:14px">${esc(b.cap)}</div>`,
  // 타임라인 막대
  timeline: b => `<div class="hr"></div><div style="display:flex;align-items:flex-end;gap:12px;height:330px;padding-top:30px;flex:none">
      ${b.points.map(p => p.gap
        ? `<div style="flex:2.4;align-self:center;text-align:center;border-top:2px dashed var(--rule);padding-top:12px;font-size:23px;font-weight:700;color:var(--light)">${esc(p.gap)}</div>`
        : `<div style="flex:1;display:flex;flex-direction:column;align-items:center;gap:10px">
            <span style="font-size:23px;font-weight:700;color:${p.hi ? 'var(--pk)' : 'var(--ink2)'}">${esc(p.v)}</span>
            <div style="width:100%;height:${p.h}px;background:${p.hi ? 'var(--pk)' : 'var(--bar)'}"></div>
            <span style="font-size:19px;color:var(--gray);font-weight:600">${esc(p.d)}</span></div>`).join('')}
      </div><div class="hr" style="margin-top:22px"></div><div class="note" style="margin-top:14px">${esc(b.cap)}</div>`,
  // 썸네일 줄 목록 (내 데이터)
  rows: b => `<div>${b.items.map(r => `<div class="hr"></div><div style="display:flex;align-items:center;gap:28px;padding:22px 0;${r.dim ? 'opacity:.45' : ''}">
        <img class="img" style="width:220px;flex:none" src="${r.img}">
        <div style="flex:1;font-size:27px;font-weight:600;line-height:1.4;letter-spacing:-.02em">${esc(r.title)}</div>
        <div style="text-align:right;flex:none"><div style="font-size:48px;font-weight:800;letter-spacing:-.04em;color:${r.dim ? 'var(--ink)' : 'var(--pk)'}">${esc(r.x)}</div>
        <div style="font-size:19px;color:var(--gray);font-weight:600">${esc(r.views)}</div></div></div>`).join('')}<div class="hr"></div></div>
      <div class="note" style="margin-top:14px">${esc(b.cap)}</div>`,
  // 이미지 단독
  image: b => `<img class="img" src="${b.img}"><div class="note" style="margin-top:14px">${esc(b.cap)}</div>`,
  // 빈칸 문장
  fill: b => { const bl = t => `<span style="display:inline-block;min-width:200px;border-bottom:4px solid var(--pk);color:var(--pk);text-align:center;padding:0 8px;line-height:1.2">${esc(t)}</span>`;
    return `<div class="hr"></div><div style="padding:40px 0;font-size:50px;font-weight:700;line-height:1.75;letter-spacing:-.035em">이 영상은<br>${bl(b.a)} 을(를) 원하는<br>${bl(b.b)} 을(를) 위한 영상이다.</div><div class="hr"></div>
      ${b.example ? `<div class="note" style="margin-top:14px">${esc(b.example)}</div>` : ''}`; },
  text: b => `<div class="txt">${rich(b.text)}</div>`,
  gap: b => `<div style="height:${b.h ?? 40}px;flex:none"></div>`,
};

function page(c, d, i, n) {
  const body = (c.blocks || []).map(b => blocks[b.type](b)).join('');
  return doc(`<div class="page">
  <div class="label">${esc(c.label ?? d.series)}</div>
  <div class="main">
    <div class="head">${rich(c.head)}</div>
    ${c.sub ? `<div class="sub">${rich(c.sub)}</div>` : ''}
    <div style="height:${c.gapTop ?? 52}px;flex:none"></div>
    ${body}
    ${c.box ? `<div style="${c.pinBox ? 'flex:1;min-height:36px' : 'height:48px;flex:none'}"></div><div class="box"><div class="t">${rich(c.box.t)}</div>${c.box.d ? `<div class="d">${rich(c.box.d)}</div>` : ''}</div>` : ''}
    ${c.note ? `<div class="note" style="margin-top:22px">${rich(c.note)}</div>` : ''}
  </div>
  <div class="foot"><span>${esc(d.brand)}</span><span class="c">${pad(i + 1)} / ${pad(n)}</span></div>
</div>`);
}

export const types = { cover, page };
export const page_ = page;
export const renderCard = (c, d, i, n) => types[c.type](c, d, i, n);
