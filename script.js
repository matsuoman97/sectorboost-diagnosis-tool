const questions = [
  {
    key: "traffic",
    phase: "流入確認",
    tag: "Q1 / 集客",
    title: "新規の流入は安定していますか？",
    answers: [
      {
        label: "広告・SNS・紹介などから継続的に流入がある",
        score: { traffic: 0 }
      },
      {
        label: "時々流入はあるが、安定していない",
        score: { traffic: 1 }
      },
      {
        label: "ほとんど新規流入がない",
        score: { traffic: 2 }
      }
    ]
  },
  {
    key: "flow",
    phase: "導線確認",
    tag: "Q2 / 導線",
    title: "問い合わせ・購入までの流れは分かりやすいですか？",
    answers: [
      {
        label: "ユーザー導線は比較的整理されている",
        score: { flow: 0 }
      },
      {
        label: "導線が複雑かもしれない",
        score: { flow: 1 }
      },
      {
        label: "どこで離脱しているか分からない",
        score: { flow: 2 }
      }
    ]
  },
  {
    key: "offer",
    phase: "訴求確認",
    tag: "Q3 / 訴求",
    title: "サービスの価値は伝わっていますか？",
    answers: [
      {
        label: "強みや特徴は比較的伝わっている",
        score: { offer: 0 }
      },
      {
        label: "興味は持たれるが決め手が弱い",
        score: { offer: 1 }
      },
      {
        label: "何をしている会社か伝わりづらい",
        score: { offer: 2 }
      }
    ]
  },
  {
    key: "target",
    phase: "ターゲット確認",
    tag: "Q4 / ターゲット",
    title: "届けたい相手は明確ですか？",
    answers: [
      {
        label: "ターゲット像は比較的明確",
        score: { target: 0 }
      },
      {
        label: "広く見せすぎている気がする",
        score: { target: 1 }
      },
      {
        label: "誰向けか曖昧になっている",
        score: { target: 2 }
      }
    ]
  },
  {
    key: "trust",
    phase: "信頼確認",
    tag: "Q5 / 信頼",
    title: "比較検討時の信頼材料は足りていますか？",
    answers: [
      {
        label: "実績・事例・説明はある程度揃っている",
        score: { trust: 0 }
      },
      {
        label: "信頼材料が弱い気がする",
        score: { trust: 1 }
      },
      {
        label: "比較時に選ばれる理由が弱い",
        score: { trust: 2 }
      }
    ]
  },
  {
    key: "cycle",
    phase: "改善確認",
    tag: "Q6 / 改善",
    title: "改善検証は継続できていますか？",
    answers: [
      {
        label: "定期的に改善・検証している",
        score: { cycle: 0 }
      },
      {
        label: "改善はしているが感覚的",
        score: { cycle: 1 }
      },
      {
        label: "改善が止まっている",
        score: { cycle: 2 }
      }
    ]
  },
  {
    key: "overall",
    phase: "全体確認",
    tag: "Q7 / 全体",
    title: "現在、一番不安を感じているのはどこですか？",
    answers: [
      {
        label: "集客",
        score: { traffic: 1 }
      },
      {
        label: "導線",
        score: { flow: 1 }
      },
      {
        label: "訴求・オファー",
        score: { offer: 1 }
      },
      {
        label: "信頼・比較検討",
        score: { trust: 1 }
      }
    ]
  }
];

const results = {
  traffic: {
    title: "集客ボトルネックの可能性",
    summary:
      "流入量そのものが不足している可能性があります。",
    current:
      "広告・SNS・検索流入など、新規接点の設計不足が影響している可能性があります。",
    problems: [
      "認知が広がっていない",
      "比較検討の母数が不足している",
      "流入経路が限定されている"
    ],
    causes: [
      "広告配信不足",
      "訴求軸不足",
      "ターゲット設計不足"
    ],
    direction:
      "SectorBoostでは、広告配信を通じて『流入不足なのか』『導線の問題なのか』を切り分けながら整理していきます。"
  },

  flow: {
    title: "導線ボトルネックの可能性",
    summary:
      "流入後の導線で離脱が起きている可能性があります。",
    current:
      "サービス理解・CTA・ページ構成などで離脱が発生している可能性があります。",
    problems: [
      "問い合わせまで辿り着かない",
      "途中離脱が多い",
      "情報設計が複雑"
    ],
    causes: [
      "導線設計不足",
      "CTA配置の問題",
      "情報量バランス"
    ],
    direction:
      "広告配信時の行動データをもとに、どこで離脱しているかを整理していきます。"
  },

  offer: {
    title: "訴求ボトルネックの可能性",
    summary:
      "サービス価値が十分に伝わっていない可能性があります。",
    current:
      "何をしている会社なのか、なぜ選ぶべきなのかが伝わり切っていない可能性があります。",
    problems: [
      "比較時の差別化不足",
      "魅力が伝わりづらい",
      "検討理由が弱い"
    ],
    causes: [
      "訴求軸不足",
      "言語化不足",
      "オファー設計不足"
    ],
    direction:
      "広告配信時の反応を見ながら、どの訴求が響くかを整理していきます。"
  },

  target: {
    title: "ターゲット設計の可能性",
    summary:
      "誰に届けるかが広くなりすぎている可能性があります。",
    current:
      "対象を広げすぎることで、逆に刺さりづらくなっている可能性があります。",
    problems: [
      "反応率が低い",
      "問い合わせの質が不安定",
      "訴求がぼやける"
    ],
    causes: [
      "ターゲット設定不足",
      "市場理解不足",
      "メッセージ分散"
    ],
    direction:
      "広告配信を通じて、どの層に反応があるかを検証していきます。"
  },

  trust: {
    title: "信頼形成ボトルネックの可能性",
    summary:
      "比較検討時の信頼材料が不足している可能性があります。",
    current:
      "実績・事例・第三者視点などが不足し、比較時に不利になっている可能性があります。",
    problems: [
      "比較で選ばれにくい",
      "問い合わせ率が低い",
      "安心感不足"
    ],
    causes: [
      "実績不足",
      "説明不足",
      "信頼導線不足"
    ],
    direction:
      "広告検証とあわせて、信頼形成の見せ方も整理していきます。"
  },

  cycle: {
    title: "改善停止ボトルネックの可能性",
    summary:
      "改善検証サイクルが止まっている可能性があります。",
    current:
      "感覚的な改善だけになり、何が成果に繋がるか見えづらくなっている可能性があります。",
    problems: [
      "改善が積み上がらない",
      "再現性がない",
      "判断が感覚的"
    ],
    causes: [
      "検証不足",
      "数値不足",
      "改善設計不足"
    ],
    direction:
      "広告配信データをもとに、改善優先順位を整理していきます。"
  }
};

