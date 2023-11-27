const mostRecentScore = localStorage.getItem('mostRecentScore');
const currentUser = localStorage.getItem('username');
const displayUsername = document.getElementById('username');
const saveScoreBtn = document.getElementById('saveScoreBtn');
const displayScore = document.getElementById('userScore');

const highScores = JSON.parse(localStorage.getItem('highScores')) || [];
displayUsername.innerText = currentUser;
console.log("currentUser = " + currentUser);

// const MAX_HIGH_SCORES = 5;

displayScore.innerText = "Your Score: " + mostRecentScore;

username.addEventListener('keyup', () => {
    saveScoreBtn.disabled = !username.value;
});

saveHighScore = (e) => {
    e.preventDefault();
    console.log("saveHighScore");

    const score = {
        score: mostRecentScore,
        name: username.value,
    };
    highScores.push(score);
    highScores.sort((a, b) => b.score - a.score);
    highScores.splice(5);
console.log("High Scores: " + JSON.stringify(highScores));
    localStorage.setItem('highScores', JSON.stringify(highScores));
//     window.location.assign('/');
 };
