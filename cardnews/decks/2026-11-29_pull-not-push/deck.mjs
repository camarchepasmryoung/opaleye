// 2026-11-29 · Collin Michael 「This Stops 90% of Small Channels From Getting Monetized」(wiKpHJl3jkQ) — 요즘 터진 영상
// 1.3만 회, 채널 평소의 8배 (vidIQ outliers, 2026-11-19 수집). 근거 = source.md
export default {
  title: '유튜브는, 당기는 플랫폼이에요',
  brand: '흰지로의 트렌드 노트', theme: 'note', big: true, font: 'pretendard',
  src: { creator: 'Collin Michael', title: 'This Stops 90% of Small Channels From Getting Monetized' },
  date: '2026-11-29', status: '초안',
  inkW: 900,
  blockW: 960,
  lh: 1.62,
  gapHead: 38,
  source: { channel: 'Collin Michael', video: 'https://www.youtube.com/watch?v=wiKpHJl3jkQ' },
  post: `유튜브가 영상을 '밀어준다'고 생각하면, 이미 방향이 틀렸을 수 있어요.
유튜브 코치 Collin Michael이 꼽은, 작은 채널 수익화를 막는 습관 중 4가지를 정리했어요.
여러분은 영상 주제를 감으로 고르나요, 데이터로 고르나요? 댓글로 알려 주세요.

#유튜브수익화 #유튜브알고리즘 #작은채널`,
  cards: [
    { type: 'noteCover', size: 62, title: '유튜브는, ==당기는 플랫폼==이에요' },
    { type: 'noteMap', items: ['[[미는|pink]] 게 아니라 [[당기는|blue]]', '감 말고 [[데이터로|teal]]', '한 편 말고 [[몰아보기|orange]]', '[[양|green]]도 필요해요'] },
    { type: 'noteItem', no: '1', head: '유튜브는, [[당기는|blue]] 플랫폼이에요', size: 48,
      text: '해시태그·태그·업로드 시간을\n맞추면 유튜브가 영상을\n[[밀어준다고|pink]] 생각하기 쉽죠.\n틱톡·인스타그램이 그렇게 작동하니까요.\n\n하지만 유튜브 코치 Collin Michael은\n유튜브가 영상을 밀어주는 게 아니라\n[[시청자가 보던 것과 비슷한 영상을|blue]]\n끌어당겨 보여주는 구조라고 해요.\n\n메타데이터보다 [[사람들이 원하는 내용|teal]]에\n힘을 쏟으라는 얘기예요.' },
    { type: 'noteItem', no: '2', head: '감으로 말고, [[데이터로|teal]] 고르세요', size: 48,
      text: '다음 영상 주제를\n그냥 떠오르는 대로 고르는 경우가\n정말 많다고 해요.\n\n이미 내 분야에서\n[[조회수가 잘 나온 주제·형식|pink]]을\n먼저 찾아보고 그걸 바탕으로\n아이디어를 정하면 좋아요.\n\n근거 없이 고른 주제는\n[[운에 맡기는|blue]] 거나 마찬가지래요.' },
    { type: 'noteItem', no: '3', head: '한 편 말고, [[몰아보게|orange]] 만드세요', size: 48,
      text: '영상 하나가 잘돼도\n다음에 볼 영상이 없으면\n시청자는 그냥 떠나버려요.\n\n자연스럽게 이어볼 수 있는\n[[영상 몇 개를 재생목록|blue]]으로 묶고\n설명란·고정 댓글·엔드스크린에\n계속 안내해 보세요.\n\n한 사람이 여러 편을 보게 되면\n[[시청 시간과 구독|green]]이 같이 늘어난대요.' },
    { type: 'noteItem', no: '4', head: '[[양|green]]도 필요하지만, 똑같이는 말고', size: 48,
      text: '영상 5~10편만 올리고\n왜 수익화가 안 되냐고\n묻는 사람이 많대요.\n\n썸네일 만들기, 편집, 카메라 앞에 서기\n이런 기술은 [[많이 만들어봐야|pink]] 늘어요.\n\n다만 똑같은 화면, 똑같은 형식만\n반복하면 실력이 안 늘어요.\n[[새로운 형식|blue]]도 같이 시도해보세요.' },
    { type: 'noteCta', head: '더 궁금한 건 [[커뮤니티|pink]]에 남겨 주세요',
      steps: [
        { img: 'assets/cta_step1_channel.png' },
        { img: 'assets/cta_step2_write.png' },
      ] },
  ],
};
