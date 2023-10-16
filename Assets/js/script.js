var startQuizButton = document.querySelector(".start-quiz");
console.log("startQuizButton" + startQuizButton);
startQuizButton.addEventListener("click", function (event) {
  event.preventDefault();
  console.log("Start Quiz Clicked");
  window.open("./quiz.html","_self");

});
