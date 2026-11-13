// 2026-11-18 · Jay Bea 「9 Mistakes Stopping You From Getting Views on YouTube」(XUvac8hrxjQ) — 요즘 터진 영상
// 1.13만 회, 채널 평소의 7.1배 (vidIQ 수집, 2026-11-12). 근거 = source.md
export default {
  title: '조회수가 안 나오는 이유 4가지',
  brand: '흰지로의 트렌드 노트', theme: 'note', big: true, font: 'pretendard',
  src: { creator: 'Jay Bea', title: '9 Mistakes Stopping You From Getting Views on YouTube' },
  credit: '© Jay Bea',
  date: '2026-11-18', status: '검수완료',
  inkW: 900,     // 본문 48px 가장 긴 줄 — PNG로 잼
  blockW: 960,   // 48px 본문이 꺾이지 않게 상자 폭 넓힘
  lh: 1.62,      // 줄 간격 살짝 좁혀 위아래에 맞춤
  gapHead: 38,
  source: { channel: 'Jay Bea', video: 'https://www.youtube.com/watch?v=XUvac8hrxjQ' },
  post: `조회수가 안 나오는 건 운이 아니라, 유튜브가 당신을 '봇'으로 의심해서일 수도 있어요.
구독자 4.9천 유튜버 Jay Bea가 꼽은 조회수 안 나오는 이유 중 4가지를 정리했어요.
여러분은 몇 가지나 해당되세요?

#유튜브조회수 #유튜브알고리즘 #유튜브초보`,
  cards: [
    { type: 'noteCover', size: 66, title: '유튜브가 날, ==봇==이라고 생각해요' },
    { type: 'noteMap', items: ['[[새 채널|pink]]은 신뢰 쌓기', '[[아동용|blue]] 설정 조심', '[[AI 콘텐츠|teal]] 적당히', '[[가짜 참여|orange]] 금지'] },
    { type: 'noteItem', no: '1', head: '유튜브가 날, [[봇이라고|pink]] 생각해요', size: 48,
      text: '새 채널을 만들자마자 바로 올리면\n유튜브가 \'사람인지\' 확신이 없대요.\n\n사람인 걸 보여주려면 계정을 좀 묵히고,\n다른 사람 영상을 보고 [[반응하면서|blue]]\n사람이라는 신호를 쌓으라고 해요.\n\n이미 신뢰 쌓은 계정인데 조회수가 없다면\n제목·썸네일이나 [[편집 수준|teal]]을 의심해 보세요.' },
    { type: 'noteItem', no: '2', head: '[[아동용|blue]] 설정, 조심하세요', size: 48,
      text: '업로드할 때 \'아동용\'에 실수로 체크하면\n그 영상은 댓글도, 구독 알림도,\n엔드스크린·카드도 [[못 쓰게 돼요|orange]].\n\n더 안 좋은 건, 나중에 체크를 풀어도\n유튜브가 그 영상을 [[다시 테스트하지 않는다|pink]]고 해요.\n\n업로드 기본값에서 아예 \'아니오\'로 맞춰 두세요.' },
    { type: 'noteItem', no: '3', head: '[[AI 콘텐츠|teal]], 적당히만', size: 48,
      text: '대본부터 영상까지 AI로 거의 다 만들면\n요즘은 조회수가 잘 안 나온다고 해요.\n\n유튜브 CEO도 블로그에서 반복적이고\n[[쉽게 만든 콘텐츠|orange]] 확산을 막겠다고 했대요.\n유튜브 가이드라인도 "콘텐츠는 원본이어야\n한다"고 밝히고 있고요.\n\nAI로 아이디어·다듬기는 쓰되,\n[[다 맡기지는|blue]] 말라는 뜻이에요.' },
    { type: 'noteItem', no: '4', head: '[[가짜 참여|orange]]는, 하지 마세요', size: 48,
      text: '맞구독, 조회수·구독자 구매, 유료 홍보는\n관심 없는 사람만 데려와요.\n\n그 사람들이 안 보면 유튜브는 "관심 없는\n채널"로 보고 [[추천을 멈춘다|pink]]고 해요.\n\n구독자 1만 명이 넘는 채널이 조회수를 사서\n영상당 [[5회 미만|blue]]이 된 사례도 봤대요.' },
    { type: 'noteCta', head: '더 궁금한 건 [[커뮤니티|pink]]에 남겨 주세요',
      steps: [
        { img: 'assets/cta_step1_channel.png' },
        { img: 'assets/cta_step2_write.png' },
      ] },
  ],
};
