const mostRecentScore = localStorage.getItem('mostRecentScore');
const currentUser = localStorage.getItem('username');
const displayUsername = document.getElementById('username');
const saveScoreBtn = document.getElementById('saveScoreBtn');
const displayScore = document.getElementById('userScore');

const highScores = JSON.parse(localStorage.getItem('highScores')) || [];
displayUsername.innerText = currentUser;

// const MAX_HIGH_SCORES = 5;

displayScore.innerText = "Your Score: " + mostRecentScore;

saveHighScore = (e) => {
    e.preventDefault();

    const score = {
        score: mostRecentScore,
        name: currentUser,
    };
    highScores.push(score);
    highScores.sort((a, b) => b.score - a.score);
    highScores.splice(5);
    localStorage.setItem('highScores', JSON.stringify(highScores));
    window.location.assign('./highScores.html');
 };
