// 2026-11-14 · Dave Jeltema 「I Uploaded to YouTube Once a Week for a Year - Here's What I Learned」(JO2JSj3JU48) — 요즘 터진 영상
// 53.1만 회, 채널 평소의 47.2배 (data/outliers.json, 2026-11-08 수집). 근거 = source.md
export default {
  title: '1년 동안 매주 1편 올리고 배운 것',
  brand: '흰지로의 트렌드 노트', theme: 'note', big: true, font: 'pretendard',
  src: { creator: 'Dave Jeltema', title: "I Uploaded to YouTube Once a Week for a Year - Here's What I Learned" },
  date: '2026-11-14', status: '초안',
  inkW: 808,     // 가장 긴 줄 잉크 폭 (본문 41px) — PNG로 잼
  source: { channel: 'Dave Jeltema', video: 'https://www.youtube.com/watch?v=JO2JSj3JU48' },
  post: `1년 동안 매주 한 편씩 52편을 올린 유튜버가 배운 것들이에요.
Dave Jeltema가 구독자 4.9만, 전업 유튜버가 되기까지 꼽은 교훈 52개 중 5개를 골랐어요.
여러분은 지금 몇 편째 올리고 계세요?

#유튜브성장 #유튜브꿀팁 #작은채널`,
  cards: [
    { type: 'noteCover', size: 70, title: '매주 1편, ==1년== 올리고 배운 것' },
    { type: 'noteMap', items: ['[[썸네일|pink]]부터 만들기', '안 터진 영상 [[지우지 않기|blue]]', '잘된 영상 [[또 만들기|teal]]', '\'[[정리하면|orange]]\' 말하지 않기', '처음 보는 [[70%|green]]'] },
    { type: 'noteItem', no: '1', head: '영상보다, [[썸네일 먼저|pink]]', size: 41,
      text: '10시간 넘게 편집하고 나서 썸네일을 대충 만들면\n아무도 클릭하지 않아요.\n\nDave는 머릿속 썸네일을 포토샵으로 못 살려서\n영상 하나를 통째로 놓친 적이 있대요.\n\n그래서 이제는 대본보다 [[썸네일을 먼저|blue]] 만들어요.\n썸네일이 약하면 찍기 전에 접을 수 있거든요.' },
    { type: 'noteItem', no: '2', head: '안 터진 영상, [[지우지 마세요|blue]]', size: 41,
      text: 'Dave가 예전에 올린 보드게임 영상은\n그만두고 [[6개월 뒤|orange]]에 터졌어요.\n지금 채널 조회수 3위 영상도\n올리고 26일이 지나서야 움직였고요.\n\n영상은 [[복권|pink]]과 같다고 해요.\n지우면 당첨될 기회도 같이 사라져요.' },
    { type: 'noteItem', no: '3', head: '잘된 영상은, [[또 만드세요|teal]]', size: 41,
      text: '22만 회가 나온 \'업로드 후 해야 할 12가지\'.\nDave는 비슷한 영상을 [[5개월 뒤|blue]]에야 만들었어요.\n그 후속 영상은 26만 회가 나왔고요.\n\n"금광을 찾고 다른 금광을 찾으러 간 셈"이래요.\n내 채널 [[조회수 상위 5개|green]]를 적고,\n그중 하나의 후속편을 만들어 보세요.' },
    { type: 'noteItem', no: '4', head: '\'정리하면\', [[말하지 마세요|orange]]', size: 41,
      text: '"정리하자면", "마무리하면"이라고 말하는 순간\n시청자는 영상이 끝난다는 걸 알아요.\n\nDave는 이 말을 하면 남은 시청자가\n[[절반으로 줄어든다|pink]]고 해요.\n끝에 추천하는 다음 영상을 볼 사람도\n같이 줄어들고요.\n\n끝까지 [[다음 이야기|blue]]가 있는 것처럼 끌고 가세요.' },
    { type: 'noteItem', no: '5', head: '처음 보는 사람이 [[70%|green]]', size: 41,
      text: 'Dave 채널에서는 영상마다 시청자의\n[[70%|orange]]가 처음 보는 사람이래요.\n여러분 채널도 비슷할 거라고 하고요.\n\n그래서 "지난 영상에서 말했듯이"는 금지예요.\n모든 영상은 [[그 영상 하나만|blue]] 봐도\n이해되게 만드세요.' },
    { type: 'noteCta', head: '더 궁금한 건 [[커뮤니티|pink]]에 남겨 주세요',
      steps: [
        { img: 'assets/cta_step1_channel.png' },
        { img: 'assets/cta_step2_write.png' },
      ] },
  ],
};
