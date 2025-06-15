// Auto height adjust for consistency
document.addEventListener("DOMContentLoaded", () => {
    const heightToCopy = document.querySelector(".question").offsetHeight;
    document.querySelector("#pc").style.height = heightToCopy + "px";
});

// Quiz state variables
let questionIndex = 0;
const questionNum = questions.length;
let qDone = new Array(questionNum).fill(false);
let score = 0;
let index;
let timeLeft = 30;
let timerInterval;

// DOM references
const questionH = document.querySelector(".question h2");
const questionP = document.querySelector(".question p");
const answers = document.querySelector(".answers");
const nextBtn = document.querySelector(".next-btn");
let qCountBoxes = [];
const timers = document.querySelectorAll(".timer");

// Sounds
const sounds = {
    correct: new Audio("../audio/correct.mp3"),
    wrong: new Audio("../audio/wrong.mp3"),
    click: new Audio("../audio/click.mp3"),
};
let soundOn = true;

// Load a new random question
function loadQuestion() {
    answers.innerHTML = ""; // Clear previous buttons

    do {
        index = Math.floor(Math.random() * questionNum);
    } while (qDone[index]);

    qDone[index] = true;
    const q = questions[index];
    questionH.textContent = `Question ${questionIndex + 1}`;
    questionP.textContent = q.question;
    nextBtn.style.display = "none";

    q.options.forEach((option) => {
        const btn = document.createElement("button");
        btn.textContent = option;
        btn.classList.add("ans");
        btn.addEventListener("click", handleAnswer); // Attach handler
        answers.appendChild(btn);
    });

    generateQuestionTracker();
    updateCountTracker();
    startTimer();
}

function generateQuestionTracker() {
    const countDiv = document.querySelector(".count");
    countDiv.innerHTML = "";
    for (let i = 1; i <= 10; i++) {
        const btn = document.createElement("button");
        btn.classList.add("q-count");
        btn.textContent = i;
        countDiv.appendChild(btn);
    }

    // After creating buttons, update the reference
    qCountBoxes = document.querySelectorAll(".q-count");
}


// Handle the clicked answer
function handleAnswer(e) {
    const selectedBtn = e.target;
    const ans = document.querySelectorAll(".ans");
    const selectedIndex = Array.from(ans).indexOf(selectedBtn);
    const correctIndex = questions[index].correctIndex;

    ans.forEach((btn) => (btn.disabled = true));

    if (selectedIndex === correctIndex) {
        selectedBtn.classList.add("correct");
        qCountBoxes[questionIndex].classList.add("correct");
        playSound("correct");
        score++;
    } else {
        selectedBtn.classList.add("wrong");
        ans[correctIndex].classList.add("correct");
        qCountBoxes[questionIndex].classList.add("wrong");
        playSound("wrong");
    }

    nextBtn.style.display = "block";
    clearInterval(timerInterval);
}

// Start timer for each question
function startTimer() {
    timeLeft = 30;
    timers.forEach((timer) => {
        timer.textContent = `${timeLeft}s`;
    });

    timerInterval = setInterval(() => {
        timeLeft--;
        timers.forEach((timer) => {
            timer.textContent = `${timeLeft}s`;
        });

        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            lockAnswers();
        }
    }, 1000);
}

// Lock answers if time runs out
function lockAnswers() {
    const ans = document.querySelectorAll(".ans");
    const correctIndex = questions[index].correctIndex;
    ans.forEach((btn) => (btn.disabled = true));
    ans[correctIndex].classList.add("correct");
    qCountBoxes[questionIndex].classList.add("wrong");
    nextBtn.style.display = "block";
}

// Play sound based on event
function playSound(name) {
    if (!soundOn || !sounds[name]) return;
    sounds[name].currentTime = 0;
    sounds[name].play();
}

// Highlight current question in tracker
function updateCountTracker() {
    qCountBoxes.forEach((box, i) => {
        box.classList.remove("current");
        if (i === questionIndex) {
            box.classList.add("current");
        }
    });
}

// End quiz screen
function endQuiz() {
    questionH.textContent = "Quiz Completed!";
    questionP.textContent = `Your score: ${score}/${questionNum}`;
    answers.style.display = "none";
    nextBtn.style.display = "none";
    timers.forEach((timer) => {
        timer.style.display = "none";
    });
}

// Start first question
loadQuestion();

// Next button click
nextBtn.addEventListener("click", () => {
    playSound("click");
    questionIndex++;
    if (questionIndex < questionNum) {
        loadQuestion();
    } else {
        updateCountTracker();
        endQuiz();
    }
});

// Optional: apply system dark/light theme
function applyThemeBasedOnSystem() {
    const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    document.body.classList.add(isDark ? "dark" : "light");
}

// applyThemeBasedOnSystem();