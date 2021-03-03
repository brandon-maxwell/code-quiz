var startButton = document.querySelector("#start");
var timer = document.querySelector("#time");
var answer1 = document.getElementById('answerA');
var answer2 = document.getElementById('answerB');
var answer3 = document.getElementById('answerC');
var answer4 = document.getElementById('answerD');
var question = document.getElementById('questions');
var startContainer = document.getElementById('start-page');
var questionContainer = document.getElementById('questions-container');
var resultsContainer = document.getElementById('results');
var counter = 0;
var currentTime = 0;
var countDownInt = 75;
var score = document.getElementById('userScore');
var timeInterval
var submitButton = document.getElementById("submit");
var questions = [
    {
        question: "Which one of these creates a variable?",
        a: 'let',
        b: 'var',
        c: 'const',
        d: 'all the above',
        correctAnswer: 'all the above'
    },
    {
        question: "Inside which HTML element do we put the JavaScript?",
        a: '<link>',
        b: '<java>',
        c: '<script>',
        d: '<js>',
        correctAnswer: '<script>'
    },
    {
        question: "What does DOM stand for?",
        a: 'Document Object Model',
        b: 'Direction Of Method',
        c: 'Direct Object Manipulation',
        d: 'Documentation Of Modes',
        correctAnswer: 'Document Object Model'
    },
    {
        question: "How do you round the number 5.35 to the nearest integer?",
        a: 'round(5.35)',
        b: 'rnd(5.35)',
        c: 'Math.rnd(5.35)',
        d: 'Math.round(5.35)',
        correctAnswer: 'Math.round(5.35)'
    },
    {
        question: "This executes a function, after waiting a specified number of milliseconds.",
        a: 'setInterval',
        b: 'setTimeout',
        c: 'timerSet',
        d: 'countDown',
        correctAnswer: 'setTimeout'
    },
    {
        question: ""
    },
]

//Starts Game - Clears h1/p/start button & adds questions/options & starts timer
startButton.addEventListener("click", function (event) {
    startContainer.style.display = "none";
    questionContainer.style.display = "block";
    timeInterval = setInterval(function () {
        countDownInt--;
        timer.textContent = "Time: " + countDownInt;
        if (counter === 5) {
            clearInterval(timeInterval);
            score.textContent = "Your score is " + countDownInt;
        }
        
        else if (countDownInt < 1) {
            clearInterval(timeInterval);
            questionContainer.style.display = "none";
            resultsContainer.style.display = "block";
            let countDownInt = 0;
            score.textContent = "Your score is " + countDownInt;
        }
    }, 1000);

})

function timePenalty() {
    countDownInt -= 15;
}

function nextQuestion() {
    question.innerText = questions[counter].question;
    answer1.innerText = questions[counter].a;
    answer2.innerText = questions[counter].b;
    answer3.innerText = questions[counter].c;
    answer4.innerText = questions[counter].d;
    if (counter === 5) {
        questionContainer.style.display = "none";
        resultsContainer.style.display = "block";
    }
}

nextQuestion()


answer1.addEventListener("click", function (event) {
    if (event.target.textContent === questions[counter].correctAnswer) {
        console.log('you got the correct answer')
    } else {
        //time penalty ==> decrementing currentTime = currentTime - 15
        console.log('you got the wrong answer');
        timePenalty();
    }
    counter++;
    nextQuestion()
})

answer2.addEventListener("click", function (event) {
    if (event.target.textContent === questions[counter].correctAnswer) {
        console.log('you got the correct answer')
    } else {
        console.log('you got the wrong answer');
        timePenalty();
    }
    counter++;
    nextQuestion()
})

answer3.addEventListener("click", function (event) {
    if (event.target.textContent === questions[counter].correctAnswer) {
        console.log('you got the correct answer')
    } else {
        console.log('you got the wrong answer');
        timePenalty();
    }
    counter++;
    nextQuestion()
})

answer4.addEventListener("click", function (event) {
    if (event.target.textContent === questions[counter].correctAnswer) {
        console.log('you got the correct answer')
    } else {
        console.log('you got the wrong answer');
        timePenalty();
    }
    counter++;
    nextQuestion()
})

submitButton.addEventListener('click', function (event) {
    event.preventDefault();
    var name = document.getElementById('initials').value;
    console.log(name)
    var newScore = { name: name, score: countDownInt };
    console.log(newScore);
    var items = JSON.parse(localStorage.getItem("scores"));

    if (items) {
        items.push(newScore)
    }
    else {
        items = []
        items.push(newScore)
    }
    localStorage.setItem("scores", JSON.stringify(items));
    window.location.href = "./highscore.html"
})