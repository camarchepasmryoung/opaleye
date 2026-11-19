// 2026-11-26 · Kaius Vun 「My Channel is Tiny, Why 65M+ YouTubers DM'd Me」(axgmCyk__04) — 요즘 터진 영상
// 3.1만 회, 채널 평소의 12.3배 (vidIQ outliers, 2026-11-19 수집). 근거 = source.md
export default {
  title: '조회수보다 중요한 건, 다시 찾아오게 만드는 것',
  brand: '흰지로의 트렌드 노트', theme: 'note', big: true, font: 'pretendard',
  src: { creator: 'Kaius Vun', title: "My Channel is Tiny, Why 65M+ YouTubers DM'd Me" },
  date: '2026-11-26', status: '초안',
  inkW: 900,
  blockW: 960,
  lh: 1.62,
  gapHead: 38,
  source: { channel: 'Kaius Vun', video: 'https://www.youtube.com/watch?v=axgmCyk__04' },
  post: `구독자 4천 명대 채널에, 합쳐서 6,500만 구독자가 넘는 유튜버 44명이 DM을 보냈대요.
편집자 겸 크리에이터 Kaius Vun이 꼽은 '기억에 남는 영상'의 조건 3가지를 정리했어요.
여러분 영상은 조회수, 댓글 중 뭐가 더 잘 나오나요? 댓글로 알려 주세요.

#유튜브편집 #유튜브성장 #작은채널`,
  cards: [
    { type: 'noteCover', size: 60, title: '구독자 ==4천 명대== 채널에 몰려온 거물들' },
    { type: 'noteMap', items: ['조회수보다 [[댓글|pink]]', '첫째, [[개성|blue]]', '둘째, [[각도|teal]]', '셋째, [[노력|orange]]'] },
    { type: 'noteItem', no: '1', head: '조회수보다, [[댓글 수|pink]]를 보세요', size: 48,
      text: '예전에 하던 채널에서\n영상 하나가 10만 조회수를 넘겼어요.\n댓글은 겨우 50개였죠.\n\n반대로 조회수가 그 절반도 안 되는\n영상엔 [[댓글이 300개|blue]] 달렸어요.\n\n조회수가 높다고\n사람들이 기억하는 건 아니었어요.\n[[다시 찾아오게|green]] 만드는 영상을 노려야 해요.' },
    { type: 'noteItem', no: '2', head: '첫째, [[개성|pink]]', size: 48,
      text: '남들이 쓰는 말투, 남들이 쓰는 톤을\n따라 하면 복제품이 될 뿐이에요.\n\n나는 뭐가 웃긴지,\n[[어떻게 말하는 사람|blue]]인지부터 보세요.\n좋아하는 크리에이터의 에너지에서\n힌트를 얻되, 그대로 베끼진 마세요.\n\n같은 자막 폰트, 같은 엔딩 음악처럼\n[[일관된 스타일|teal]]을 만들어 가는 것도 방법이에요.' },
    { type: 'noteItem', no: '3', head: '둘째, [[각도|teal]]', size: 48,
      text: '내가 다루는 주제를\n이미 수천 명이 똑같이 다뤘다면\n새로울 게 없어요.\n\n다른 분야에서 이미 통하는\n[[영상 형식|blue]]을 가져와서\n내 주제에 붙여 보세요.\n\n똑같은 주제라도\n[[보지 못한 각도|pink]]가 생겨요.' },
    { type: 'noteItem', no: '4', head: '셋째, [[노력|orange]]', size: 48,
      text: 'AI로 다 맡기고 싶은 유혹,\n누구나 한 번쯤 느껴요.\n\n하지만 [[조회수 예측 알고리즘|blue]]이 아니라\n사람이 즐길 만한 영상을 만들어야\n[[사람이|green]] 모여요.\n\n지름길 없이 공들인 영상에\n다시 찾아오는 댓글이 달려요.' },
    { type: 'noteCta', head: '더 궁금한 건 [[커뮤니티|pink]]에 남겨 주세요',
      steps: [
        { img: 'assets/cta_step1_channel.png' },
        { img: 'assets/cta_step2_write.png' },
      ] },
  ],
};
