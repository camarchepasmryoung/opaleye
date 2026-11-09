// 2026-11-13 · Danny Why 「Why Your Views STOP After 48 Hours (learn how to fix it)」(-bIvqlrCBNI) — 요즘 터진 영상
// 132.5만 회, 채널 평소의 26.6배 (data/outliers.json, 2026-11-08 수집). 근거 = source.md
export default {
  title: '조회수가 48시간 뒤 멈추는 이유',
  brand: '흰지로의 트렌드 노트', theme: 'note', big: true, font: 'pretendard',
  src: { creator: 'Danny Why', title: 'Why Your Views STOP After 48 Hours (learn how to fix it)' },
  date: '2026-11-13', status: '초안',
  inkW: 840,     // 가장 긴 줄 잉크 폭 (본문 41px) — PNG로 잼
  source: { channel: 'Danny Why', video: 'https://www.youtube.com/watch?v=-bIvqlrCBNI' },
  post: `올리고 이틀 지나면 조회수가 딱 멈추는 영상, 왜 그럴까요?
1년 가까이 영상마다 2,000회에서 멈췄던 Danny Why가 찾은 이유를 정리했어요.
여러분 영상은 보통 몇 회에서 멈추나요?

#유튜브조회수 #유튜브알고리즘 #작은채널`,
  cards: [
    { type: 'noteCover', size: 70, title: '조회수가 ==48시간 뒤== 멈추는 이유' },
    { type: 'noteMap', items: ['[[트렌드|pink]]에 올라탔나', '[[한 주제|blue]]를 지켰나', '[[꾸준히|teal]] 올렸나', '[[버티는 숫자|orange]]를 넘었나'] },
    { type: 'noteItem', no: '1', head: '좋은 영상보다, [[트렌드|pink]]', size: 41,
      text: 'Danny 채널에서 영상 A는 5일 만에 15만 회,\n영상 B는 12일 동안 4.3만 회가 나왔어요.\n\n그런데 클릭률·평균 시청 시간은 [[B가 더 좋았대요|blue]].\n차이는 하나, A는 그때 많은 사람이\n궁금해하던 주제(알고리즘 변화)였어요.\n\n사람들이 [[지금 이야기하는 것|green]]에 올라타 보세요.' },
    { type: 'noteItem', no: '2', head: '주제를 바꾸면, [[멈춰요|blue]]', size: 41,
      text: '마인크래프트 영상을 올리던 채널이\n갑자기 카운터스트라이크 영상을 올리면요?\n\nDanny는 유튜브가 새 영상을 먼저\n[[원래 보던 사람들|orange]]에게 보여 준다고 해요.\n관심 없는 사람들이 안 보니, 영상이 나빠서가 아니라\n엉뚱한 사람에게 가서 멈추는 거죠.\n\n작은 채널일수록 [[한 주제|pink]]를 지키세요.' },
    { type: 'noteItem', no: '3', head: '들쭉날쭉하면, [[믿음|teal]]이 깨져요', size: 41,
      text: '학교 앞 가게가 열렸다 닫혔다 하면\n어느 순간 안 가게 되잖아요.\n\n영상도 올렸다 몇 주 사라졌다 하면\n시청자는 [[언제 올지|blue]] 모르게 돼요.\nDanny는 유튜브도 마찬가지라고 봐요.\n\n바빠도 지킬 수 있는 [[주기|green]]로 꾸준히 올리세요.' },
    { type: 'noteItem', no: '4', head: 'Danny의 [[버티는 숫자|orange]]', size: 41,
      text: '10분 영상이라면 평균 시청 시간 [[3분(30%)|pink]].\n이걸 못 넘으면 거의 크지 않았대요.\n노출이 10만을 넘은 뒤엔 클릭률 [[5~10%|blue]]를\n지켜야 계속 컸다고 하고요.\n\n다만 Danny도 \'모두에게 같은 규칙은 아니고\n분야·영상 길이마다 다르다\'고 했어요.\n내 채널 기준을 찾는 [[출발점|green]]으로 쓰세요.' },
    { type: 'noteCta', head: '더 궁금한 건 [[커뮤니티|pink]]에 남겨 주세요',
      steps: [
        { img: 'assets/cta_step1_channel.png' },
        { img: 'assets/cta_step2_write.png' },
      ] },
  ],
};
