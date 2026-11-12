// 2026-11-14 · 뉴스 — 유튜브 쇼츠 "오리지널리티" 추천 업데이트 (2026-10-01~02 보도). 근거 = source.md
export default {
  title: '쇼츠 재업로드, 추천이 줄었대요',
  brand: '흰지로의 트렌드 노트', theme: 'note', big: true, font: 'pretendard',
  src: { creator: '9to5Google 등 외신', title: "YouTube won't recommend unoriginal Shorts" },
  credit: '© 9to5Google',
  date: '2026-11-14', status: '초안',
  inkW: 900,     // 본문 48px 가장 긴 줄 — PNG로 잼
  blockW: 960,   // 48px 본문이 꺾이지 않게 상자 폭 넓힘
  lh: 1.62,      // 줄 간격 살짝 좁혀 위아래에 맞춤
  gapHead: 38,
  source: { channel: '9to5Google', video: 'https://9to5google.com/2026/10/02/youtube-wont-recommend-unoriginal-shorts/' },
  post: `쇼츠에 남의 영상을 그대로 올리던 채널, 요즘 추천이 줄었다는 말이 나와요.
2026년 10월부터 유튜브가 쇼츠 추천 방식을 바꿨다고 외신들이 전했어요.
여러분 쇼츠는 요즘 어때요?

#유튜브쇼츠 #쇼츠알고리즘 #유튜브업데이트`,
  cards: [
    { type: 'noteCover', size: 66, title: '쇼츠 ==재업로드==, 추천이 줄었대요' },
    { type: 'noteMap', items: ['뭐가 [[바뀌었나|pink]]', '[[수익화|blue]]는 별개', '[[되돌리는 법|teal]]', '아직 [[모르는 것|orange]]'] },
    { type: 'noteItem', no: '1', head: '다른 사람 영상, [[그대로 올리면|pink]]', size: 48,
      text: '2026년 10월 1일부터(외신 보도 기준)\n유튜브가 쇼츠 추천 방식을 바꿨대요.\n\n다른 크리에이터 영상을 별다른 보탬 없이\n그대로 올리는 채널은 [[추천이 줄어든다|blue]]고 해요.\n\n자막·댓글·편집 같은 [[자기 해석|teal]]을 더하면\n괜찮다고 보도됐어요.' },
    { type: 'noteItem', no: '2', head: '[[수익화|blue]] 기준은, 그대로예요', size: 48,
      text: '이번에 바뀐 건 추천(쇼츠 피드 노출)이고,\n돈 버는 기준은 원래 있던 \'재사용 콘텐츠\'\n정책 그대로 적용된대요.\n\n원작자에게 [[허락을 받았어도|orange]]\n재사용 정책은 똑같이 적용된다고\n보도에 나와요.\n\n추천과 수익화는 [[다른 심사|pink]]라는 뜻이에요.' },
    { type: 'noteItem', no: '3', head: '[[되돌리는 법|teal]], 아직 몰라요', size: 48,
      text: '재업로드를 그만두고 [[원본 콘텐츠로|blue]]\n바꾸면 추천이 다시 평가된다고 해요.\n\n하지만 얼마나 걸리는지, 어떻게 확인하는지는\n유튜브가 [[공개하지 않았다|orange]]고 보도됐어요.' },
    { type: 'noteItem', no: '4', head: '아직, [[모르는 것|orange]]들', size: 48,
      text: '몇 %가 \'원본\'인지 수치 기준이 없고,\n내 채널 추천이 줄었는지 보여주는\n[[대시보드 지표도 없대요|pink]].\n\nAI로 만든 쇼츠가 여기 해당되는지도\n아직 [[분명하지 않다|blue]]고 외신들이 전해요.' },
    { type: 'noteCta', head: '더 궁금한 건 [[커뮤니티|pink]]에 남겨 주세요',
      steps: [
        { img: 'assets/cta_step1_channel.png' },
        { img: 'assets/cta_step2_write.png' },
      ] },
  ],
};