const state = {
  currentQuestion: 0,
  scores: {
    traffic: 0,
    flow: 0,
    offer: 0,
    target: 0,
    trust: 0,
    cycle: 0
  }
};

const progressLabel = document.getElementById("progress-label");
const progressPhase = document.getElementById("progress-phase");
const progressBar = document.getElementById("progress-bar");

const questionTag = document.getElementById("question-tag");
const questionTitle = document.getElementById("question-title");
const answersContainer = document.getElementById("answers");

const questionScreen = document.getElementById("question-screen");
const analysisScreen = document.getElementById("analysis-screen");
const resultScreen = document.getElementById("result-screen");

const resultTitle = document.getElementById("result-title");
const resultSummary = document.getElementById("result-summary");
const resultCurrent = document.getElementById("result-current");
const resultProblems = document.getElementById("result-problems");
const resultCauses = document.getElementById("result-causes");
const resultDirection = document.getElementById("result-direction");

const restartButton = document.getElementById("restart-button");
const pdfButton = document.getElementById("pdf-button");

function renderQuestion() {
  const question = questions[state.currentQuestion];

  progressLabel.textContent = `質問 ${state.currentQuestion + 1} / ${questions.length}`;
  progressPhase.textContent = question.phase;

  const progress = ((state.currentQuestion + 1) / questions.length) * 100;
  progressBar.style.width = `${progress}%`;

  questionTag.textContent = question.tag;
  questionTitle.textContent = question.title;

  answersContainer.innerHTML = "";

  question.answers.forEach((answer) => {
    const button = document.createElement("button");

    button.className = "answer-button";
    button.type = "button";
    button.textContent = answer.label;

    button.addEventListener("click", () => {
      Object.entries(answer.score).forEach(([key, value]) => {
        state.scores[key] += value;
      });

      nextQuestion();
    });

    answersContainer.appendChild(button);
  });
}

function nextQuestion() {
  state.currentQuestion += 1;

  if (state.currentQuestion >= questions.length) {
    showAnalysis();
    return;
  }

  renderQuestion();
}

function showAnalysis() {
  questionScreen.classList.remove("screen--active");
  analysisScreen.classList.add("screen--active");

  setTimeout(() => {
    analysisScreen.classList.remove("screen--active");
    showResult();
  }, 1800);
}

function showResult() {
  resultScreen.classList.add("screen--active");

  const highest = Object.entries(state.scores).sort(
    (a, b) => b[1] - a[1]
  )[0][0];

  const result = results[highest];

  resultTitle.textContent = result.title;

  resultSummary.innerHTML = `
    <p>${result.summary}</p>
  `;

  resultCurrent.innerHTML = `
    <p>${result.current}</p>
  `;

  resultProblems.innerHTML = result.problems
    .map((item) => `<li>${item}</li>`)
    .join("");

  resultCauses.innerHTML = result.causes
    .map((item) => `<li>${item}</li>`)
    .join("");

  resultDirection.innerHTML = `
    <p>${result.direction}</p>
  `;
}

restartButton.addEventListener("click", () => {
  state.currentQuestion = 0;

  Object.keys(state.scores).forEach((key) => {
    state.scores[key] = 0;
  });

  resultScreen.classList.remove("screen--active");
  questionScreen.classList.add("screen--active");

  renderQuestion();
});

pdfButton.addEventListener("click", () => {
  window.print();
});

renderQuestion();
