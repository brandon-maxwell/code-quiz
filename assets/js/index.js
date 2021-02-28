var startButton = document.querySelector("#start");
var timer = document.querySelector("#time");
var answer1 = document.getElementById('answerA');
var answer2 = document.getElementById('answerB');
var answer3 = document.getElementById('answerC');
var answer4 = document.getElementById('answerD');
var question = document.getElementById('questions');
var startContainer = document.getElementById('start-page'); 
var questionContainer = document.getElementById('questions-container');
var counter = 0;
var currentTime = 0;
var countDownInt = 75;

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
]

function timePenalty() {
    (document.getElementById('time') -15);
}

function nextQuestion() {
    question.innerText = questions[counter].question;
    answer1.innerText = questions[counter].a;
    answer2.innerText = questions[counter].b;
    answer3.innerText = questions[counter].c;
    answer4.innerText = questions[counter].d;
}

nextQuestion()


answer1.addEventListener("click", function (event) {
    if (event.target.textContent === questions[counter].correctAnswer) {
        console.log('you got the correct answer')
    } else {
        //time penalty ==> decrementing currentTime = currentTime - 15
        console.log('you got the wrong answer');
        timePenalty()
    }
    counter++;
    nextQuestion()
})

answer2.addEventListener("click", function (event) {
    if (event.target.textContent === questions[counter].correctAnswer) {
        console.log('you got the correct answer')
    } else {
        console.log('you got the wrong answer');
        timePenalty()
    }
    counter++;
    nextQuestion()
})

answer3.addEventListener("click", function (event) {
    if (event.target.textContent === questions[counter].correctAnswer) {
        console.log('you got the correct answer')
    } else {
        console.log('you got the wrong answer');
        timePenalty()
    }
    counter++;
    nextQuestion()
})

answer4.addEventListener("click", function (event) {
    if (event.target.textContent === questions[counter].correctAnswer) {
        console.log('you got the correct answer')
    } else {
        console.log('you got the wrong answer');
        timePenalty()
    }
    counter++;
    nextQuestion()
})

//Starts Game - Clears h1/p/start button & adds questions/options & starts timer
startButton.addEventListener("click", function (event) {
    startContainer.style.display = "none";
    questionContainer.style.display = "block";
    var timeInterval = setInterval(function(){
        countDownInt--;
        timer.textContent = "Time: " + countDownInt;
    
        if (countDownInt < 1) {
            clearInterval (timeInterval);
        }
    }, 1000);
    
    // timer = 75;
    // timeInterval = setInterval (timerClick, 75000);
})

function timerClick() {
    timer = timeInterval
}

if (counter === 5) {
    questionContainer.style.display = "none";

}



// //when I click start, clear H1 and p and start button
// function startGame() {
//     addEventListener("click", function (event) {

//     })
// }
//and replace with question and 4 mult choice answers
//also need to start timer
//one choice must be correct answer
//if wrong choice, reduce 10 seconds
//if correct, change to next question/answers
//include 5 questions
//if timer runs out, update text to say final score 0
//if user gets through questions, log time left as final score
//have user enter initals and click submit
//we then need to log user input to local storage
//AND we need to then log user initals and score to highscores

