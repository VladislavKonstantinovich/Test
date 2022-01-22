const questions = [
    "Що таке JS?",
    "Як правильно оголошувати фунцію?",
    "Як правильно викликати функцію?",
];

const answers = [
    ["мова програмування", "бібліотека", "розмітка"],
    ["function functionName () {}", "functionName()", "functionName => {}"],
    ["functionName()", "functionName = () => {}", "functionName => {}"],
];

let questionNumber = 0;
let btn = document.querySelector(".nextQuestion");
let question = document.querySelector(".question");
let answersList = document.querySelector(".answersList");
let answer1 = document.getElementById("answerText1");
let answer1Li = document.getElementById("answer1");
let answer2Li = document.getElementById("answer2");
let answer3Li = document.getElementById("answer3");
let answer2 = document.getElementById("answerText2");
let answer3 = document.getElementById("answerText3");
let result = 0;
let position = Math.floor(Math.random() * 3);

function getResult(answer) {
    if (answer == 1) {
        result++;
        answer1.style.background = "#4fce4f";
        answer1.style.border = "solid green 2px";
        answer2.style.background = "none";
        answer3.style.background = "none";
        btn.style.background = "#ff9800";
        btn.disabled = false;
        answer1.onclick = null;
        answer2.onclick = null;
        answer3.onclick = null;
    } else if (answer == 2) {
        answer2.style.background = "#e95a5a";
        answer2.style.border = "solid red 2px";
        answer1.style.background = "none";
        answer3.style.background = "none";
        btn.style.background = "#ff9800";
        btn.disabled = false;
        answer1.onclick = null;
        answer2.onclick = null;
        answer3.onclick = null;
    } else if (answer == 3) {
        answer3.style.background = "#e95a5a";
        answer3.style.border = "solid red 2px";
        answer1.style.background = "none";
        answer2.style.background = "none";
        btn.style.background = "#ff9800";
        btn.disabled = false;
        answer1.onclick = null;
        answer2.onclick = null;
        answer3.onclick = null;
    }
}

// TODO - find out why addEventListener doesn't work

const update = () => {
    if (questionNumber < questions.length) {
        answersList.style.display = "flex";
        btn.style.background = "rgba(255,255,255,.3)";
        btn.disabled = true;
        btn.innerHTML = "наступне питання";
        question.innerHTML = questions[questionNumber];
        answer1.innerHTML = answers[questionNumber][0];
        answer1Li.style.order = Math.floor(Math.random() * 3);
        answer2Li.style.order = Math.floor(Math.random() * 3);
        answer3Li.style.order = Math.floor(Math.random() * 3);
        console.log(position + " " + answer1.style.order);
        answer2.innerHTML = answers[questionNumber][1];
        answer3.innerHTML = answers[questionNumber][2];
        questionNumber++;
        answer1.style.background = "none";
        answer1.style.border = "none";
        answer2.style.background = "none";
        answer2.style.border = "none";
        answer3.style.background = "none";
        answer3.style.border = "none";
        answer1.onclick = () => {
            getResult(1);
        };
        answer2.onclick = () => {
            getResult(2);
        };

        answer3.onclick = () => {
            getResult(3);
        };

        if (questionNumber == questions.length) {
            btn.innerHTML = 'Закінчити тест';
        }

    } else {
        question.innerHTML = "Тест закінчено";
        const answersList = document.querySelector(".answersList");
        answersList.style.display = "none";
        btn.innerHTML = `Ваш результат: ${result}`;
    }
};

btn.addEventListener("click", update);