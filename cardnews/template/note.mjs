// 흰지로 카드뉴스 — 노트 테마 (1080×1080, 정방형)
// 레퍼런스: reputeforge "Storytelling is" 캐러셀 (instagram.com/p/Dbp0bVtIGoh) 역추적 — wiki/2-디자인-규칙.md 2-5
//  · 미색 종이 + 섬유 질감(글자 위에 곱하기로 덮어 "종이에 찍힌" 느낌) · 내용 장만 모눈
//  · 명조 글자만, 핵심 단어에 색색 손그림 밑줄 · 표지 가로선이 다음 장 마인드맵으로 이어짐
// 카드 타입: noteCover · noteMap · noteItem · noteEnd
// 카피 문법: [[단어|색]] = 손그림 밑줄 (색: pink blue teal green orange purple), ==단어== = 형광펜, \n = 줄바꿈

// 유튜브 공식 아이콘 PNG (Finder: _tools/hf-sanji-study/thumb_glass/c1/youtube_logo.png 복사본)
const YT_LOGO = new URL('./assets/youtube_logo.png', import.meta.url).href;
export const W = 1080, H = 1080;   // 2026-11-09 시영: 모든 카드뉴스 정방형
const CELL = 54;               // 모눈 한 칸 (1080 = 20칸, 가운데 x 540이 선 위)
const MX = CELL * 2;           // 좌우 여백 108 = 2칸 → 글 덩어리가 정확히 가운데
const MID = H / 2;             // 540 = 표지 가로선·마인드맵 줄기 높이 (두 장이 이어짐)

const INK = { pink: '#E2468F', blue: '#4766EE', teal: '#17999A', green: '#1FA35A', orange: '#F0883A', purple: '#9A57D8' };

const esc = (s = '') => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const rich = (s = '') => esc(s)
  .replace(/\[\[(.+?)\|(\w+)\]\]/g, '<span class="u" data-c="$2">$1</span>')
  .replace(/==(.+?)==/g, '<span class="hl">$1</span>')
  .replace(/\n\n/g, '<span class="para"></span>')   // 빈 줄 = 문단 나눔
  .replace(/\n/g, '<br>');

