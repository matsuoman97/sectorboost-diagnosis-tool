function initDiagnosis() {
  const priority = [
    "traffic",
    "flow",
    "message",
    "offer",
    "target",
    "trust",
    "cycle",
  ];
  const phases = [
    "流入確認",
    "導線確認",
    "訴求確認",
    "条件確認",
    "対象確認",
    "信頼確認",
    "検証確認",
  ];
  const analysisMessages = [
    "売上構造の仮説を整理中…",
    "導線と接点の関係を確認中…",
    "検証すべきポイントを整理中…",
    "ボトルネック候補を絞り込み中…",
    "現状整理レポートを生成中…",
  ];

  const questions = [
    {
      tag: "Q1 / 集客",
      title: "新規の流入は安定していますか？",
      tempo: "early",
      answers: [
        { label: "比較的安定している", scores: {} },
        { label: "月によって波がある", scores: { traffic: 2, cycle: 1 } },
        { label: "まだ十分とは言えない", scores: { traffic: 3 } },
        { label: "正確には把握できていない", scores: { traffic: 2, cycle: 2 } },
      ],
    },
    {
      tag: "Q2 / 導線",
      title: "スマホで見た時、問い合わせや購入まで迷わず進めますか？",
      tempo: "early",
      answers: [
        { label: "迷わず進める", scores: {} },
        { label: "一部迷いがありそう", scores: { flow: 2 } },
        { label: "改善余地がある", scores: { flow: 3 } },
        { label: "スマホでは確認できていない", scores: { flow: 2, cycle: 1 } },
      ],
    },
    {
      tag: "Q3 / 訴求",
      title: "サービスの強みは一言で伝わりますか？",
      tempo: "middle",
      answers: [
        { label: "一言で伝わる", scores: {} },
        { label: "概ね伝わっている", scores: { message: 2 } },
        { label: "少し伝わりにくい", scores: { message: 3 } },
        {
          label: "実績・事例の補足が必要",
          scores: { message: 2, trust: 2 },
        },
      ],
    },
    {
      tag: "Q4 / オファー",
      title: "価格や初回相談の条件は、検討しやすい設計ですか？",
      tempo: "middle",
      answers: [
        { label: "検討しやすい", scores: {} },
        { label: "一部ハードルがありそう", scores: { offer: 2 } },
        { label: "やや重く見えていそう", scores: { offer: 3 } },
        { label: "判断材料を補う余地がある", scores: { offer: 2, trust: 1 } },
      ],
    },
    {
      tag: "Q5 / ターゲット",
      title: "問い合わせる人と、成約しやすい相手は一致していますか？",
      tempo: "middle",
      answers: [
        { label: "おおむね一致している", scores: {} },
        { label: "少しズレがありそう", scores: { target: 2 } },
        {
          label: "問い合わせ後にズレやすい",
          scores: { target: 3, flow: 1 },
        },
        { label: "まだ判断できていない", scores: { target: 2, cycle: 1 } },
      ],
    },
    {
      tag: "Q6 / 信頼",
      title: "初見で安心できる実績や会社感は伝わっていますか？",
      tempo: "middle",
      answers: [
        { label: "十分に伝わっている", scores: {} },
        { label: "最低限は伝わる", scores: { trust: 1 } },
        { label: "もう少し補強したい", scores: { trust: 3 } },
        { label: "比較時に弱く見えそう", scores: { trust: 2, message: 1 } },
      ],
    },
    {
      tag: "Q7 / 改善",
      title: "数字を見ながら改善判断できていますか？",
      tempo: "final",
      answers: [
        { label: "数字で判断できている", scores: {} },
        { label: "一部だけ見ている", scores: { cycle: 2 } },
        { label: "判断が感覚に寄りやすい", scores: { cycle: 3 } },
        { label: "検証が止まり気味", scores: { cycle: 2, traffic: 1 } },
      ],
    },
  ];

  const results = {
    traffic: {
      title: "そもそも十分な検討機会を作れていない可能性があります",
      summary: [
        "商品やサービスの良し悪し以前に、十分な人に見られていない可能性があります。",
      ],
      hypothesis: [
        "見込み客との接点が少ない",
        "比較検討に入る前で止まっている",
        "反応する層がまだ見えていない",
      ],
      states: [
        "知ってもらう機会が少ない",
        "検討候補に入れていない",
        "問い合わせ前の母数が足りない",
      ],
      checks: [
        "広告流入で反応が増えるか",
        "流入後にどこで止まるか",
        "反応層が想定と合うか",
      ],
      validation: [
        "Sector Boostでは、まず接点を作り、集客不足なのか導線・伝え方の問題なのかを切り分けます。",
      ],
    },
    flow: {
      title: "興味を持たれても、問い合わせ前に止まっている可能性があります",
      summary: [
        "興味は生まれていても、次に何をすればよいかが分かりづらく、行動につながっていない可能性があります。",
      ],
      hypothesis: [
        "次の行動が分かりにくい",
        "CTAまでの流れが遠い",
        "スマホで情報を追いにくい",
      ],
      states: [
        "ページは見られている",
        "問い合わせ前で迷われる",
        "フォーム到達前に離脱される",
      ],
      checks: [
        "どこで離脱しているか",
        "CTAが押されているか",
        "スマホで迷わず進めるか",
      ],
      validation: [
        "Sector Boostでは、広告流入後の行動を見ながら、優先して整える導線を整理します。",
      ],
    },
    message: {
      title: "“良さ”が伝わる前に離脱されている可能性があります",
      summary: [
        "価値自体ではなく、“選ぶ理由”の伝わり方で比較検討が止まっている可能性があります。",
      ],
      hypothesis: [
        "違いが伝わりきっていない",
        "判断材料が不足している",
        "今相談する理由が弱い",
      ],
      states: [
        "“良さそう”で止まる",
        "他社比較で埋もれる",
        "問い合わせ前に離脱される",
      ],
      checks: [
        "どの言葉に反応が出るか",
        "どこで検討が止まっているか",
        "比較時に何が不足しているか",
      ],
      validation: [
        "Sector Boostでは、複数の伝え方を小さく試し、見込み客に届く表現を整理します。",
      ],
    },
    offer: {
      title: "関心はあっても、相談・購入の一歩手前で止まっている可能性があります",
      summary: [
        "納得して次に進むための入口設計が、少し重く見えている可能性があります。",
      ],
      hypothesis: [
        "条件の納得材料が少ない",
        "初回相談が重く見える",
        "次に進む理由が弱い",
      ],
      states: [
        "関心はあるが動かない",
        "検討を後回しにされる",
        "相談前に温度が下がる",
      ],
      checks: [
        "CTAが押されているか",
        "条件説明で止まっていないか",
        "入口を軽くすると反応が変わるか",
      ],
      validation: [
        "Sector Boostでは、関心不足なのか入口設計の問題なのかを反応から切り分けます。",
      ],
    },
    target: {
      title: "反応している相手と、成約しやすい相手がズレている可能性があります",
      summary: [
        "問い合わせの数よりも、相談内容や温度感のズレで商談化が止まっている可能性があります。",
      ],
      hypothesis: [
        "伝える相手が広すぎる",
        "単価感が合っていない",
        "課題感の強い層に届いていない",
      ],
      states: [
        "問い合わせ後にズレが出る",
        "商談化しにくい",
        "成約しやすい層と違う",
      ],
      checks: [
        "反応する属性は誰か",
        "問い合わせ内容の質は合うか",
        "伝え方が広すぎないか",
      ],
      validation: [
        "Sector Boostでは、反応層を確認し、狙う相手と伝え方のズレを整理します。",
      ],
    },
    trust: {
      title: "検討に必要な判断材料が不足している可能性があります",
      summary: [
        "サービス内容に興味を持たれていても、安心して相談・購入するための材料が不足している可能性があります。",
      ],
      hypothesis: [
        "実績や事例が足りない",
        "会社感が伝わりにくい",
        "相談前の不安が残っている",
      ],
      states: [
        "良さそうで止まる",
        "比較時に選びきれない",
        "問い合わせ前に不安が残る",
      ],
      checks: [
        "実績で反応が変わるか",
        "会社情報が見られているか",
        "不安を減らす材料は足りるか",
      ],
      validation: [
        "Sector Boostでは、信頼材料が相談前の壁になっているかを反応から整理します。",
      ],
    },
    cycle: {
      title: "次に直すべき箇所が見えにくくなっている可能性があります",
      summary: [
        "施策は動いていても、どこで差が出たかを整理できず、改善判断が曖昧になっている可能性があります。",
      ],
      hypothesis: [
        "数字の見方が揃っていない",
        "施策が点で終わっている",
        "改善優先度を決めにくい",
      ],
      states: [
        "判断が感覚に寄りやすい",
        "改善が単発で終わる",
        "次の一手が決めにくい",
      ],
      checks: [
        "どこで差が出ているか",
        "広告文ごとの反応差はあるか",
        "判断に使う数字は揃っているか",
      ],
      validation: [
        "Sector Boostでは、広告検証を通じて数字を揃え、次に整える箇所を整理します。",
      ],
    },
  };

  const state = {
    currentQuestion: 0,
    scores: {
      traffic: 0,
      flow: 0,
      message: 0,
      offer: 0,
      target: 0,
      trust: 0,
      cycle: 0,
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
  const pdfButton = document.getElementById("pdf-button");
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
    progressLabel.textContent = `質問 ${questions.length} / ${questions.length}`;
    progressPhase.textContent = "仮説整理中";
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
    progressPhase.textContent = "仮説レポート";
    updateProgress(100);

    document.getElementById("result-title").textContent = result.title;
    renderParagraphs("result-summary", result.summary);
    renderList("result-current", result.states);
    renderList("result-problems", result.hypothesis);
    renderList("result-causes", result.checks);
    renderParagraphs("result-direction", result.validation);

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

  pdfButton.addEventListener("click", () => {
    window.print();
  });

  restartButton.addEventListener("click", restartDiagnosis);
  renderQuestion();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initDiagnosis);
} else {
  initDiagnosis();
}
