//THIS POST ALL ARRAY AS ONE AND JUST SAYS "[OBJECT OBJECT]"

var scores = [];
var scoreList = document.getElementById("input");

function postScore() {
    var storedScores = JSON.parse(localStorage.getItem("scores"));
    if (storedScores !==null) {
        document.getElementById("input").innerHTML = storedScores;
    }
}

postScore();

//--------------------------------------------------------------------

//FAILED ATTEMPT 1

// var scoresCountSpan = document.getElementById();

// function renderScores() {
//     scoreList.innerHTML = "";
//     // scoresCountSpan.textContent = scores.length;
//     for (var i = 0, i < scores.length; i++) {
//         var scores = scores[i];
        
//         var li = document.createElement("li");
//         li.textContent = scores;
//         li.setAttribute("data-index", i);
//     }
// }


//--------------------------------------------------------------------

//CODE FROM INDEX.JS ON HOW WE STORED LOCAL STORAGE

// var name = document.getElementById('initials').value;
// var newScore = { name: name, score: countDownInt };
// console.log(newScore);
// var items = JSON.parse(localStorage.getItem("scores"));

// if (items) {
//     items.push(newScore)
// }
// else {
//     items = []
//     items.push(newScore)
// }
// localStorage.setItem("scores", JSON.stringify(items));
// window.location.href = "./highscore.html"
// })