const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Noto+Serif+KR:wght@400;500;600&display=block');
*{margin:0;padding:0;box-sizing:border-box}
html,body{width:${W}px;height:${H}px;background:#F1EFEB}
body{font-family:'Noto Serif KR',serif;color:#161514;-webkit-font-smoothing:antialiased;word-break:keep-all}
.pg{position:relative;width:${W}px;height:${H}px;overflow:hidden;background:#F1EFEB}
/* 모눈: 가운데(540, 540)가 선 위에 오도록 위치 맞춤 */
.grid{position:absolute;inset:0;background-image:
  linear-gradient(90deg,rgba(150,158,205,.27) 1.6px,transparent 1.6px),
  linear-gradient(rgba(150,158,205,.27) 1.6px,transparent 1.6px);
  background-size:${CELL}px ${CELL}px;background-position:-0.8px ${(MID % CELL) - 0.8}px}
.ink{position:absolute;inset:0;z-index:2}
.t{font-weight:500;letter-spacing:-.045em;color:#141312}
.b{font-weight:400;letter-spacing:-.04em;color:#1B1A18}
.u{position:relative}
.ink:has(.above){z-index:6}   /* 커뮤니티 CTA 장: 캡처를 종이 질감 위에 */
.para{display:block;height:.75em}
.hl{background:linear-gradient(transparent 40%,rgba(235,37,96,.30) 40%,rgba(235,37,96,.30) 94%,transparent 94%);padding:0 .06em;margin:0 -.06em}
svg.marks{position:absolute;inset:0;z-index:3;pointer-events:none;mix-blend-mode:multiply}
/* 종이 결: 글자·밑줄 위에 곱하기로 덮는다 → 잉크가 종이에 스민 느낌 */
.paper{position:absolute;inset:0;z-index:5;pointer-events:none;mix-blend-mode:multiply}
.foot{position:absolute;left:${MX}px;right:${MX}px;bottom:56px;display:flex;justify-content:center;text-align:center;align-items:center;font-size:21px;font-weight:500;letter-spacing:-.02em;color:#8D8880;z-index:2}
.foot .c{position:absolute;left:50%;transform:translateX(-50%);color:#A29D95}
/* 표지 출처 태그: 유튜브 로고 + 크리에이터 · 원제 */
.ytag{position:absolute;left:${MX}px;top:${MX}px;display:flex;align-items:center;gap:14px;z-index:2}
.ytag .ylogo{height:58px;width:auto;display:block}
.ytag .src{font-size:21px;color:#8D8880;letter-spacing:-.01em;font-family:'Pretendard Variable',Pretendard,sans-serif;font-weight:500;border-left:1.5px solid #CFCAC2;padding-left:14px;line-height:1.35}
`;

// 종이: 섬유 결(빛 받은 요철) + 얼룩 + 가장자리 거칠게
const PAPER = `<svg class="paper" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
  <defs>
    <!-- 가로 섬유 결: 빛을 비춘 요철 (x는 낮고 y는 높은 주파수 → 가로로 늘어난 결) -->
    <filter id="fib" x="0" y="0" width="100%" height="100%">
      <feTurbulence type="fractalNoise" baseFrequency="0.09 0.75" numOctaves="4" seed="7" result="n"/>
      <feDiffuseLighting in="n" lighting-color="#ffffff" surfaceScale="2.6"><feDistantLight azimuth="90" elevation="62"/></feDiffuseLighting>
    </filter>
    <!-- 고운 알갱이 -->
    <filter id="grain" x="0" y="0" width="100%" height="100%">
      <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="3" seed="4" result="n"/>
      <feDiffuseLighting in="n" lighting-color="#ffffff" surfaceScale="1.3"><feDistantLight azimuth="135" elevation="65"/></feDiffuseLighting>
    </filter>
    <!-- 큰 얼룩 (아주 옅게) -->
    <filter id="mot" x="0" y="0" width="100%" height="100%">
      <feTurbulence type="fractalNoise" baseFrequency="0.004" numOctaves="2" seed="2"/>
      <feColorMatrix type="matrix" values="0 0 0 0 0.90  0 0 0 0 0.88  0 0 0 0 0.84  0 0 0 -1 0.55"/>
    </filter>
    <radialGradient id="edge" cx="50%" cy="50%" r="72%"><stop offset="70%" stop-color="#000"/><stop offset="100%" stop-color="#fff"/></radialGradient>
    <mask id="edgeMask"><rect width="${W}" height="${H}" fill="url(#edge)"/></mask>
  </defs>
  <rect width="${W}" height="${H}" filter="url(#fib)" opacity=".2"/>
  <rect width="${W}" height="${H}" filter="url(#grain)" opacity=".38"/>
  <rect width="${W}" height="${H}" filter="url(#mot)" opacity=".35"/>
  <rect width="${W}" height="${H}" filter="url(#grain)" mask="url(#edgeMask)" opacity=".8"/>
</svg>`;

// 밑줄: 글이 다 그려진 뒤 단어 위치를 재서 손그림 선을 그린다 (씨앗 고정 → 매번 같은 모양)
const MARKS = `<script>
(function(){
  const INK=${JSON.stringify(INK)};
  let seed=7; const r=()=>{seed=(seed*16807)%2147483647;return seed/2147483647;};
  function line(x0,x1,y,c,w){
    const L=x1-x0, n=Math.max(3,Math.round(L/70)); let d='M'+x0.toFixed(1)+' '+(y+(r()-.5)*1.5).toFixed(1);
    for(let i=1;i<=n;i++){const x=x0+L*i/n, cx=x-L/n/2, cy=y+(r()-.5)*4.2; d+=' Q'+cx.toFixed(1)+' '+cy.toFixed(1)+' '+x.toFixed(1)+' '+(y+(r()-.5)*1.6).toFixed(1);}
    return '<path d="'+d+'" stroke="'+c+'" stroke-width="'+w+'" fill="none" stroke-linecap="round" stroke-linejoin="round"/>';
  }
  function draw(){
    const pg=document.querySelector('.pg'), box=pg.getBoundingClientRect(); let out='';
    document.querySelectorAll('.u').forEach(el=>{
      const c=INK[el.dataset.c]||el.dataset.c;
      [...el.getClientRects()].forEach(rc=>{
        const x0=rc.left-box.left-3+r()*4, x1=rc.right-box.left+2+r()*8, y=rc.bottom-box.top-rc.height*0.05;
        out+='<g opacity=".88">'+line(x0,x1,y,c,3.4)+line(x0+8,x1-6,y+1.4,c,1.8)+'</g>';
        if(r()<.35) out+='<path d="M'+(x1-4).toFixed(1)+' '+(y+1).toFixed(1)+' q 14 -2 -6 6" stroke="'+c+'" stroke-width="2.4" fill="none" stroke-linecap="round" opacity=".8"/>';
      });
    });
    document.querySelector('svg.marks').innerHTML=out;
  }
  (document.fonts?document.fonts.ready:Promise.resolve()).then(()=>requestAnimationFrame(draw));
})();
</script>`;

const doc = (inner, { grid = false, brand = '' } = {}) => `<!doctype html><html lang="ko"><head><meta charset="utf-8"><style>${CSS}</style></head><body>
<div class="pg">${grid ? '<div class="grid"></div>' : ''}
<div class="ink">${inner}</div>
<svg class="marks" width="${W}" height="${H}"></svg>
${brand ? `<div class="foot"><span>${esc(brand)}</span></div>` : ''}
${PAPER}</div>${MARKS}</body></html>`;

// ── 표지: 문장 하나를 정확히 가운데 + 그 끝에서 오른쪽 끝까지 가로선 (다음 장으로 이어짐)
function noteCover(c, d) {
  const logo = d.src ? `<img src="${YT_LOGO}" alt="YouTube" style="position:absolute;left:-58px;top:-70px;width:108px;transform:rotate(-12deg);filter:drop-shadow(0 3px 6px rgba(0,0,0,.18))">` : '';
  return doc(`
  <div class="t" style="position:absolute;left:0;right:0;top:${MID}px;transform:translateY(-50%);text-align:center;font-size:${c.size || 64}px;line-height:1.32">
    <span id="cvt" style="display:inline-block;position:relative">${logo}${rich(c.title)}</span></div>
  <svg style="position:absolute;inset:0" width="${W}" height="${H}"><line id="cvl" x1="0" y1="${MID}" x2="${W}" y2="${MID}" stroke="#141312" stroke-width="3.2"/></svg>
  <script>(document.fonts?document.fonts.ready:Promise.resolve()).then(()=>{const t=document.getElementById('cvt').getBoundingClientRect();document.getElementById('cvl').setAttribute('x1',(t.right+24).toFixed(1));});</script>`,
  { brand: d.brand });
}

// ── 마인드맵: 왼쪽 끝에서 들어온 줄기(표지 선과 같은 높이) → 가지 n개 → 점 + 이름
function noteMap(c, d) {
  const n = c.items.length, hub = { x: 330, y: MID }, span = c.span || 560;
  const pts = c.items.map((_, k) => {
    const t = n === 1 ? 0 : k / (n - 1) - 0.5;                 // -0.5 ~ 0.5
    const y = MID + t * span, x = 470 + (0.5 - Math.abs(t)) * 260;   // 가운데 가지일수록 멀리
    return { x, y };
  });
  const lines = pts.map(p => `<line x1="${hub.x}" y1="${hub.y}" x2="${p.x}" y2="${p.y}" stroke="#141312" stroke-width="3.2" stroke-linecap="round"/><circle cx="${p.x}" cy="${p.y}" r="9" fill="#141312"/>`).join('');
  const labels = pts.map((p, k) => `<div class="t" style="position:absolute;left:${p.x + 26}px;top:${p.y}px;transform:translateY(-54%);font-size:46px;white-space:nowrap">${rich(c.items[k])}</div>`).join('');
  return doc(`<svg style="position:absolute;inset:0" width="${W}" height="${H}">
    <line x1="0" y1="${MID}" x2="${hub.x}" y2="${MID}" stroke="#141312" stroke-width="3.2"/>${lines}</svg>${labels}`, { brand: d.brand });
}

// ── 항목: `1.제목` + 본문. 글 덩어리를 가로·세로 정확히 가운데 (좌우 여백 같음, 왼쪽 정렬)
// 덱의 가장 긴 줄 폭(d.blockW)으로 덩어리 폭을 고정 → 모든 장의 왼쪽 시작선이 같고, 가장 긴 줄 기준으로 좌우 여백이 같다
function noteItem(c, d) {
  // d.inkW = 덱에서 가장 긴 줄의 실제 잉크 폭(렌더 뒤 PNG로 잼) → 그 줄의 좌우 여백이 정확히 같게 시작선을 정함
  const bw = d.blockW || W - MX * 2, left = d.inkW ? Math.round((W - d.inkW) / 2) - 2 : Math.round((W - bw) / 2);
  return doc(`<div style="position:absolute;left:${left}px;width:${bw}px;top:0;bottom:0;display:flex;flex-direction:column;justify-content:center">
    <div class="t" style="font-size:${d.big ? 74 : 66}px;line-height:1.3">${esc(c.no)}.${rich(c.head)}</div>
    <div class="b wrapchk" style="margin-top:${d.gapHead ?? (c.size ? 44 : 56)}px;font-size:${c.size || 40}px;line-height:${d.lh || 1.7}">${rich(c.text)}</div>
  </div>`, { grid: true, brand: d.brand });
}

// ── 끝: 두 줄 가운데 정렬
function noteEnd(c, d) {
  return doc(`<div style="position:absolute;left:${MX}px;right:${MX}px;top:${MID}px;transform:translateY(-50%);text-align:center">
    <div class="b" style="font-size:36px;color:#55514B;line-height:1.5">${rich(c.small)}</div>
    <div class="t" style="margin-top:18px;font-size:60px;line-height:1.35">${rich(c.big)}</div>
  </div>`, { brand: d.brand });
}

// ── 마지막 장(커뮤니티 CTA): 제목 + 실제 화면 캡처 단계 2개
function noteCta(c, d) {
  // 예외 장: 넓게(좌우 50px) + 캡처는 종이 질감 위로(.above → .ink가 종이 층보다 위) — 실제 화면 그대로 보이게
  const steps = c.steps.map((st, k) => `<div style="margin-top:${k ? (st.text ? 30 : 36) : 0}px">
      ${st.text ? `<div class="b" style="font-size:30px;margin-bottom:12px"><span style="font-weight:700">${k + 1}.</span> ${rich(st.text)}</div>` : ''}
      <img src="${st.img}" style="display:block;width:100%;border-radius:12px"></div>`).join('');
  return doc(`<div class="above" style="position:absolute;left:50px;right:50px;top:0;bottom:84px;display:flex;flex-direction:column;justify-content:center">
    <div class="t" style="font-size:${d.big ? 54 : 46}px;line-height:1.3;text-align:center">${rich(c.head)}</div>
    <div style="margin-top:44px">${steps}</div></div>`, { brand: d.brand });
}

export const types = { noteCover, noteMap, noteItem, noteEnd, noteCta };
// 글꼴 바꾸기: 덱에 font: 'pretendard' → 고딕(Pretendard). 기본은 명조(Noto Serif KR)
const SANS = `<style>@import url('https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css');
body{font-family:'Pretendard Variable',Pretendard,sans-serif}
.t{font-weight:650;letter-spacing:-.035em}.b{font-weight:450;letter-spacing:-.025em}.foot{font-weight:500}
.ink,svg.marks{transform:translateY(2.5px)}  /* 고딕은 글자 상자가 위로 2.5px 쏠림 → PNG로 재서 보정 */</style>`;
export const renderCard = (c, d, i, n) => {
  let html = types[c.type](c, d, i, n);
  html = html.replace(/<div class="foot"><span>(.*?)<\/span><\/div>/, (_, b) =>
    `<div class="foot"><span>${c.type === 'noteCover' && d.src ? `출처 · ${esc(d.src.creator)} 「${esc(d.src.title)}」` : b}</span></div>`);   // 표지 = 출처, 나머지 = 브랜드 (가운데)
  if (d.big) html = html.replace('</head>', '<style>.foot{font-size:25px}</style></head>');   // 2026-11-09 시영 "글자 전체적으로 더 크게" (11/10~)
  return d.font === 'pretendard' ? html.replace('</head>', SANS + '</head>') : html;
};
