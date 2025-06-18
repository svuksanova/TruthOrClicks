const questions = [
    {
        title: "Добредојде во играта!",
        text: "Избери тип на медиум со кој ќе започнеш:",
        options: [
            { text: "Онлајн портал", trust: 20, audience: 40, income: 15 },
            { text: "ТВ станица", trust: 30, audience: 35, income: 25 },
            { text: "Радио", trust: 25, audience: 20, income: 10 }
        ]
    },
    {
        title: "Прва одлука",
        text: "Добиваш понуда за спонзорирана објава од сомнителен извор. Што ќе направиш?",
        options: [
            { text: "Ја објавувам без проверка.", trust: -15, audience: 25, income: 20 },
            { text: "Ја одбивам - не е етичка.", trust: 15, audience: -10, income: -10 },
            { text: "Проверувам и објавувам само ако е точна.", trust: 10, audience: 10, income: 5 }
        ]
    },
    {
        title: "Втора одлука",
        text: "Новинар бара да објавиш скандалозна вест која може да го зголеми бројот на гледачи, но да ја намали довербата. Што правиш?",
        options: [
            { text: "Објавувам веднаш.", trust: -20, audience: 30, income: 15 },
            { text: "Одбивам поради етика.", trust: 20, audience: -5, income: -5 },
            { text: "Проверувам детално пред објава.", trust: 10, audience: 5, income: 5 }
        ]
    }
];

let currentQuestion = 0;
let trust = 0;
let audience = 0;
let income = 0;

const titleEl = document.getElementById("question-title");
const textEl = document.getElementById("question-text");
const optionsContainer = document.getElementById("options-container");

const trustBar = document.querySelector("#trust-bar .progress-fill");
const audienceBar = document.querySelector("#audience-bar .progress-fill");
const incomeBar = document.querySelector("#income-bar .progress-fill");

const trustValue = document.getElementById("trust-value");
const audienceValue = document.getElementById("audience-value");
const incomeValue = document.getElementById("income-value");

function updateStats() {
    trustValue.textContent = trust;
    audienceValue.textContent = audience;
    incomeValue.textContent = income;

    // Ограничување од 0 до 100
    trustBar.style.width = Math.min(Math.max(trust, 0), 100) + "%";
    audienceBar.style.width = Math.min(Math.max(audience, 0), 100) + "%";
    incomeBar.style.width = Math.min(Math.max(income, 0), 100) + "%";
}

function showQuestion() {
    const q = questions[currentQuestion];
    titleEl.textContent = q.title;
    textEl.textContent = q.text;

    optionsContainer.innerHTML = "";
    q.options.forEach(opt => {
        const btn = document.createElement("button");
        btn.className = "option-button";
        btn.textContent = opt.text;
        btn.onclick = () => {
            trust += opt.trust;
            audience += opt.audience;
            income += opt.income;

            updateStats();

            currentQuestion++;
            if (currentQuestion < questions.length) {
                showQuestion();
            } else {
                showEndScreen();
            }
        };
        optionsContainer.appendChild(btn);
    });
}

function showEndScreen() {
    titleEl.textContent = "Играта заврши!";
    textEl.textContent = `Ти имаш: Доверба - ${trust}, Публика - ${audience}, Приход - ${income}`;

    optionsContainer.innerHTML = "";
    const restartBtn = document.createElement("button");
    restartBtn.className = "option-button";
    restartBtn.textContent = "Рестартирај игра";
    restartBtn.onclick = () => {
        trust = 0;
        audience = 0;
        income = 0;
        currentQuestion = 0;
        updateStats();
        showQuestion();
    };
    optionsContainer.appendChild(restartBtn);
}

updateStats();
showQuestion();
