var qCtr = 0
function Question(questionText, correctAnswerNbr, firstAnswer, secondAnswer, thirdAnswer, fourthAnswer) {
    this.questionText = questionText;
    this.correctAnswerNbr = correctAnswerNbr;
    this.Answer0 = firstAnswer;
    this.Answer1 = secondAnswer;
    this.Answer2 = thirdAnswer;
    this.Answer3 = fourthAnswer;
}
function loadQuestions() {
    questions[0] = new Question("When the switch statement matches the expression with the given labels, how is the comparison done?", 0, "Both the datatype and the result of the expression are compared.", "Only the datatype of the expression is compared.", "Only the value of the expression is compared.", "None of the above.");
    questions[1] = new Question("What keyword is used to declare an asynchronous function in Javascript?", 0, "asynch", "await", "setTimeout", "None of the above");
    questions[2] = new Question("What does the … operator do in JS?", 1, "It is used to describe a datatype of undefined size.", "It is used to spread iterables to individual elements.", "No such operator exists.", "None of the above");
    questions[3] = new Question("How do we write a comment in javascript?", 1, "/**/", "//", "#", "$$");
    return questions;
}
function displayQuestion(questionNumber,h3El, liEls) {
    h3El.innerText = questions[questionNumber].questionText;
    console.log(questions[questionNumber].questionText);
    liEls[0].innerText = "1. " + questions[questionNumber].Answer0;
    liEls[0].dataset.indexNumber = 0;
    liEls[1].innerText = "2. " + questions[questionNumber].Answer1;
    liEls[1].dataset.indexNumber = 1;
    liEls[2].innerText = "3. " + questions[questionNumber].Answer2;
    liEls[2].dataset.indexNumber = 2;
    liEls[3].innerText = "4. " + questions[questionNumber].Answer3;
    liEls[3].dataset.indexNumber = 3;
    console.log("liEls[0] " + liEls[0].innerText);  
}
//Initialize the question array
questions = new Array(4);
questions = loadQuestions();
h3El = document.querySelector("h3");
liEls = document.querySelectorAll("li");
console.log("h3El " + h3El.innerText);
console.log("liEls[0] " + liEls[0].innerText);
displayQuestion(qCtr, h3El, liEls);


