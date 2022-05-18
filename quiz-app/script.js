const quizData = [
  {
    question: "Entomology is the science that studies",
    a: "Behavior of human beings",
    b: "Insects",
    c: "The origin and history of technical and scientific terms",
    d: "The formation of rocks",
    correct: "b",
  },
  {
    question: "Hitler party which came into power in 1933 is known as",
    a: "Labour Party",
    b: "Ku-Klux-Klan",
    c: "Nazi Party",
    d: "Democratic Party",
    correct: "c",
  },
  {
    question: "Galileo was an Italian astronomer who",
    a: "developed the telescope",
    b: "discovered that the movement of pendulum produces a regular time measurement",
    c: "discovered four satellites of Jupiter",
    d: "All of the above",
    correct: "d",
  },
  {
    question:
      "For safety, the fuse wire used in the mains for household supply of electricity must be made of metal having",
    a: "low melting point",
    b: "high resistance",
    c: "high melting point",
    d: "low specific heat",
    correct: "a",
  },
  {
    question: "Golden Temple, Amritsar is India's",
    a: "largest gurudwara",
    b: "oldest gurudwara",
    c: "both A & B",
    d: "none of the above",
    correct: "a",
  },
];
const answerEls = document.querySelectorAll(".answer");
const quiz = document.getElementById("quiz");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
  deselectAnswers();
  const currentQuizData = quizData[currentQuiz]; //quizData[currentQuiz]
  questionEl.innerText = currentQuizData.question;

  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}
function getSelected() {
  let answer = undefined;

  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });
  return answer;
}

function deselectAnswers() {
  answerEls.forEach((answerEl) => {
    answerEl.checked = false;
  });
}

submitBtn.addEventListener("click", () => {
  // Check to see the answer
  const answer = getSelected();

  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      score++;
    }

    currentQuiz++;
    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      quiz.innerHTML = `<h2>Your score is: ${score}/${quizData.length}</h2> <button onClick="location.reload()"> Retry </button>`;
    }
  }
});
