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
const explain = document.querySelector(".quiz-explain");
const explainP = explain.querySelector("p");
const qCountBoxes = document.querySelectorAll(".q-count");
const timers = document.querySelectorAll(".timer");

function loadQuestion() {
    do {
        index = Math.floor(Math.random() * questionNum);
    } while (qDone[index]);

    qDone[index] = true;
    const q = questions[index];
    questionH.textContent = `Question ${questionIndex + 1}`;
    questionP.textContent = q.question;
    explain.style.display = "none";
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
        score++;
    } else {
        selectedBtn.classList.add("wrong");
        ans[correctIndex].classList.add("correct");
        qCountBoxes[questionIndex].classList.add("wrong");
    }

    explainP.textContent = questions[index].explanation;
    explain.style.display = "block";
    nextBtn.style.display = "block";
    stopTimer();
}

function startTimer() {
    let timeLeft = 15;
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
            showExplain();
        }
    }, 1000);
}

function stopTimer() {
    clearInterval(timerInterval);
}

function showExplain() {
    explainP.textContent = questions[index].explanation;
    explain.style.display = "block";
    nextBtn.style.display = "block";
}

function lockAnswers() {
    const correctIndex = questions[index].correctIndex;
    ans[correctIndex].classList.add("correct");
    qCountBoxes[questionIndex].classList.add("wrong");
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
    explainP.textContent = `You answered ${
        document.querySelectorAll(".q-count.correct").length
    } correctly.`;
    explain.style.display = "block";
}

loadQuestion();

ans.forEach((btn) => {
    btn.addEventListener("click", handleAnswer);
});

nextBtn.addEventListener("click", () => {
    questionIndex++;
    if (questionIndex < 10) {
        loadQuestion();
    } else {
        updateCountTracker();
        endQuiz();
    }
});
