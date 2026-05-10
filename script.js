function initDiagnosis() {
  const diagnosisTypes = {
    flow: "売上導線の整理不足タイプ",
    contact: "見込み客との接点不足タイプ",
    cycle: "改善サイクル停滞タイプ",
    ads: "広告運用の可視化不足タイプ",
  };

  const priority = ["flow", "contact", "cycle", "ads"];
  const phases = [
    "現状確認",
    "導線整理",
    "接点分析",
    "改善状況確認",
    "課題整理中",
  ];
  const analysisMessages = [
    "導線構造を整理中…",
    "改善ポイントを分析中…",
    "接点状況を確認中…",
    "課題優先度を可視化中…",
    "現状整理レポートを生成中…",
  ];

  const questions = [
    {
      tag: "Q1 / 集客",
      title: "毎月の集客数は安定していますか？",
      tempo: "early",
      answers: [
        { label: "安定している", scores: {} },
        { label: "波がある", scores: { contact: 2 } },
        { label: "かなり不安定", scores: { contact: 3 } },
        { label: "分からない", scores: { cycle: 2, flow: 1 } },
      ],
    },
    {
      tag: "Q2 / 売上導線",
      title: "問い合わせ〜購入までの流れは整理されていますか？",
      tempo: "early",
      answers: [
        { label: "明確", scores: {} },
        { label: "一部曖昧", scores: { flow: 2 } },
        { label: "かなり曖昧", scores: { flow: 3 } },
        { label: "感覚で運用", scores: { flow: 3, cycle: 2 } },
        { label: "分からない", scores: { flow: 2, cycle: 2 } },
      ],
    },
    {
      tag: "Q3 / 広告",
      title: "広告配信の成果を把握できていますか？",
      tempo: "middle",
      answers: [
        { label: "数字で把握", scores: {} },
        { label: "なんとなく把握", scores: { ads: 2 } },
        { label: "あまり分からない", scores: { ads: 3, cycle: 1 } },
        { label: "広告を止めている", scores: { contact: 1, ads: 2 } },
        { label: "広告を出していない", scores: { contact: 2 } },
      ],
    },
    {
      tag: "Q4 / 訴求",
      title: "「なぜ選ばれるか」を明確に伝えられていますか？",
      tempo: "middle",
      answers: [
        { label: "明確", scores: {} },
        { label: "一応ある", scores: { flow: 1 } },
        { label: "弱いと思う", scores: { flow: 3 } },
        { label: "分からない", scores: { flow: 2, cycle: 1 } },
      ],
    },
    {
      tag: "Q5 / 改善",
      title: "売上改善のための検証・改善は継続できていますか？",
      tempo: "final",
      answers: [
        { label: "定期的に実施", scores: {} },
        { label: "時々やる", scores: { cycle: 2 } },
        { label: "ほぼできていない", scores: { cycle: 3 } },
        { label: "属人的", scores: { cycle: 3, flow: 1 } },
      ],
    },
  ];

  const results = {
    flow: {
      title: "売上導線の整理を優先したい状態です",
      summary: [
        "現在、売上改善に必要な導線整理が十分に機能していない可能性があります。",
        "集客量だけを増やす前に、問い合わせから購入までの流れを整えることで改善余地が見つかるケースがあります。",
      ],
      current: [
        "問い合わせ〜購入までの接続や、誰に何を伝えるかの整理がボトルネックになっている可能性があります。",
      ],
      problems: [
        "問い合わせは来るが成約に繋がりにくい",
        "サービスの強みが十分に伝わっていない",
        "導線が属人的になっている",
      ],
      causes: ["導線設計不足", "訴求整理不足", "商談前後の判断基準が曖昧"],
      direction: [
        "まずは「誰に・何を・どう伝えるか」を整理し、売上につながる導線設計を見直すことが重要です。",
        "広告改善より先に導線・接点・整理設計を見直すことで、次に改善すべき箇所が明確になります。",
      ],
    },
    contact: {
      title: "見込み客との接点設計を見直したい状態です",
      summary: [
        "現在は、サービス自体の課題というより、見込み客との接点量や接点設計が不足している可能性があります。",
        "良いサービスでも、比較検討の候補に入る機会が少ないと売上改善につながりにくくなります。",
      ],
      current: [
        "どこで見込み客と接点を作るか、どの導線へつなげるかの設計を整理する余地があります。",
      ],
      problems: [
        "認知が広がらない",
        "流入数が安定しない",
        "良いサービスでも比較対象に入らない",
      ],
      causes: [
        "接点不足",
        "流入チャネルの偏り",
        "LPや問い合わせ導線との接続不足",
      ],
      direction: [
        "まずは「どこで接点を作るか」を整理し、広告・SNS・LPなどの流入設計を見直すことが重要です。",
        "単に露出を増やすのではなく、接点から相談までの流れを一つの導線として設計すると改善判断がしやすくなります。",
      ],
    },
    cycle: {
      title: "改善サイクルを整える余地があります",
      summary: [
        "現在は、改善施策そのものよりも「検証・改善を継続できる状態」が不足している可能性があります。",
        "施策が単発で終わると、成果が出た理由・出なかった理由が残りにくく、次の判断が感覚的になりやすくなります。",
      ],
      current: [
        "現状把握、改善優先度、検証の流れを整理することで、再現性のある改善に近づける状態です。",
      ],
      problems: [
        "感覚的な判断になりやすい",
        "改善施策が単発で終わる",
        "成果の再現性が低くなる",
      ],
      causes: ["改善優先度不明", "数値確認の不足", "検証フローの属人化"],
      direction: [
        "まずは現状を整理し、「何を改善すべきか」を明確化した上で、継続的に検証できる状態を作ることが重要です。",
        "小さな検証を積み上げられる形にすると、広告・導線・訴求のどこに改善余地があるかを判断しやすくなります。",
      ],
    },
    ads: {
      title: "広告成果の可視化を整えたい状態です",
      summary: [
        "現在は、広告成果や数値の把握不足によって、改善判断が難しくなっている可能性があります。",
        "数値が見えないまま運用すると、広告費の最適化や導線改善の優先順位が曖昧になりやすくなります。",
      ],
      current: [
        "広告の成果だけでなく、その後の導線・訴求・問い合わせ状況まで含めて整理する余地があります。",
      ],
      problems: [
        "広告費の最適化ができない",
        "成果判断が感覚的になる",
        "改善ポイントが見えづらい",
      ],
      causes: ["広告成果の可視化不足", "計測設計不足", "導線全体との接続不足"],
      direction: [
        "まずは広告成果を可視化し、「どこに課題があるか」を整理することが重要です。",
        "広告単体ではなく、導線・訴求・設計全体を含めて見ることで、改善すべきポイントが明確になります。",
      ],
    },
  };

  const state = {
    currentQuestion: 0,
    scores: {
      flow: 0,
      contact: 0,
      cycle: 0,
      ads: 0,
    },
  };

  const diagnosisCard = document.getElementById("diagnosis-app");
  const questionScreen = document.getElementById("question-screen");
  const analysisScreen = document.getElementById("analysis-screen");
  const resultScreen = document.getElementById("result-screen");
  const progressLabel = document.getElementById("progress-label");
  const progressPhase = document.getElementById("progress-phase");
  const progressBar = document.getElementById("progress-bar");
  const questionTag = document.getElementById("question-tag");
  const questionTitle = document.getElementById("question-title");
  const answersContainer = document.getElementById("answers");
  const analysisMessage = document.getElementById("analysis-message");
  const restartButton = document.getElementById("restart-button");

  function scrollToTop() {
    document
      .getElementById("sectorboost-diagnosis")
      .scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function updateProgress(value) {
    progressBar.style.width = `${value}%`;
  }

  function getAnalysisMessage() {
    return analysisMessages[
      Math.floor(Math.random() * analysisMessages.length)
    ];
  }

  function renderQuestion() {
    const question = questions[state.currentQuestion];
    const progressValue = Math.round(
      ((state.currentQuestion + 1) / questions.length) * 100,
    );

    diagnosisCard.dataset.tempo = question.tempo;
    progressLabel.textContent = `質問 ${state.currentQuestion + 1} / ${questions.length}`;
    progressPhase.textContent = phases[state.currentQuestion];
    updateProgress(progressValue);
    questionScreen.classList.remove("screen--fade-in");

    window.requestAnimationFrame(() => {
      questionTag.textContent = question.tag;
      questionTitle.textContent = question.title;
      answersContainer.innerHTML = "";

      question.answers.forEach((answer) => {
        const button = document.createElement("button");
        button.className = "answer-button";
        button.type = "button";
        button.textContent = answer.label;
        button.addEventListener("click", () => handleAnswer(answer));
        answersContainer.appendChild(button);
      });

      questionScreen.classList.add("screen--fade-in");
    });
  }

  function handleAnswer(answer) {
    Object.entries(answer.scores).forEach(([type, score]) => {
      state.scores[type] += score;
    });
    state.currentQuestion += 1;

    if (state.currentQuestion >= questions.length) {
      showAnalysis();
      return;
    }

    renderQuestion();
  }

  function getPrimaryResultType() {
    return priority.reduce((currentBest, type) => {
      if (state.scores[type] > state.scores[currentBest]) {
        return type;
      }

      return currentBest;
    }, priority[0]);
  }

  function renderList(containerId, items) {
    const list = document.getElementById(containerId);
    list.innerHTML = "";

    items.forEach((itemText) => {
      const item = document.createElement("li");
      item.textContent = itemText;
      list.appendChild(item);
    });
  }

  function renderParagraphs(containerId, paragraphs) {
    const container = document.getElementById(containerId);
    container.innerHTML = "";

    paragraphs.forEach((paragraph) => {
      const text = document.createElement("p");
      text.textContent = paragraph;
      container.appendChild(text);
    });
  }

  function showAnalysis() {
    progressLabel.textContent = "質問 5 / 5";
    progressPhase.textContent = "課題整理中";
    updateProgress(100);
    analysisMessage.textContent = getAnalysisMessage();
    questionScreen.classList.remove("screen--active");
    analysisScreen.classList.add("screen--active", "screen--fade-in");
    scrollToTop();

    window.setTimeout(showResult, 1300);
  }

  function showResult() {
    const result = results[getPrimaryResultType()];

    diagnosisCard.dataset.tempo = "report";
    progressLabel.textContent = "整理完了";
    progressPhase.textContent = "分析レポート";
    updateProgress(100);

    document.getElementById("result-title").textContent = result.title;
    renderParagraphs("result-summary", result.summary);
    renderParagraphs("result-current", result.current);
    renderList("result-problems", result.problems);
    renderList("result-causes", result.causes);
    renderParagraphs("result-direction", result.direction);

    questionScreen.classList.remove("screen--active");
    analysisScreen.classList.remove("screen--active", "screen--fade-in");
    resultScreen.classList.add("screen--active", "screen--fade-in");
    scrollToTop();
  }

  function restartDiagnosis() {
    state.currentQuestion = 0;
    Object.keys(state.scores).forEach((key) => {
      state.scores[key] = 0;
    });

    analysisScreen.classList.remove("screen--active", "screen--fade-in");
    resultScreen.classList.remove("screen--active", "screen--fade-in");
    questionScreen.classList.add("screen--active");
    renderQuestion();
    scrollToTop();
  }

  restartButton.addEventListener("click", restartDiagnosis);
  renderQuestion();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initDiagnosis);
} else {
  initDiagnosis();
}
