var username = document.getElementById('username');
var startQuizButton = document.querySelector(".start-quiz");
startQuizButton.disabled = true;
console.log("startQuizButton" + startQuizButton);
username.addEventListener('keyup', () => {
  startQuizButton.disabled = !username.value;
});

startQuizButton.addEventListener("click", function (event) {
  event.preventDefault();
  localStorage.setItem('username', username.value);
  console.log("Start Quiz Clicked");
  window.open("./quiz.html","_self");

});
