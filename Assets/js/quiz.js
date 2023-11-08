let secondsRemaining = 75;
var qCtr = 0
var acceptingAnswers = false
var penaltyCount = 0;
const QUESTION_COUNT = 4;
const CORRECT_CLASS = "correct";
const INCORRECT_CLASS = "incorrect";
const INCORRECT_PENALTY = 15;
startQuiz();
// function loadQuestion() {
// populates the questions object with the question, 4 answers and the correct answer
function loadQuestions() {
    console.log("function loadQuestions()");
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

    ];
    // console.log("Load Questions: " + questions)
    return questions;
}//function loadQuestions()

function displayQuestion(question, h3El, liEls) {
    console.log("function displayQuestion(question, h3El, liEls)");
    console.log("displayQuestion qCtr = " + qCtr + " QUESTION_COUNT = " + QUESTION_COUNT);
    if (qCtr == QUESTION_COUNT) {
        //localStorage.setItem('mostRecentScore', score);
        return window.location.assign('./end.html');
    }
    h3El.innerText = question.q; 
    // console.log(question.q);
    // console.log(question.ans1);
    // console.log(question.ans2);
    // console.log(question.ans3);
    // console.log(question.ans4);
    liEls[0].innerText = "1. " + question.ans1;
    liEls[0].dataset.indexNumber = 0;
    liEls[0].dataset.isCorrect = liEls[0].dataset.indexNumber == question.correct;
    // console.log("isCorrect[0] = " + liEls[0].dataset.isCorrect);
    liEls[1].innerText = "2. " + question.ans2;
    liEls[1].dataset.indexNumber = 1;
    liEls[1].dataset.isCorrect = liEls[1].dataset.indexNumber == question.correct;
    // console.log("isCorrect[1] = " + liEls[1].dataset.isCorrect);
    liEls[2].innerText = "3. " + question.ans3;
    liEls[2].dataset.indexNumber = 2;
    liEls[2].dataset.isCorrect = liEls[2].dataset.indexNumber == question.correct;
    // console.log("isCorrect[2] = " + liEls[2].dataset.isCorrect);
    liEls[3].innerText = "4. " + question.ans4;
    liEls[3].dataset.indexNumber = 3;
    liEls[3].dataset.isCorrect = liEls[3].dataset.indexNumber == question.correct;
    // console.log("isCorrect[3] = " + liEls[3].dataset.isCorrect);
    acceptingAnswers = true;
}//function displayQuestion(question, h3El, liEls)

function addChoicesListeners() {
    console.log("Begin function addChoicesListeners()");
    const choices = Array.from(document.getElementsByClassName('choice-text'));

    choices.forEach((choice) => {
        var answerClass;
        choice.addEventListener('click', (e) => {
            if (!acceptingAnswers) return;

            acceptingAnswers = false;
            const selectedChoice = e.target;
            const selectedAnswer = selectedChoice.dataset.indexNumber;
            // console.log("Selected answer = " + selectedAnswer);
            // console.log("Correct Answer? " + selectedChoice.dataset.isCorrect);
            // console.log("Selected Choice class list " + selectedChoice.classList);
            if (selectedChoice.dataset.isCorrect == "true") {
                answerClass = CORRECT_CLASS;
            } else {
                answerClass = INCORRECT_CLASS;
                secondsRemaining = secondsRemaining - INCORRECT_PENALTY;
            }
            selectedChoice.classList.add(answerClass);

            setTimeout(() => {
                selectedChoice.classList.remove(answerClass);
                console.log("setTimeout qCtr = " + qCtr);
                qCtr++;
                console.log("setTimeout before displayQuestion qCtr = " + qCtr);
                displayQuestion(questions[qCtr], document.querySelector("h3"), document.querySelectorAll("li"));
            }, 1000);
        });
    });
}//function addChoicesListeners()
function updateCountdown(){
    secondsRemaining--;
    console.log("secondsRemaining = " + secondsRemaining);
    if (secondsRemaining == 0) {
        return window.location.assign('./end.html');
    }

}
function startQuiz(){
var questions = loadQuestions();
setInterval(updateCountdown, 1000);
displayQuestion(questions[qCtr], document.querySelector("h3"), document.querySelectorAll("li"));
addChoicesListeners();
}

