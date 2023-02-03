"use strict";

{
  const quizSet = [
    {
      q: "日本のIT人材が2030年には最大どれくらい不足すると言われているでしょうか？",
      o: ["約28万人", "約79万人", "約11倍"],
      h: "../img/quiz/img-quiz01.png",
      d: "経済産業省 2019年3月 － IT 人材需給に関する調査",
      dsrc: "https://www.meti.go.jp/policy/it_policy/jinzai/houkokusyo.pdf",
    },
    {
      q: "既存業界のビジネスと、先進的なテクノロジーを結びつけて生まれた、新しいビジネスのことをなんと言うでしょう？",
      o: ["X-TECH", "INTECH", "BIZZTECH"],
      h: "../img/quiz/img-quiz02.png",
      d: "",
      dsrc: "",
    },
    {
      q: "IoTとは何の略でしょう？",
      o: [
        "Internet of Things",
        "Integrate into Technology",
        "Information  on Tool",
      ],
      h: "../img/quiz/img-quiz03.png",
      d: "",
      dsrc: "",
    },
    {
      q: "日本が目指すサイバー空間とフィジカル空間を高度に融合させたシステムによって開かれる未来社会のことをなんと言うでしょうか？",
      o: ["Society 5.0", "CyPhy", "SDGs"],
      h: "../img/quiz/img-quiz04.png",
      d: "Society5.0 - 科学技術政策 - 内閣府",
      dsrc: "https://www8.cao.go.jp/cstp/society5_0/",
    },
    {
      q: " イギリスのコンピューター科学者であるギャビン・ウッド氏が提唱した、ブロックチェーン技術を活用した「次世代分散型インターネット」のことをなんと言うでしょう？",
      o: ["Web3.0", "NFT", "メタバース"],
      h: "../img/quiz/img-quiz05.png",
      d: "",
      dsrc: "",
    },
    {
      q: "先進テクノロジー活用企業と出遅れた企業の収益性の差はどれくらいあると言われているでしょうか？",
      o: ["約5倍", "約2倍", "約11倍"],
      h: "../img/quiz/img-quiz06.png",
      d: "Accenture Technology Vision 2021 ",
      dsrc: "https://www.accenture.com/jp-ja/insights/technology/technology-trends-2022",
    },
    {
      q: "法律とITが組み合わさった新たな仕事の領域をなんというか",
      o: ["リーガルテック", "ローテック", "アイティーリーガル"],
      h: "https://wealthroad.jp/wp-content/uploads/2019/09/11shutterstock_1079923613.jpg",
      d: "法律×IT「リーガルテック」で何がどう変わりつつあるのか？",
      dsrc: "https://wealthroad.jp/archives/157",
    },
  ];

  function shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[j], arr[i]] = [arr[i], arr[j]];
    }
    return arr;
  } //シャッフル

  const shuffledQuizset = shuffle(quizSet); //quizSetをシャッフル

  const showTrue = document.getElementsByClassName("p_quiz_answer_t");
  const showFalse = document.getElementsByClassName("p_quiz_answer_f");
  const optBox = document.getElementsByClassName("p_quiz_optbox");
  // let isAnswered;

  for (let currentNum = 0; currentNum < quizSet.length; currentNum++) {
    createQuiz(currentNum);
    // checkAnswer(currentNum);
  }

  function createQuiz(currentNum) {
    const createSection = document.createElement("section");
    document.getElementById("p_article").before(createSection);
    createSection.classList.add("quiz_frame", "js-quiz"); 
    createSection.dataset.quiz = currentNum;

    //sectionを生成

    const Section = document.getElementsByClassName("quiz_frame");

    const createQuestion = document.createElement("div");
    Section[currentNum].appendChild(createQuestion);
    createQuestion.classList.add("p_quiz_q"); //設問の大枠を生成

    const makeQuiz = document.getElementsByClassName("p_quiz_q");

    const createQnum = document.createElement("div");
    createQnum.textContent = `Q${currentNum + 1}`;
    makeQuiz[currentNum].appendChild(createQnum);
    createQnum.classList.add("p_quiz_qnum"); //設問ナンバーを生成

    const createQuiztxt = document.createElement("span");
    createQuiztxt.textContent = shuffledQuizset[currentNum].q;
    makeQuiz[currentNum].appendChild(createQuiztxt);
    createQuiztxt.classList.add("p_quiz_qtxt"); //設問を生成

    const createImg = document.createElement("img");
    createImg.src = shuffledQuizset[currentNum].h;
    makeQuiz[currentNum].appendChild(createImg);
    createImg.classList.add("p_quiz_qimg"); //設問の画像を生成

    const createQuizbox = document.createElement("div");
    Section[currentNum].appendChild(createQuizbox);
    createQuizbox.classList.add("p_quiz_box"); //選択肢の大枠生成

    const quizBox = document.getElementsByClassName("p_quiz_box");
    const createAnsweralphabet = document.createElement("div");
    quizBox[currentNum].appendChild(createAnsweralphabet);
    createAnsweralphabet.textContent = "A";
    createAnsweralphabet.classList.add("p_quiz_a"); //アンサーのアルファベット生成

    const createOptbox = document.createElement("ul");
    quizBox[currentNum].appendChild(createOptbox);
    createOptbox.classList.add("p_quiz_optbox"); //選択肢の箱生成

    const shuffledChoices = shuffle([...shuffledQuizset[currentNum].o]);
    shuffledChoices.forEach( option => {
      const createOption = document.createElement("li");
      // createOption.textContent = option;
      createOption.innerHTML = `<button class="p_quiz_option p_quiz_option_disappear js-answer">${option}</button>`
      optBox[currentNum].appendChild(createOption);
      // createOption.classList.add("p_quiz_option", "p_quiz_option_disappear");
      createOption.classList.add('p_quiz_option_item')
    }); //選択肢生成

    const createTruebox = document.createElement("div");
    quizBox[currentNum].appendChild(createTruebox);
    createTruebox.classList.add("p_quiz_answer_t", "js-correct");

    const creatFalsebox = document.createElement("div");
    quizBox[currentNum].appendChild(creatFalsebox);
    creatFalsebox.classList.add("p_quiz_answer_f", "js-false"); //正解不正解の生成

    const createTrue = document.createElement("h2");
    const createSpan01 = document.createElement("span");
    const createspan02 = document.createElement("span");
    const showTrue = document.getElementsByClassName("p_quiz_answer_t");
    createTrue.textContent = "正解！";
    createSpan01.textContent = "A";
    createspan02.textContent = `${shuffledQuizset[currentNum].o[0]}`;
    showTrue[currentNum].appendChild(createTrue);
    showTrue[currentNum].appendChild(createSpan01);
    showTrue[currentNum].appendChild(createspan02);
    createSpan01.classList.add("p_quiz_answer_txt_01");
    createspan02.classList.add("p_quiz_answer_txt_02");

    const createFalse = document.createElement("h2");
    const createSpan03 = document.createElement("span");
    const createSpan04 = document.createElement("span");
    const showFalse = document.getElementsByClassName("p_quiz_answer_f");
    createFalse.textContent = "不正解...";
    createSpan03.textContent = "A";
    createSpan04.textContent = `${shuffledQuizset[currentNum].o[0]}`;
    showFalse[currentNum].appendChild(createFalse);
    showFalse[currentNum].appendChild(createSpan03);
    showFalse[currentNum].appendChild(createSpan04);
    createSpan03.classList.add("p_quiz_answer_txt_01");
    createSpan04.classList.add("p_quiz_answer_txt_02"); //正解不正解の内容を生成

    if (shuffledQuizset[currentNum].d === "") {
      return;
    } else {
      const createDetail = document.createElement("a");
      quizBox[currentNum].appendChild(createDetail);
      createDetail.setAttribute("href", `${shuffledQuizset[currentNum].dsrc}`);
      createDetail.classList.add("p_quiz_art");

      const quizArt = document.getElementsByClassName("p_quiz_art");
      const createDetailtxt = document.createElement("p");
      createDetailtxt.textContent = shuffledQuizset[currentNum].d;

      for (let d = 0; d < quizArt.length; d++) {
        quizArt[d].appendChild(createDetailtxt);
        createDetailtxt.classList.add("p_quiz_art_txt");
      }
    }
  } //資料の生成

  // function checkAnswer(currentNum) {
  //   optBox[currentNum].addEventListener("click", e => {
  //     // if (optBox[currentNum].isAnswered === true) {
  //     //   return;
  //     // }

  //     if (e.target.textContent === quizSet[currentNum].o[0]) {
  //       showTrue[currentNum].classList.add("p_quiz_answer_t_show");
  //     } else {
  //       showFalse[currentNum].classList.add("p_quiz_answer_f_show");
  //     }

  //     if (e.target.nodeName === "LI") {
  //       const option =
  //         optBox[currentNum].getElementsByClassName("p_quiz_option");

  //       for (let listNum = 0; listNum < option.length; listNum++) {
  //         option[listNum].classList.remove("p_quiz_option_disappear");
  //       }
  //       e.target.classList.add("color");
  //       // optBox[currentNum].isAnswered = true;
  //     }
  //   });
  // } //ボタンを押した時の動き

  const setDisabled = (answers) => {
    answers.forEach((answer) => {
      answer.disabled = true;
    })
  }

  const removeArrow = (answers) => {
    answers.forEach( answer => {
      answer.classList.remove('p_quiz_option_disappear')
    })  
  }
  const allQuiz = document.querySelectorAll('.js-quiz');

  allQuiz.forEach(quiz => {
    const answers = quiz.querySelectorAll('.js-answer');
    const quizNum = Number(quiz.getAttribute('data-quiz'));
    const correctBox = quiz.querySelector('.js-correct');
    const falseBox = quiz.querySelector('.js-false');

    answers.forEach(answer => {
      answer.addEventListener('click', () => {
        answer.classList.add('is-selected');
        setDisabled(answers);
        removeArrow(answers);
        
        if(answer.textContent === quizSet[quizNum].o[0]) {
          correctBox.classList.add('block');
        } else {
          falseBox.classList.add('block')
        }
      })
    })
  })
}
