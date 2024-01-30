document.addEventListener('DOMContentLoaded', () => {
    const startButton = document.getElementById('start-btn');
    const introPage = document.querySelector('.intro-page');
    const quizApp = document.querySelector('.app');
  
    // Initially hide the quiz content
    quizApp.classList.add('hide');
  
    // Event listener for the Start Quiz button
    startButton.addEventListener('click', () => {
      introPage.classList.add('hide'); // Hide intro page
      quizApp.classList.remove('hide'); // Show quiz content
      startQuiz();
    });
const questions = [
    {
      question: "Which is the largest animal in the world ?",
      answer: [
        { text: "Shark", correct: "false" },
        { text: "Blue Whale", correct: "true" },
        { text: "Elephant", correct: "false" },
        { text: "Giraffe", correct: "false" },
      ],
    },
    {
      question: "Which is the smallest country in the world ?",
  
      answer: [
        { text: "Monaco", correct: "false" },
        { text: "Tuvalu", correct: "false" },
        { text: "Vatican City", correct: "true" },
        { text: "Iceland", correct: "false" },
      ],
    },
    {
      question: "What is the largest desert in the world ?",
  
      answer: [
        { text: "Chara Sands", correct: "false" },
        { text: "Greenland", correct: "false" },
        { text: "Sahara", correct: "false" },
        { text: "Antarctica", correct: "true" },
      ],
    },
    {
      question: "What is the value of 0! (! stands for factorial) ?",
  
      answer: [
        { text: "0", correct: "false" },
        { text: "1", correct: "true" },
        { text: "-1", correct: "false" },
        { text: "Not Defined", correct: "false" },
      ],
    },
    {
      question: "When was SFU founded?",
  
      answer: [
        { text: "1965", correct: "true" },
        { text: "1968", correct: "false" },
        { text: "1975", correct: "false" },
        { text: "1978", correct: "false" },
      ],
    },
  ];
  const questionElement = document.getElementById("questions");
  const answerButton = document.getElementById("answer-Buttons");
  const nextButton = document.getElementById("next-btn");
  
  var currentQuestionIndex = 0;
  var score = 0;
  let button;
  function startQuiz() {
    currentQuestionIndex = 0;
  
    score = 0;
    nextButton.innerHTML = "Next";
    resetState();
    showQuestion();
  }
  function showQuestion() {
    let currentQuestion = questions[currentQuestionIndex];
    console.log(currentQuestion, "currentQuestion");
  
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + "." + currentQuestion.question;
  
    currentQuestion.answer.forEach((answer) => {
      button = document.createElement("button");
      button.innerHTML = answer.text;
      button.classList.add("btn");
      answerButton.appendChild(button);
      if (answer.correct) {
        button.correct = answer.correct;
        console.log(button.dataset.correct, "81");
  
        console.log(answer.correct, "83");
      }
      button.addEventListener("click", selectAnswer);
    });
  }
  function resetState() {
    nextButton.style.display = "none";
    while (answerButton.firstChild) {
      answerButton.removeChild(answerButton.firstChild);
    }
  }
  function selectAnswer(e) {
    console.log(e.target, "96");
    const selectBtn = e.target;
  
    const isCorrect = selectBtn.correct === "true";
    if (isCorrect) {
      selectBtn.classList.add("correct");
      score++;
    } else {
      selectBtn.classList.add("incorrect");
    }
    Array.from(answerButton.children).forEach((button) => {
      if (button.correct === "true") {
        button.classList.add("correct");
      }
      //button.disabled = true;
    });
    nextButton.style.display = "block";
  }
  function showScore() {
    resetState();
    questionElement.innerHTML =
      "You scored " + score + " out of " + questions.length + ", " +(score/5)*100 + "%";;
      
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
  }
  function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
      showQuestion();
    } else {
      showScore();
    }
  }
  nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {
      Array.from(answerButton.children).forEach((button) => {
        button.classList.add("hide");
      });
      handleNextButton();
    } else {
      startQuiz();
    }
  });
  
  startQuiz();

}); 