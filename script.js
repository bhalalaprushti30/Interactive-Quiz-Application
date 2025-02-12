const questions = [
    {
        question: "Which of the following is NOT a valid CSS unit?",
        answers: [
            { text: "px", correct: false },
            { text: "em", correct: false },
            { text: "rem", correct: false },
            { text: "dm", correct: true }
        ]
    },
    {
        question: "What does CSS stand for?",
        answers: [
            { text: "Computer Style Sheets", correct: false },
            { text: "Creative Styling System", correct: false },
            { text: "Cascading Style Sheets", correct: true },
            { text: "Colorful Style Sheets", correct: false }
        ]
    },
    {
        question: "Which CSS property is used to control the spacing between elements?",
        answers: [
            { text: "margin", correct: true },
            { text: "padding", correct: false },
            { text: "spacing", correct: false },
            { text: "gap", correct: false }
        ]
    },    
    {
        question: "What is the correct way to select an element with the class 'btn' in CSS?",
        answers: [
            { text: "#btn", correct: false },
            { text: "element.btn", correct: false },
            { text: ".btn", correct: true },
            { text: "btn{}", correct: false }
        ]
    },
    {
        question: "Which of the following is NOT a JavaScript framework?",
        answers: [
            { text: "React", correct: false },
            { text: "Angular", correct: false },
            { text: "Vue", correct: false },
            { text: "Django", correct: true }
        ]
    },
    {
        question: "Which property is used to make a flex container?",
        answers: [
            { text: "display: block;", correct: false },
            { text: "display: flex;", correct: true },
            { text: "display: inline;", correct: false },
            { text: "display: grid;", correct: false }
        ]
    },
    {
        question: "What does the 'async' keyword do in JavaScript?",
        answers: [
            { text: "Makes a function asynchronous", correct: true },
            { text: "Delays script execution", correct: false },
            { text: "Loads scripts in order", correct: false },
            { text: "Blocks execution", correct: false }
        ]
    },
    {
        question: "Which attribute is used in HTML to open a link in a new tab?",
        answers: [
            { text: 'target="_self"', correct: false },
            { text: 'target="_blank"', correct: true },
            { text: 'target="_new"', correct: false },
            { text: 'target="newtab"', correct: false }
        ]
    },   
    {
        question: "What does '===' operator do in JavaScript?",
        answers: [
            { text: "Checks value and type", correct: true },
            { text: "Checks only value", correct: false },
            { text: "Assigns value", correct: false },
            { text: "None of the above", correct: false }
        ]
    },
    {
        question: "Which is NOT a valid JavaScript variable name?",
        answers: [
            { text: "myVar", correct: false },
            { text: "2variable", correct: true },
            { text: "_myVar", correct: false },
            { text: "$myVar", correct: false }
        ]
    }
];

let currentQuestionIndex = 0;
let score = 0;

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
const scoreDisplay = document.getElementById("score");

const optionLabels = ["A", "B", "C", "D"];

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.style.display = "none";
    loadQuestion();
}

function loadQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    questionElement.innerText = currentQuestion.question;

    currentQuestion.answers.forEach((answer, index) => {
        const button = document.createElement("button");
        button.classList.add("answer-btn");
        button.innerHTML = `<span>${optionLabels[index]}</span> ${answer.text}`;
        button.addEventListener("click", () => selectAnswer(button, answer.correct));
        answerButtons.appendChild(button);
    });
}

function resetState() {
    nextButton.style.display = "none";
    answerButtons.innerHTML = "";
}

function selectAnswer(button, correct) {
    button.classList.add(correct ? "correct" : "wrong");
    if (correct) score++;
    nextButton.style.display = "block";
    scoreDisplay.innerText = `Score: ${score}`;
}

nextButton.addEventListener("click", () => {
    currentQuestionIndex++;
    currentQuestionIndex < questions.length ? loadQuestion() : questionElement.innerText = "Quiz Completed!";
});

startQuiz();
