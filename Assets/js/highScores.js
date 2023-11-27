const highScores = JSON.parse(localStorage.getItem('highScores')) || [];
console.log("highScores " + highScores)
highScores.sort((a, b) => b.score - a.score);


highScores.forEach(displayScore);

function displayScore(element) {
     // Get the ul element by its ID
     var highScoreList = document.getElementById("highScores");

     // Create a new li element
     var newListItem = document.createElement("li"); 

     // Set the text content of the new li element
     newListItem.textContent = "User: " + element.name + " - Score: " + element.score;
     console.log("name " + newListItem.textContent)

     // Append the new li element to the ul element
     highScoreList.appendChild(newListItem);

}