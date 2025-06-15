document.addEventListener("DOMContentLoaded", () => {
    const heightToCopy = document.querySelector(".question").offsetHeight;
    document.querySelector("#pc").style.height = heightToCopy + "px";
});

let questionIndex = 0;
const questionNum = questions.length;
let qDone = new Array(questions.length).fill(false);
let score = 0;
let index;
let timeLeft = 30;
let timerInterval;

const questionH = document.querySelector(".question h2");
const questionP = document.querySelector(".question p");
const answers = document.querySelector(".answers");
const ans = document.querySelectorAll(".ans");
const nextBtn = document.querySelector(".next-btn");
const qCountBoxes = document.querySelectorAll(".q-count");
const timers = document.querySelectorAll(".timer");

const sounds = {
    correct: new Audio("../audio/correct.mp3"),
    wrong: new Audio("../audio/wrong.mp3"),
    click: new Audio("../audio/click.mp3"),
    //   timer: new Audio("Assets/audio/timer.mp3"),
};
let soundOn = true;

function loadQuestion() {
    do {
        index = Math.floor(Math.random() * questionNum);
    } while (qDone[index]);

    qDone[index] = true;
    const q = questions[index];
    questionH.textContent = `Question ${questionIndex + 1}`;
    questionP.textContent = q.question;
    nextBtn.style.display = "none";

    ans.forEach((btn, i) => {
        btn.disabled = false;
        btn.textContent = q.options[i];
        btn.classList.remove("correct", "wrong");
    });
    updateCountTracker();
    startTimer();

    console.log(index);
}

function handleAnswer(e) {
    const selectedBtn = e.target;
    const selectedIndex = Array.from(ans).indexOf(selectedBtn);
    const correctIndex = questions[index].correctIndex;

    ans.forEach((btn) => (btn.disabled = true));

    if (selectedIndex == correctIndex) {
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
    stopTimer();
}

function startTimer() {
    let timeLeft = 30;
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

function stopTimer() {
    clearInterval(timerInterval);
}

function lockAnswers() {
    const correctIndex = questions[index].correctIndex;
    ans[correctIndex].classList.add("correct");
    qCountBoxes[questionIndex].classList.add("wrong");
    nextBtn.style.display = "block";
}

function playSound(name) {
    if (!soundOn || !sounds[name]) return;
    sounds[name].currentTime = 0; // rewind
    sounds[name].play();
}

function updateCountTracker() {
    qCountBoxes.forEach((box, i) => {
        box.classList.remove("current");
        if (i === questionIndex) {
            box.classList.add("current");
        }
    });
}
function endQuiz() {
    questionH.textContent = "Quiz Completed!";
    questionP.textContent = "";
    answers.style.display = "none";
    nextBtn.style.display = "none";
    timers.forEach((timer) => {
        timer.style.display = "none";
    });
}

loadQuestion();

ans.forEach((btn) => {
    btn.addEventListener("click", handleAnswer);
});

nextBtn.addEventListener("click", () => {
    playSound("click");
    questionIndex++;
    if (questionIndex < 10) {
        loadQuestion();
    } else {
        updateCountTracker();
        endQuiz();
    }
});

function applyThemeBasedOnSystem() {
    const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    document.body.classList.add(isDark ? "dark" : "light");
}

//applyThemeBasedOnSystem();

{
    let count = questions.filter((q) => q.options.length === 4).length;
    console.log("Questions with exactly 4 options:", count);
    console.log("Total questions:", questions.length);
    
}
