// 2026-11-13 · Chiamaka Okoli 「This YouTube SETTING KILLS VIEWS. Turn It OFF NOW」(1ZWPXzlkuE0) — 요즘 터진 영상
// 1.18만 회, 채널 평소의 2.2배 (vidIQ 수집, 2026-11-12). 근거 = source.md
export default {
  title: '얼굴 없는 채널에서 바꾼 설정 3가지',
  brand: '흰지로의 트렌드 노트', theme: 'note', big: true, font: 'pretendard',
  src: { creator: 'Chiamaka Okoli', title: 'This YouTube SETTING KILLS VIEWS. Turn It OFF NOW' },
  credit: '© Chiamaka Okoli',
  date: '2026-11-13', status: '초안',
  inkW: 900,     // 본문 48px 가장 긴 줄 — PNG로 잼
  blockW: 960,   // 48px 본문이 꺾이지 않게 상자 폭 넓힘
  lh: 1.62,      // 줄 간격 살짝 좁혀 위아래에 맞춤
  gapHead: 38,
  source: { channel: 'Chiamaka Okoli', video: 'https://www.youtube.com/watch?v=1ZWPXzlkuE0' },
  post: `다들 켜 두라던 구독 알림, 껐더니 조회수가 바뀌었대요.
구독자 11.6만 유튜버 Chiamaka Okoli가 새로 키우는 얼굴 없는 채널에서 바꾼 설정 3가지를 정리했어요.
여러분 채널은 어떤 설정을 쓰고 계세요?

#유튜브설정 #유튜브알고리즘 #페이스리스채널`,
  cards: [
    { type: 'noteCover', size: 66, title: '다들 켜라던 설정을 ==껐더니== 달라졌어요' },
    { type: 'noteMap', items: ['[[구독 알림|pink]] 끄기', '[[카테고리|blue]] 매번 바꾸기', '[[자동 캡션|teal]] 켜기'] },
    { type: 'noteItem', no: '1', head: '구독 알림, [[꺼봤더니|pink]]', size: 48,
      text: '이 크리에이터가 새로 키우던 얼굴 없는\n(페이스리스) 채널은 구독자 100여 명이\n영상을 잘 안 봤대요.\n\n알림을 켜 두면 유튜브가 새 영상을 그 구독자\n반응만으로 먼저 평가하는데, 안 보는 사람\n반응이 나쁘니 낯선 시청자에게 잘 안 보여줬고요.\n\n[[꺼보니|blue]] 새 시청자에게 먼저 보여주기\n시작했대요. 얼굴 나오는 메인 채널에선\n반대로 켜 두는 게 더 나았다고 해요.' },
    { type: 'noteItem', no: '2', head: '카테고리, [[매번 바꿔요|blue]]', size: 48,
      text: '이 채널은 영상마다 카테고리를\n\'사람·브이로그\' 하나로만 고정해 뒀대요.\n\n카테고리는 유튜브가 영상을 [[누구에게 보여줄지|teal]]\n판단하는 정보라, 하나로 고정하면\n엉뚱한 사람에게만 가게 된대요.\n\n영상 내용에 맞게 교육·브이로그·노하우 등으로\n[[바꿔가며|orange]] 올리니 조회수가 늘었대요.' },
    { type: 'noteItem', no: '3', head: '자동 캡션, [[켜 보세요|teal]]', size: 48,
      text: '전엔 자동 캡션을 늘 꺼 뒀었는데,\n이 채널에서는 켜 봤대요.\n\n그랬더니 방글라데시·프랑스어권 등\n[[여러 나라 시청자|pink]]가 자동 번역 캡션으로\n영상을 보기 시작했대요.\n\n얼굴 없이 찍거나 연령대가 있는 시청자를\n상대할수록 [[도움이 된다|blue]]고 해요.' },
    { type: 'noteCta', head: '더 궁금한 건 [[커뮤니티|pink]]에 남겨 주세요',
      steps: [
        { img: 'assets/cta_step1_channel.png' },
        { img: 'assets/cta_step2_write.png' },
      ] },
  ],
};
