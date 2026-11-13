// 2026-11-21 · Brian G. Johnson TV 「Unfortunately, YouTube Success is Very Simple」(1-SJAhmCHNo) — 요즘 터진 영상
// 2.3만 회 (vidIQ 수집, 2026-11-12). 근거 = source.md
export default {
  title: '유튜브는 생각보다 단순해요',
  brand: '흰지로의 트렌드 노트', theme: 'note', big: true, font: 'pretendard',
  src: { creator: 'Brian G. Johnson TV', title: 'Unfortunately, YouTube Success is Very Simple' },
  credit: '© Brian G. Johnson TV',
  date: '2026-11-21', status: '검수완료',
  inkW: 900,     // 본문 48px 가장 긴 줄 — PNG로 잼
  blockW: 960,   // 48px 본문이 꺾이지 않게 상자 폭 넓힘
  lh: 1.62,      // 줄 간격 살짝 좁혀 위아래에 맞춤
  gapHead: 38,
  source: { channel: 'Brian G. Johnson TV', video: 'https://www.youtube.com/watch?v=1-SJAhmCHNo' },
  post: `유튜브는 생각보다 단순하대요. 신경 쓸 게 아니라 '원 안'만 남기면 된다고요.
구독자 17만 유튜버 Brian G. Johnson이 말하는 집중의 기준을 정리했어요.
여러분의 '원 밖'은 뭐예요?

#유튜브전략 #유튜브알고리즘 #유튜브성장`,
  cards: [
    { type: 'noteCover', size: 68, title: '유튜브는, ==생각보다 단순해요==' },
    { type: 'noteMap', items: ['[[원 안|pink]] vs [[원 밖|blue]]', '조회수 [[70%|teal]]는 홈에서', '[["그만 올려라"|orange]]가 클릭을', '[[디테일|green]]엔 비용이 있어요'] },
    { type: 'noteItem', no: '1', head: '[[원 안|pink]]이냐, [[원 밖|blue]]이냐', size: 48,
      text: '채널 아트, 배경, 설명란, 태그...\n다 신경 쓰이지만 전부\n[[큰 원 밖|teal]] 얘기예요.\n\n원 안에 남겨야 할 건 딱 하나,\n"다음 영상이 [[시청자 관심과|orange]] 만나는가"뿐이고요.\n\n원 밖은 빨리 내려놓을수록\n[[원 안에만|pink]] 집중할 시간이 늘어나요.' },
    { type: 'noteItem', no: '2', head: '조회수 [[70%|teal]]는, 홈에서 와요', size: 48,
      text: '유튜브 추천 조회수의 70%가\n[[둘러보기(홈 화면)|blue]]에서 나온다고\n유튜브가 공개적으로 밝혔대요.\n\n관련 동영상(추천 영상)보다\n[[둘러보기|orange]] 쪽이 훨씬 많은 조회수를\n만든다고 해요.\n\n그래서 신경 써야 할 건 결국\n[[제목·주제·썸네일|pink]] 조합이라고 해요.' },
    { type: 'noteItem', no: '3', head: '"[[그만 올려라|orange]]"가, 클릭을 불러요', size: 48,
      text: '썸네일에 "업로드를 멈추세요" 같은\n[[이상한 말|pink]]을 넣으면 클릭이 늘어난대요.\n\n조회수를 늘리라면서\n왜 올리지 말라는 건지\n[[앞뒤가 안 맞아서|blue]] 눈길을 끈다고 해요.\n\n이런 조합을 쓸 때마다\n[[클릭이 꾸준히 늘었다|teal]]고 해요.' },
    { type: 'noteItem', no: '4', head: '[[디테일|green]]엔, 비용이 있어요', size: 48,
      text: '언제 올릴지, 영상 길이, 채널 아트,\n태그, 설명... 생각할 거리는\n[[끝이 없어요|blue]].\n\n조회수에 영향 주는 요소 1,000개를\n줄 세우면 [[업로드 시간|orange]]은\n50위 안에도 못 든다고 해요.\n\n신경 쓸 걸 줄일수록\n[[다음 영상|pink]]에 쓸 시간이 늘어나요.' },
    { type: 'noteCta', head: '더 궁금한 건 [[커뮤니티|pink]]에 남겨 주세요',
      steps: [
        { img: 'assets/cta_step1_channel.png' },
        { img: 'assets/cta_step2_write.png' },
      ] },
  ],
};
