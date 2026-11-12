// 2026-11-12 · YT UNLOCKED 「9 Things You Must Do After Uploading a YouTube Video」(8WrFkUODe1w) — 오늘 올라온 급상승 영상
// 2.1만 회, 시간당 2,211회(2026-11-12 vidIQ 수집, 공개 6시간 안). 근거 = source.md
export default {
  title: '업로드 직후 체크리스트 5가지',
  brand: '흰지로의 트렌드 노트', theme: 'note', big: true, font: 'pretendard',
  src: { creator: 'YT UNLOCKED', title: '9 Things You Must Do After Uploading a YouTube Video' },
  credit: '© YT UNLOCKED',
  date: '2026-11-12', status: '초안',
  inkW: 900,     // 본문 48px 가장 긴 줄 — PNG로 잼
  blockW: 960,   // 48px 본문이 꺾이지 않게 상자 폭 넓힘
  lh: 1.62,      // 줄 간격 살짝 좁혀 위아래에 맞춤
  gapHead: 38,
  source: { channel: 'YT UNLOCKED', video: 'https://www.youtube.com/watch?v=8WrFkUODe1w' },
  post: `영상 올리고 나서 새로고침만 누르고 있진 않으세요?
구독자 50.3만 유튜브 전략가 채널 YT UNLOCKED가 정리한 업로드 직후 체크리스트예요.
여러분은 이 중 몇 가지나 지키고 계세요?

#유튜브업로드 #유튜브알고리즘 #유튜브초보`,
  cards: [
    { type: 'noteCover', size: 68, title: '업로드하고 ==새로고침==만 누르고 있나요' },
    { type: 'noteMap', items: ['[[비공개|pink]]로 먼저 점검', '아무에게나 [[보내지 않기|blue]]', '[[4시간|teal]]은 그대로', '핀 댓글은 [[5초 질문|orange]]으로', '숫자는 [[두 개만|green]] 보기'] },
    { type: 'noteItem', no: '1', head: '바로 공개 말고, [[비공개로 먼저|pink]]', size: 48,
      text: '올리자마자 공개하면 화질 처리가 덜 끝나\n첫 시청자에게 흐릿한 영상이 보일 수 있어요.\n\n저작권 체크도 공개 뒤에 걸리면 이미 늦고요.\n비공개로 두고 HD·저작권 체크가 끝난 뒤\n제목·썸네일을 한 번 더 보고 공개하세요.\n\n정시 대신 몇 분 [[늦거나 빠르게|blue]] 올리면\n몰리는 시간대를 피할 수 있다고 해요.' },
    { type: 'noteItem', no: '2', head: '아무에게나, [[보내지 마세요|blue]]', size: 48,
      text: '다 같이 보라고 단톡방에 링크부터\n뿌리고 싶죠.\n\n관심 없는 사람은 10초 보고 끄는데\n유튜브는 그 반응까지 영상 평가에 넣어요.\n잘못 보여주면 맞는 시청자를 찾는 게\n오히려 [[더 어려워질|orange]] 뿐이에요.\n\n진짜 그 주제를 찾는 [[커뮤니티|green]]에만 공유하세요.' },
    { type: 'noteItem', no: '3', head: '첫 [[4시간|teal]]은, 손대지 마세요', size: 48,
      text: '공개하고 한 시간 만에\n썸네일을 바꾸고 싶어지죠.\n\n하지만 한 시간 데이터로는 아무것도 못 가려내요.\n불안해서 내리는 결정이지, 근거로 내리는\n결정이 아니라고 해요.\n\n최소 [[4시간|blue]]은 그대로 두고, [[12시간|green]] 뒤에도\n안 오르면 그때 제목·썸네일을 한 번만 바꾸세요.' },
    { type: 'noteItem', no: '4', head: '핀 댓글은, [[5초 질문|orange]]으로', size: 48,
      text: '"어떠셨나요?" 같은 댓글엔\n아무도 답을 못 해요.\n\n5초 안에 답할 수 있는 질문을 핀으로 꽂으세요.\n"하루 조회수 10개 미만·100개 미만·\n1000개 이상?" 처럼요.\n\n답이 달리면 꼭 [[답글|pink]]을 다세요.\n댓글이 오가는 영상이 더 멀리 퍼진대요.' },
    { type: 'noteItem', no: '5', head: '숫자는, [[두 개만|green]] 보세요', size: 48,
      text: '스튜디오를 열면 숫자가 스무 개나 보여서\n뭘 봐야 할지 헷갈리죠.\n\n먼저 볼 건 [[평균 시청 지속시간|blue]](직전 영상보다\n길어야)과 [[클릭률|orange]](5% 넘으면 괜찮음,\n10% 넘으면 터질 가능성).\n\n클릭률 낮고 시청 길면 제목·썸네일 문제,\n클릭률 좋은데 이탈 빠르면 도입부 문제래요.' },
    { type: 'noteCta', head: '더 궁금한 건 [[커뮤니티|pink]]에 남겨 주세요',
      steps: [
        { img: 'assets/cta_step1_channel.png' },
        { img: 'assets/cta_step2_write.png' },
      ] },
  ],
};
