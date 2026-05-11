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
        { label: "安定している", scores: {} },
        { label: "波がある", scores: { traffic: 2, cycle: 1 } },
        { label: "少ない", scores: { traffic: 3 } },
        { label: "把握できていない", scores: { traffic: 2, cycle: 2 } },
      ],
    },
    {
      tag: "Q2 / 導線",
      title: "スマホで見た時、問い合わせや購入まで迷わず進めますか？",
      tempo: "early",
      answers: [
        { label: "迷わず進める", scores: {} },
        { label: "一部迷う箇所がある", scores: { flow: 2 } },
        { label: "かなり分かりにくい", scores: { flow: 3 } },
        { label: "確認できていない", scores: { flow: 2, cycle: 1 } },
      ],
    },
    {
      tag: "Q3 / 訴求",
      title: "サービスの強みは一言で伝わりますか？",
      tempo: "middle",
      answers: [
        { label: "明確に伝わる", scores: {} },
        { label: "なんとなく伝わる", scores: { message: 2 } },
        { label: "伝わりにくい", scores: { message: 3 } },
        {
          label: "写真・実績・事例が不足している",
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
        { label: "少しハードルがある", scores: { offer: 2 } },
        { label: "重く見えていると思う", scores: { offer: 3 } },
        { label: "判断材料が不足している", scores: { offer: 2, trust: 1 } },
      ],
    },
    {
      tag: "Q5 / ターゲット",
      title: "問い合わせる人と、成約しやすい相手は一致していますか？",
      tempo: "middle",
      answers: [
        { label: "おおむね一致している", scores: {} },
        { label: "少しズレがある", scores: { target: 2 } },
        {
          label: "問い合わせはあるが成約しにくい",
          scores: { target: 3, flow: 1 },
        },
        { label: "よく分からない", scores: { target: 2, cycle: 1 } },
      ],
    },
    {
      tag: "Q6 / 信頼",
      title: "初見で安心できる実績や会社感は伝わっていますか？",
      tempo: "middle",
      answers: [
        { label: "十分に伝わっている", scores: {} },
        { label: "最低限はある", scores: { trust: 1 } },
        { label: "不足している", scores: { trust: 3 } },
        { label: "比較されると弱い", scores: { trust: 2, message: 1 } },
      ],
    },
    {
      tag: "Q7 / 改善",
      title: "数字を見ながら改善判断できていますか？",
      tempo: "final",
      answers: [
        { label: "できている", scores: {} },
        { label: "一部だけ見ている", scores: { cycle: 2 } },
        { label: "感覚に頼っている", scores: { cycle: 3 } },
        { label: "広告やSNSを止めたまま", scores: { cycle: 2, traffic: 1 } },
      ],
    },
  ];

  const results = {
    traffic: {
      title: "見込み客との接点不足が考えられます",
      summary: [
        "現状、商品や導線そのものよりも、まず見込み客に届く接点量が不足している可能性があります。",
        "広告検証によって、接点を増やした時に反応が出るかを確認できます。",
      ],
      hypothesis: [
        "広告配信後に流入や問い合わせが増える場合、主なボトルネックは接点不足だった可能性があります。",
      ],
      states: [
        "商品やサービス自体は悪くない可能性がある",
        "ただし、比較検討に入る前の接点が不足している",
        "広告配信で反応の有無を確認する余地がある",
      ],
      checks: [
        "広告配信後に流入や問い合わせが増えるか",
        "流入後にLPや問い合わせ導線で離脱していないか",
        "反応する層が想定ターゲットと合っているか",
      ],
      validation: [
        "1ヶ月の広告配信を通じて、売上が伸びない理由が集客不足なのか、導線や訴求の問題なのかを整理できます。",
      ],
    },
    flow: {
      title: "問い合わせ導線に離脱要因がありそうです",
      summary: [
        "現状、クリックや閲覧はあっても、問い合わせ・購入までの導線で離脱している可能性があります。",
        "広告検証では、流入後の行動を見ることで導線上の詰まりを確認できます。",
      ],
      hypothesis: [
        "クリックはされているのに問い合わせにつながらない場合、ページ構成・CTA・スマホUI・情報整理がボトルネックになっている可能性があります。",
      ],
      states: [
        "ページを見ても次に何をすべきか分かりにくい",
        "CTAやフォームまでの流れに迷いがある",
        "スマホ閲覧時の情報整理に改善余地がある",
      ],
      checks: [
        "広告流入後の離脱がどこで起きているか",
        "CTAやフォームのクリックが発生しているか",
        "スマホで迷わず行動できる構成になっているか",
      ],
      validation: [
        "1ヶ月の広告配信で流入を作り、どの段階で離脱しているかを見ることで、導線改善の優先度を整理できます。",
      ],
    },
    message: {
      title: "訴求の伝わり方に改善余地があります",
      summary: [
        "現状、商品の価値や強みが十分に伝わる前に離脱されている可能性があります。",
        "広告検証では、どの訴求に反応が出るかを比較しながら確認できます。",
      ],
      hypothesis: [
        "商品自体に価値があっても、写真・実績・ベネフィット・比較優位が不足していると、検討前に離脱される可能性があります。",
      ],
      states: [
        "強みが一言で伝わりにくい",
        "写真・事例・実績などの判断材料が不足している",
        "競合と比較した時の選ばれる理由が弱い",
      ],
      checks: [
        "広告文ごとの反応差が出るか",
        "LP上のファーストビューで価値が伝わっているか",
        "ベネフィットや実績が問い合わせ前の不安を減らしているか",
      ],
      validation: [
        "広告配信で複数の訴求を試すことで、どの伝え方が見込み客に届きやすいかを整理できます。",
      ],
    },
    offer: {
      title: "オファー条件が検討を重くしている可能性があります",
      summary: [
        "現状、興味は持たれていても、価格・条件・初回導線の重さが購入判断を妨げている可能性があります。",
        "広告検証では、興味から相談まで進むかを見ながらオファーの重さを確認できます。",
      ],
      hypothesis: [
        "価格の納得感、初回相談のハードル、購入条件などが原因で『今はいいかな』と判断されている可能性があります。",
      ],
      states: [
        "興味は持たれているが行動につながりにくい",
        "価格や条件の納得材料が不足している",
        "初回相談や購入までの心理的ハードルが高い",
      ],
      checks: [
        "広告流入後にCTAクリックが発生しているか",
        "価格や条件の説明で離脱が起きていないか",
        "初回相談の見せ方を軽くした時に反応が変わるか",
      ],
      validation: [
        "広告配信を通じて、関心はあるのに行動が止まるのか、そもそも関心が弱いのかを切り分けられます。",
      ],
    },
    target: {
      title: "届ける相手にズレがある可能性があります",
      summary: [
        "現状、広告や訴求が本来届けるべき相手に届いていない可能性があります。",
        "広告検証では、反応する層と成約しやすい層が一致しているかを確認できます。",
      ],
      hypothesis: [
        "問い合わせはあるが成約しない、単価感が合わない場合、ターゲット設計や訴求対象がズレている可能性があります。",
      ],
      states: [
        "問い合わせはあるが商談化・成約しにくい",
        "反応する客層と本来狙いたい客層が違う",
        "単価感や課題感が合わない問い合わせが発生している",
      ],
      checks: [
        "広告配信で反応する属性が想定と合っているか",
        "問い合わせ内容が成約しやすい条件と合っているか",
        "訴求が広すぎてミスマッチを生んでいないか",
      ],
      validation: [
        "1ヶ月の広告配信で反応する層を確認し、ターゲット設計と訴求対象のズレを整理できます。",
      ],
    },
    trust: {
      title: "信頼材料の不足が影響している可能性があります",
      summary: [
        "現状、比較検討段階で選ばれるための信頼材料が不足している可能性があります。",
        "広告検証では、初見ユーザーが安心して問い合わせまで進めるかを確認できます。",
      ],
      hypothesis: [
        "実績、会社感、事例、写真、プロフィールなどが不足していると、『良さそうだけど問い合わせるほどではない』と判断される可能性があります。",
      ],
      states: [
        "初見で安心できる会社感が伝わりにくい",
        "実績や事例が比較検討の材料として不足している",
        "問い合わせ前の不安を減らす情報が少ない",
      ],
      checks: [
        "実績・事例を見せた時に反応が変わるか",
        "プロフィールや会社情報が不安解消に機能しているか",
        "問い合わせ前に必要な判断材料が揃っているか",
      ],
      validation: [
        "広告流入後の行動を見ることで、信頼材料の不足が離脱要因になっているかを整理できます。",
      ],
    },
    cycle: {
      title: "改善判断が感覚頼りになっている可能性があります",
      summary: [
        "現状、広告やSNS、導線改善の判断が数字ではなく感覚頼りになっている可能性があります。",
        "広告検証では、どこを直すべきかを数値で確認するための土台を作れます。",
      ],
      hypothesis: [
        "施策を動かしていても、数字を見た改善ができていない場合、どこを直すべきか分からない状態になっている可能性があります。",
      ],
      states: [
        "改善施策が単発で終わりやすい",
        "成果判断が感覚的になっている",
        "広告・導線・訴求のどこが課題か分かりにくい",
      ],
      checks: [
        "流入・クリック・問い合わせのどこで差が出るか",
        "広告文やLP変更による反応差を確認できているか",
        "改善判断に使う数字が整理されているか",
      ],
      validation: [
        "1ヶ月の広告配信を通じて、集客・導線・訴求のどこに改善余地があるかを数値ベースで整理できます。",
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
