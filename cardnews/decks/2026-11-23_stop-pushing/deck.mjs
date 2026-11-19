// 2026-11-23 · Murray Frost 「7 Mistakes That Make YouTube Stop Pushing Your Videos」(E690vB3Pw78) — 요즘 터진 영상
// 1.3만 회, 채널 평소의 18.9배 (vidIQ outliers, 2026-11-19 수집). 근거 = source.md
export default {
  title: '유튜브가 영상을 그만 밀어주는 이유 5가지',
  brand: '흰지로의 트렌드 노트', theme: 'note', big: true, font: 'pretendard',
  src: { creator: 'Murray Frost', title: '7 Mistakes That Make YouTube Stop Pushing Your Videos' },
  date: '2026-11-23', status: '초안',
  inkW: 900,
  blockW: 960,
  lh: 1.62,
  gapHead: 38,
  source: { channel: 'Murray Frost', video: 'https://www.youtube.com/watch?v=E690vB3Pw78' },
  post: `영상을 올렸는데 유튜브가 갑자기 안 밀어준다면, 이 중 하나 때문일 수 있어요.
유튜브 코치 Murray Frost가 꼽은 7가지 실수 중 5가지를 정리했어요.
여러분은 몇 가지나 해당되세요? 댓글로 알려 주세요.

#유튜브알고리즘 #유튜브실수 #작은채널`,
  cards: [
    { type: 'noteCover', size: 64, title: '유튜브가 ==그만 밀어주는== 진짜 이유' },
    { type: 'noteMap', items: ['바로 [[공개|pink]]하기', '[[아동용|blue]] 설정 체크', '너무 빨리 [[판단|teal]]하기', '잘되는 영상 [[건드리기|orange]]', '끝엔 [[작별 인사|green]]만'] },
    { type: 'noteItem', no: '1', head: '올리자마자, [[공개|pink]]하지 마세요', size: 48,
      text: '영상을 다 올리면 바로 공개하고 싶죠.\n\n그런데 100%까지 올라가도 유튜브는\n아직 [[HD 처리|blue]]와 저작권 검사를 하고 있어요.\n바로 공개하면 화질이 흐릿하거나\n저작권 문제를 뒤늦게 알게 돼요.\n\n비공개나 미등록으로 올려 두고\n[[최소 12시간|green]]은 기다려 주세요.' },
    { type: 'noteItem', no: '2', head: '[[아동용|blue]] 설정이, 조용히 죽여요', size: 48,
      text: '설정 → 채널 → 고급 설정에\n"아동용" 체크가 돼 있으면\n[[추천·댓글·엔드스크린|pink]]이 전부 사라져요.\n\n영상마다 따로 확인하다 놓치기 쉬우니\n채널 설정에서 한 번에 꺼 두세요.\n\nAI로 영상을 만들었다고 해서\n자동으로 불리해지는 건 아니라고 해요.' },
    { type: 'noteItem', no: '3', head: '처음 며칠로, [[판단|teal]]하지 마세요', size: 48,
      text: '올리고 10분마다 조회수를 보면\n조급해지기 마련이죠.\n\n처음 숫자는 [[추정값|blue]]이고,\n유튜브가 아직 작은 그룹에게만\n영상을 보여주고 있을 때예요.\n\n며칠, 길면 일주일은 지켜보고\n[[절대 지우지|pink]] 마세요. 몇 달 뒤에\n갑자기 터지는 영상도 있대요.' },
    { type: 'noteItem', no: '4', head: '잘되는 영상은, [[그대로|orange]] 두세요', size: 48,
      text: '조회수가 쭉쭉 오르는 영상의\n클릭률이 낮아 보이면\n썸네일을 바꾸고 싶어지죠.\n\n그런데 영상이 퍼질수록\n나를 모르는 사람들에게도 보여지니\n[[클릭률은 자연히 낮아진다|blue]]고 해요.\n\n노출이 멈췄을 때만 포장을 손보고,\n잘되고 있을 땐 [[새 영상|green]]에 집중하세요.' },
    { type: 'noteItem', no: '5', head: '끝인사 대신, [[다음 영상|green]]을', size: 48,
      text: '영상 끝에 길게 인사하면\n그 순간 시청자가 빠져나가요.\n\n대신 관련 영상이나 재생목록을\n[[바로 추천|pink]]하면\n그 시청자가 내 채널 영상을\n이어서 보게 돼요.\n\n유튜브는 영상 한 편이 아니라\n[[시청 세션|blue]] 전체를 중요하게 본대요.' },
    { type: 'noteCta', head: '더 궁금한 건 [[커뮤니티|pink]]에 남겨 주세요',
      steps: [
        { img: 'assets/cta_step1_channel.png' },
        { img: 'assets/cta_step2_write.png' },
      ] },
  ],
};
