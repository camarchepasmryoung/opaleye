// 2026-11-25 · Casey Faris 「#1 Tip to Make Your YouTube Vids Less BORING in DaVinci Resolve!」(M6JrbS7FSXM) — 요즘 터진 영상
// 8,558회, 채널 평소의 12.2배 (vidIQ outliers, 2026-11-19 수집). 근거 = source.md
export default {
  title: '내 영상이 지루한 이유, 오디오였어요',
  brand: '흰지로의 트렌드 노트', theme: 'note', big: true, font: 'pretendard',
  src: { creator: 'Casey Faris', title: '#1 Tip to Make Your YouTube Vids Less BORING in DaVinci Resolve!' },
  date: '2026-11-25', status: '초안',
  inkW: 900,
  blockW: 960,
  lh: 1.62,
  gapHead: 38,
  source: { channel: 'Casey Faris', video: 'https://www.youtube.com/watch?v=M6JrbS7FSXM' },
  post: `영상이 자꾸 지루하게 느껴진다면, 화면이 아니라 소리를 의심해 보세요.
편집 코치 Casey Faris가 짚은 '파티 라인' 개념과 빈 공간을 채우는 두 가지 방법을 정리했어요.
여러분 영상에도 소리가 텅 빈 구간이 있나요? 댓글로 알려 주세요.

#유튜브편집 #영상편집팁 #작은채널`,
  cards: [
    { type: 'noteCover', size: 62, title: '내 영상이 ==지루한 이유==, 오디오였어요' },
    { type: 'noteMap', items: ['[[파티 라인|pink]]이란', '빈 공간이 [[지루함|blue]]을', '[[보이스오버|teal]]로 채우기', '[[음악 볼륨|orange]]으로 채우기'] },
    { type: 'noteItem', no: '1', head: '내 영상, [[파티|pink]]처럼 재밌나요?', size: 48,
      text: '영상의 처음부터 끝까지\n얼마나 흥미로운지 그래프로 그려보면\n오르내림이 보여요.\n\n편집 코치 Casey Faris는 이 그래프를\n[[파티 라인|blue]]이라고 불러요.\n"내 영상은 얼마나 신나는 파티인가"\n하는 거예요.\n\n처음부터 끝까지 [[계속 흥미롭게|green]]\n유지하는 게 목표예요.' },
    { type: 'noteItem', no: '2', head: '지루함은, [[오디오 빈 공간|blue]]에서 와요', size: 48,
      text: '화면(B롤)은 괜찮은데\n영상이 축 처지는 구간 있죠.\n\n보통 그 구간엔 [[음악 소리를|pink]]\n줄여 둔 채로 비워 놔서 그래요.\n말소리에 방해 안 되게 줄이다 보니\n그 사이가 텅 비어 버리는 거예요.\n\n화면보다 [[소리의 빈틈|teal]]을\n먼저 의심해 보세요.' },
    { type: 'noteItem', no: '3', head: '[[보이스오버|teal]] 또는 [[음악 볼륨|orange]]', size: 48,
      text: '빈 공간을 채우는 방법은\n크게 두 가지예요.\n\n하나는 그 구간에\n[[내레이션이나 인터뷰|pink]] 소리를 넣는 것.\n다른 하나는 줄여 놨던\n[[음악 볼륨을 다시 올리는|blue]] 것.\n\n정해진 공식은 없어요, 그 장면에\n뭐가 더 필요한지가 기준이에요.' },
    { type: 'noteItem', no: '4', head: '"지금 [[시청자|green]]에게 뭐가 필요하지?"', size: 48,
      text: '이야기가 헷갈릴 것 같으면\n[[설명하는 목소리|pink]]를 더하고,\n\n화면은 좋은데 밋밋하면\n[[음악|blue]]으로 채우면 돼요.\n\n내 영상이 처음부터 끝까지\n[[파티처럼|teal]] 느껴지는지\n편집하면서 스스로 물어보세요.' },
    { type: 'noteCta', head: '더 궁금한 건 [[커뮤니티|pink]]에 남겨 주세요',
      steps: [
        { img: 'assets/cta_step1_channel.png' },
        { img: 'assets/cta_step2_write.png' },
      ] },
  ],
};
