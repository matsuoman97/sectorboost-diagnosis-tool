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
        { label: "実績・事例の補足が必要", scores: { message: 2, trust: 2 } },
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
        { label: "問い合わせ後にズレやすい", scores: { target: 3, flow: 1 } },
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
      title: "まだ十分な見込み客に出会えていない状態です",
      summary: [
        "最初に見るべきサインは、サービス評価の前に接点量で止まっていないかです。",
        "一定の流入を作ることで、入口不足なのか、その先の導線・訴求なのかを分けて考えます。",
      ],
      hypothesis: [
        "現時点では、商品やページ以前に、比較検討に入る前の接点が不足している可能性があります。",
      ],
      states: [
        "比較検討前に出会えていない",
        "サービスを評価される前で止まっている",
        "反応する層がまだ見えていない",
      ],
      checks: [
        "広告流入で問い合わせが増えるか",
        "流入後にどこで止まるか",
        "反応層が想定と合うか",
      ],
      validation: [
        "広告で一定の接点を作り、入口の量・導線・訴求のどこに反応差が出るかを確認します。",
      ],
    },
    flow: {
      title: "興味はあるのに、問い合わせ前で迷いやすい状態です",
      summary: [
        "関心は生まれていても、次の行動へ進む前に迷いが出ているサインです。",
        "特にスマホ上で、見たい情報から相談まで自然につながるかを確認します。",
      ],
      hypothesis: [
        "流入や興味がある一方で、ページ構成・行動導線・フォーム前後のどこかで判断が止まっている可能性があります。",
      ],
      states: [
        "次の行動が分かりにくい",
        "相談・問い合わせまでの流れが遠い",
        "スマホで情報が追いにくい",
      ],
      checks: ["離脱が起きる位置", "相談導線まで進むか", "フォーム前の迷い"],
      validation: [
        "広告流入後の行動を見ながら、どの導線を優先して整えるべきかを確認します。",
      ],
    },
    message: {
      title: "良さはあるが、選ぶ理由が一言で残りにくい状態です",
      summary: [
        "価値そのものより、初見で「なぜ選ぶのか」が残りにくいサインです。",
        "言葉・見せ方・実績の出し方によって反応が変わるかを確認します。",
      ],
      hypothesis: [
        "強みや実績が伝わる前に離脱され、比較対象に入りきれていない可能性があります。",
      ],
      states: [
        "強みが一言で残りにくい",
        "判断材料が少ない",
        "選ばれる理由が弱い",
      ],
      checks: [
        "広告文ごとの反応差",
        "最初の画面で選ぶ理由が残るか",
        "実績や事例の効き方",
      ],
      validation: [
        "複数の表現を広告で試し、見込み客に届く言葉と届きにくい言葉の差を確認します。",
      ],
    },
    offer: {
      title: "興味は持たれているが、行動に移りづらい状態です",
      summary: [
        "関心は生まれていても、価格・条件・相談前の心理的な重さで止まっているサインです。",
        "「気になる」から「一度話してみる」へ進む理由が足りているかを確認します。",
      ],
      hypothesis: [
        "納得材料や入口設計が不足し、検討はされても後回しになっている可能性があります。",
      ],
      states: [
        "関心はあるが動かない",
        "条件の納得材料が少ない",
        "初回相談が重く見える",
      ],
      checks: [
        "相談導線まで進むか",
        "価格・条件付近の離脱",
        "入口を軽くした時の反応",
      ],
      validation: [
        "広告流入後の反応を見て、関心不足なのか、条件・入口設計で止まっているのかを切り分けます。",
      ],
    },
    target: {
      title: "反応する相手と、成約しやすい相手がズレている状態です",
      summary: [
        "問い合わせ数だけでは見えにくい、相手の質に関するサインです。",
        "反応する属性・相談内容・成約しやすさを分けて確認します。",
      ],
      hypothesis: [
        "問い合わせはある一方で、ターゲット設計や訴求対象が広く、商談化しにくい層まで集めている可能性があります。",
      ],
      states: ["商談化しにくい", "単価感が合わない", "反応層が狙いと違う"],
      checks: ["反応する属性", "問い合わせ内容の質", "訴求の広さ"],
      validation: [
        "広告で反応層を確認し、狙うべき相手・避けたい相手・伝え方のズレを整理します。",
      ],
    },
    trust: {
      title: "比較検討で止まりやすく、安心材料が不足している状態です",
      summary: [
        "比較段階で、選び切るための安心材料が足りていないサインです。",
        "初見の相手が不安を残さず相談まで進めるかを確認します。",
      ],
      hypothesis: [
        "実績・事例・会社感が弱いと、「良さそう」までは進んでも、問い合わせ前に不安が残る可能性があります。",
      ],
      states: [
        "初見で安心しにくい",
        "比較材料が少ない",
        "問い合わせ前の不安が残る",
      ],
      checks: [
        "実績追加による反応差",
        "会社情報の見られ方",
        "不安解消コンテンツの不足",
      ],
      validation: [
        "広告流入後の行動を見て、実績・事例・会社情報のどこが相談前の壁になっているかを確認します。",
      ],
    },
    cycle: {
      title: "数字で優先順位を決めにくく、改善が点で止まっている状態です",
      summary: [
        "施策は動いていても、次にどこを直すべきかが見えにくいサインです。",
        "感覚ではなく、反応差をもとに改善の順番を整理する必要があります。",
      ],
      hypothesis: [
        "集客・導線・訴求のどこで止まっているかが曖昧なまま、改善が単発で終わっている可能性があります。",
      ],
      states: [
        "施策が点で終わりやすい",
        "判断が感覚に寄りやすい",
        "改善優先度が決めにくい",
      ],
      checks: [
        "流入から相談までの差",
        "広告文ごとの反応差",
        "判断に使う数字の整理",
      ],
      validation: [
        "広告検証を通じて反応を見る条件を揃え、次に直すべき箇所の優先順位を整理します。",
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
    renderParagraphs("result-current", result.hypothesis);
    renderList("result-problems", result.states);
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
