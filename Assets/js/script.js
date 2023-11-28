var username = document.getElementById('username');
var startQuizButton = document.querySelector(".start-quiz");
startQuizButton.disabled = true;
username.addEventListener('keyup', (event) => {
  startQuizButton.disabled = false;
  const value = event.currentTarget.value
  if (value === "") {
    startQuizButton.disabled = true;
  }  
});

startQuizButton.addEventListener("click", function (event) {
  event.preventDefault();
  localStorage.setItem('username', username.value);
  window.open("./quiz.html","_self");

});
