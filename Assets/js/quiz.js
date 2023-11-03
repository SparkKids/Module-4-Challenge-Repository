var qCtr = 0

// function loadQuestion(questionText, answers, isCorrect) {
//     const questionObj = {
//         questionText: questionText,
//         answers: answers,
//         isCorrect: isCorrect
//     }
//     console.log("questionObj.questionText " + questionObj.questionText);
//     console.log("questionObj.answers " + questionObj.answers);
//     console.log("questionObj.isCorrect " + questionObj.isCorrect);
//     return questionObj;
// }
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

];
console.log("Load Questions: " + questions)
return questions;
}//function loadQuestions()

function displayQuestion(question, h3El, liEls) {
    h3El.innerText = question.q;
    console.log(question.q);
    console.log(question.ans1);
    console.log(question.ans2);
    console.log(question.ans3);
    console.log(question.ans4);
    liEls[0].innerText = "1. " + question.ans1;
    liEls[0].dataset.indexNumber = 0;
    liEls[1].innerText = "2. " + question.ans2;
    liEls[1].dataset.indexNumber = 1;
    liEls[2].innerText = "3. " + question.ans3;
    liEls[2].dataset.indexNumber = 2;
    liEls[3].innerText = "4. " + question.ans4;
    liEls[3].dataset.indexNumber = 3;
}//function displayQuestion(question, h3El, liEls)

function addChoicesListeners{
const choices = Array.from(document.getElementsByClassName('choice-text'));

choices.forEach((choice) => {
    choice.addEventListener('click', (e) => {
        if (!acceptingAnswers) return;

        acceptingAnswers = false;
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset['number'];

        const classToApply =
            selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect';

        if (classToApply === 'correct') {
            incrementScore(CORRECT_BONUS);
        }

        selectedChoice.parentElement.classList.add(classToApply);

        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply);
            getNewQuestion();
        }, 1000);
    });
});
}

//Initialize the question array
currentQuestion = new Array(4);
//console.log("questions[0] before load questions " + questions[0]);
var questions = loadQuestions();
console.log("questions[0] after load questions " + questions[0]);
h3El = document.querySelector("h3");
liEls = document.querySelectorAll("li");
console.log("h3El " + h3El.innerText);
console.log("liEls[0] " + liEls[0].innerText);
displayQuestion(questions[qCtr], h3El, liEls);


