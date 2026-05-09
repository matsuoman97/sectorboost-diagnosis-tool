function initDiagnosis() {
  const questions = [
    {
      tag: "集客",
      title: "現在、安定して新規の問い合わせを獲得できていますか？",
      answers: [
        {
          label: "安定して獲得できている",
          hint: "月ごとの波は小さい",
          type: "conversion",
          score: 0,
        },
        {
          label: "月によって大きく変動する",
          hint: "良い月と悪い月の差が大きい",
          type: "acquisition",
          score: 2,
        },
        {
          label: "問い合わせ自体が少ない",
          hint: "まず見込み客との接点が不足している",
          type: "acquisition",
          score: 3,
        },
      ],
    },
    {
      tag: "訴求",
      title: "自社の強みや選ばれる理由は、Web上で明確に伝わっていますか？",
      answers: [
        {
          label: "明確に伝えられている",
          hint: "顧客からも理解されている",
          type: "conversion",
          score: 0,
        },
        {
          label: "ある程度は伝えている",
          hint: "競合との差別化はまだ弱い",
          type: "offer",
          score: 2,
        },
        {
          label: "言語化できていない",
          hint: "何を訴求すべきか整理できていない",
          type: "offer",
          score: 3,
        },
      ],
    },
    {
      tag: "導線",
      title: "WebサイトやLPから相談・申込までの導線は整っていますか？",
      answers: [
        {
          label: "迷わず行動できる導線がある",
          hint: "CTAやフォームが分かりやすい",
          type: "followup",
          score: 0,
        },
        {
          label: "導線はあるが改善余地がある",
          hint: "離脱ポイントがありそう",
          type: "conversion",
          score: 2,
        },
        {
          label: "導線設計ができていない",
          hint: "次に何をすればよいか伝わりにくい",
          type: "conversion",
          score: 3,
        },
      ],
    },
    {
      tag: "営業",
      title: "問い合わせ後の追客や商談化の流れは仕組み化されていますか？",
      answers: [
        {
          label: "仕組み化されている",
          hint: "対応品質が安定している",
          type: "acquisition",
          score: 0,
        },
        {
          label: "担当者ごとに対応が異なる",
          hint: "属人的な運用になっている",
          type: "followup",
          score: 2,
        },
        {
          label: "ほとんど仕組み化できていない",
          hint: "機会損失が起きている可能性が高い",
          type: "followup",
          score: 3,
        },
      ],
    },
    {
      tag: "改善",
      title: "広告・サイト・営業の改善状況を数字で確認できていますか？",
      answers: [
        {
          label: "主要な数字を確認している",
          hint: "改善判断に使えている",
          type: "offer",
          score: 0,
        },
        {
          label: "一部だけ確認している",
          hint: "次の打ち手が曖昧になりやすい",
          type: "conversion",
          score: 2,
        },
        {
          label: "数字で把握できていない",
          hint: "感覚的な改善に留まっている",
          type: "conversion",
          score: 3,
        },
      ],
    },
  ];

  const results = {
    balanced: {
      title: "基本導線は整備済み・次の成長設計タイプ",
      summary:
        "大きなボトルネックは少なく、次はより再現性の高い成長導線へ磨き込む段階です。",
      issue:
        "現状は一定の基盤がありますが、集客・訴求・導線・追客のどこを伸ばすと成果が大きいかを明確にする余地があります。",
      direction:
        "主要な数字を定点観測し、伸びしろの大きい施策から優先順位を付けて改善を重ねましょう。",
      support:
        "SectorBoostでは、現状分析、改善優先度の整理、広告・LP・営業導線の継続改善を支援できます。",
    },
    acquisition: {
      title: "見込み客との接点不足タイプ",
      summary:
        "売上が伸びにくい主因は、必要な数の見込み客に継続して接触できていないことにあります。",
      issue:
        "広告・SEO・紹介導線などの入口が限定的で、問い合わせ数が安定しにくい状態です。",
      direction:
        "ターゲットを絞り、最初に接点を作るチャネルと訴求を整理して、継続的に流入を生む設計へ見直しましょう。",
      support:
        "SectorBoostでは、集客チャネルの整理、広告導線の設計、LP改善まで一体で支援できます。",
    },
    offer: {
      title: "選ばれる理由の言語化不足タイプ",
      summary:
        "サービスの魅力はあるものの、顧客が比較検討する場面で強みが伝わり切っていない可能性があります。",
      issue:
        "競合との差別化、導入メリット、実績の見せ方が曖昧で、相談前に離脱されやすい状態です。",
      direction:
        "顧客課題・提供価値・導入後の変化を整理し、Web上のコピーや構成へ反映することが重要です。",
      support:
        "SectorBoostでは、訴求整理、ファーストビュー改善、導入事例やCTA設計を支援できます。",
    },
    conversion: {
      title: "申込導線・改善サイクル未整備タイプ",
      summary:
        "興味を持った見込み客を相談・申込へ進める導線と、数字に基づく改善が不足している可能性があります。",
      issue:
        "CTA、フォーム、ページ構成、計測指標が分断され、どこを改善すべきか判断しにくい状態です。",
      direction:
        "ユーザーが迷わず次の行動へ進める導線を作り、表示数・クリック数・CV数を見ながら改善しましょう。",
      support:
        "SectorBoostでは、LP構成改善、CTA最適化、計測設計、改善レポート作成まで伴走できます。",
    },
    followup: {
      title: "追客・商談化の仕組み不足タイプ",
      summary:
        "問い合わせ後の対応品質や追客フローが属人的になり、受注機会を逃している可能性があります。",
      issue:
        "返信速度、ヒアリング項目、次回提案、フォロー連絡が標準化されていない状態です。",
      direction:
        "問い合わせ後の初動、商談前後の情報整理、フォロータイミングをテンプレート化しましょう。",
      support:
        "SectorBoostでは、問い合わせ後の導線設計、営業資料改善、追客フローの整備を支援できます。",
    },
  };

  const state = {
    currentQuestion: 0,
    totalScore: 0,
    scores: {
      acquisition: 0,
      offer: 0,
      conversion: 0,
      followup: 0,
    },
  };

  const questionScreen = document.getElementById("question-screen");
  const resultScreen = document.getElementById("result-screen");
  const progressLabel = document.getElementById("progress-label");
  const progressPercent = document.getElementById("progress-percent");
  const progressBar = document.getElementById("progress-bar");
  const questionTag = document.getElementById("question-tag");
  const questionTitle = document.getElementById("question-title");
  const answersContainer = document.getElementById("answers");
  const restartButton = document.getElementById("restart-button");

  function renderQuestion() {
    const question = questions[state.currentQuestion];
    const progressValue = Math.round(
      (state.currentQuestion / questions.length) * 100,
    );

    progressLabel.textContent = `質問 ${state.currentQuestion + 1} / ${questions.length}`;
    progressPercent.textContent = `${progressValue}%`;
    progressBar.style.width = `${progressValue}%`;
    questionTag.textContent = question.tag;
    questionTitle.textContent = question.title;
    answersContainer.innerHTML = "";

    question.answers.forEach((answer) => {
      const button = document.createElement("button");
      button.className = "answer-button";
      button.type = "button";
      const label = document.createElement("span");
      label.className = "answer-button__label";
      label.textContent = answer.label;

      const hint = document.createElement("span");
      hint.className = "answer-button__hint";
      hint.textContent = answer.hint;

      button.append(label, hint);
      button.addEventListener("click", () => handleAnswer(answer));
      answersContainer.appendChild(button);
    });
  }

  function handleAnswer(answer) {
    state.scores[answer.type] += answer.score;
    state.totalScore += answer.score;
    state.currentQuestion += 1;

    if (state.currentQuestion >= questions.length) {
      showResult();
      return;
    }

    renderQuestion();
  }

  function getPrimaryResultType() {
    if (state.totalScore <= 2) {
      return "balanced";
    }

    return Object.entries(state.scores).sort((a, b) => b[1] - a[1])[0][0];
  }

  function showResult() {
    const result = results[getPrimaryResultType()];

    progressLabel.textContent = "診断完了";
    progressPercent.textContent = "100%";
    progressBar.style.width = "100%";

    document.getElementById("result-title").textContent = result.title;
    document.getElementById("result-summary").textContent = result.summary;
    document.getElementById("result-issue").textContent = result.issue;
    document.getElementById("result-direction").textContent = result.direction;
    document.getElementById("result-support").textContent = result.support;

    questionScreen.classList.remove("screen--active");
    resultScreen.classList.add("screen--active");
  }

  function restartDiagnosis() {
    state.currentQuestion = 0;
    state.totalScore = 0;
    Object.keys(state.scores).forEach((key) => {
      state.scores[key] = 0;
    });

    resultScreen.classList.remove("screen--active");
    questionScreen.classList.add("screen--active");
    renderQuestion();
  }

  restartButton.addEventListener("click", restartDiagnosis);
  renderQuestion();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initDiagnosis);
} else {
  initDiagnosis();
}
