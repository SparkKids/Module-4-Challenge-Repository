let secondsRemaining = 75;
let timerP = document.getElementById("timer")
let correctText = document.getElementById("correct-text");
let incorrectText = document.getElementById("incorrect-text");

var qCtr = 0
var acceptingAnswers = false
var penaltyCount = 0;
const QUESTION_COUNT = 5;
const HIDDEN_CLASS = "hidden"
const CORRECT_CLASS = "correct";
const INCORRECT_CLASS = "incorrect";
const INCORRECT_PENALTY = 10;
startQuiz();
// function loadQuestion() {
// populates the questions object with the question, 4 answers and the correct answer
function loadQuestions() {
    questions = [{
        q: "When the switch statement matches the expression with the given labels, how is the comparison done?",
        ans1: "Both the datatype and the result of the expression are compared.",
        ans2: "Only the datatype of the expression is compared.",
        ans3: "Only the value of the expression is compared.",
        ans4: "None of the above.", correct: 0,
    },
    {
        q: "What keyword is used to declare an asynchronous function in Javascript?",
        ans1: "asynch",
        ans2: "await",
        ans3: "setTimeout",
        ans4: "None of the above.",
        correct: 0,
    },
    {
        q: "What does the … operator do in JS?",
        ans1: "It is used to describe a datatype of undefined size.",
        ans2: "It is used to spread iterables to individual elements.",
        ans3: "No such operator exists.",
        ans4: "None of the above.",
        correct: 1,
    },
    {
        q: "How do we write a comment in javascript?",
        ans1: "/**/",
        ans2: "//",
        ans3: "#",
        ans4: "$$",
        correct: 1,
    },
    {
        q: "Which of the following is NOT a primitive datatype in javascript?",
        ans1: "Boolean",
        ans2: "Undefined",
        ans3: "Imaginary#",
        ans4: "Number",
        correct: 2,
    },

    ];
    return questions;
}//function loadQuestions()

function displayQuestion(question, h3El, liEls) {
    if (qCtr == QUESTION_COUNT) {
        localStorage.setItem('mostRecentScore', secondsRemaining);
        return window.location.assign('./saveScore.html');
    }
    h3El.innerText = question.q;
    liEls[0].innerText = "1. " + question.ans1;
    liEls[0].dataset.indexNumber = 0;
    liEls[0].dataset.isCorrect = liEls[0].dataset.indexNumber == question.correct;
    liEls[1].innerText = "2. " + question.ans2;
    liEls[1].dataset.indexNumber = 1;
    liEls[1].dataset.isCorrect = liEls[1].dataset.indexNumber == question.correct;
    liEls[2].innerText = "3. " + question.ans3;
    liEls[2].dataset.indexNumber = 2;
    liEls[2].dataset.isCorrect = liEls[2].dataset.indexNumber == question.correct;
    liEls[3].innerText = "4. " + question.ans4;
    liEls[3].dataset.indexNumber = 3;
    liEls[3].dataset.isCorrect = liEls[3].dataset.indexNumber == question.correct;
    acceptingAnswers = true;
}//function displayQuestion(question, h3El, liEls)

function addChoicesListeners() {
    const choices = Array.from(document.getElementsByClassName('choice-text'));

    choices.forEach((choice) => {
        var answerClass;
        choice.addEventListener('click', (e) => {
            if (!acceptingAnswers) return;

            acceptingAnswers = false;
            const selectedChoice = e.target;
            const selectedAnswer = selectedChoice.dataset.indexNumber;
            if (selectedChoice.dataset.isCorrect == "true") {
                answerClass = CORRECT_CLASS;
                incorrectText.classList.add(HIDDEN_CLASS);
                correctText.classList.remove(HIDDEN_CLASS);
            } else {
                answerClass = INCORRECT_CLASS;
                correctText.classList.add(HIDDEN_CLASS);
                incorrectText.classList.remove(HIDDEN_CLASS);
                secondsRemaining = secondsRemaining - INCORRECT_PENALTY;
                timerP.innerText = "Time: " + secondsRemaining;
            }
            selectedChoice.classList.add(answerClass);

            setTimeout(() => {
                selectedChoice.classList.remove(answerClass);
                qCtr++;
                if (qCtr == QUESTION_COUNT) {
                    localStorage.setItem('mostRecentScore', secondsRemaining);
                    return window.location.assign('./saveScore.html');

                }
                displayQuestion(questions[qCtr], document.querySelector("h3"), document.querySelectorAll("li"));
            }, 1000);
        });
    });
}//function addChoicesListeners()
function updateCountdown() {
    secondsRemaining--;
    timerP.innerText = "Time: " + secondsRemaining;
    if (secondsRemaining == 0) {
        localStorage.setItem('mostRecentScore', secondsRemaining);
        return window.location.assign('./saveScore.html');
    }

}
function startQuiz() {
    var questions = loadQuestions();
    setInterval(updateCountdown, 1000);
    displayQuestion(questions[qCtr], document.querySelector("h3"), document.querySelectorAll("li"));
    addChoicesListeners();
}

