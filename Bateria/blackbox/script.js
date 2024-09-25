const x = document.getElementById("demo");

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else { 
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
  x.innerHTML = "Latitude: " + position.coords.latitude + 
  "<br>Longitude: " + position.coords.longitude;
}

let questions = [
    {
        question: "What is the primary function of a CPU?",
        options: ["To store data", "To process data", "To display images", "To connect to the internet"],
        answer: 1
    },
    {
        question: "What is the most common type of RAM used in computers?",
        options: ["SRAM", "DRAM", "EPROM", "EEPROM"],
        answer: 1
    },
    {
        question: "What is the purpose of a GPU?",
        options: ["To process data", "To store data", "To display images", "To connect to the internet"],
        answer: 2
    },
    {
        question: "What is the difference between a bit and a byte?",
        options: ["A bit is 8 times larger than a byte", "A byte is 8 times larger than a bit", "A bit is half the size of a byte", "A byte is half the size of a bit"],
        answer: 1
    },
    {
        question: "What is the primary function of a motherboard?",
        options: ["To power the computer", "To cool the computer", "To connect hardware components", "To store data"],
        answer: 2
    },
    {
        question: "What is the purpose of a power supply unit (PSU)?",
        options: ["To cool the computer", "To power the computer", "To connect hardware components", "To store data"],
        answer: 1
    },
    {
        question: "What is the difference between a hard drive and a solid-state drive?",
        options: ["A hard drive is faster than a solid-state drive", "A solid-state drive is faster than a hard drive", "A hard drive is larger than a solid-state drive", "A solid-state drive is larger than a hard drive"],
        answer: 1
    },
    {
        question: "What is the primary function of a network interface card (NIC)?",
        options: ["To connect to the internet", "To display images", "To process data", "To store data"],
        answer: 0
    },
    {
        question: "What is the purpose of a sound card?",
        options: ["To display images", "To process data", "To connect to the internet", "To produce sound"],
        answer: 3
    },
    {
        question: "What is the difference between a 32-bit and 64-bit operating system?",
        options: ["A 32-bit OS can run on a 64-bit processor, but not vice versa", "A 64-bit OS can run on a 32-bit processor, but not vice versa", "A 32-bit OS is faster than a 64-bit OS", "A 64-bit OS is faster than a 32-bit OS"],
        answer: 0
    }
];

let currentQuestion = 0;
let timer = 30;
let score = 0;

document.getElementById("question").innerHTML = questions[currentQuestion].question;

for (let i = 0; i < 4; i++) {
    let option = questions[currentQuestion].options[i];
    let label = document.getElementById(`label${i+1}`);
    label.innerHTML = option;
}

setInterval(() => {
    timer--;
    document.getElementById("timer").innerHTML = `${timer} seconds`;
    if (timer === 0) {
        checkAnswer();
    }
}, 1000);

document.getElementById("submit").addEventListener("click", checkAnswer);

function checkAnswer() {
    let userAnswer = document.querySelector('input[name="option"]:checked');
    if (userAnswer) {
        let answerIndex = userAnswer.id.replace("option", "");
        if (answerIndex - 1 === questions[currentQuestion].answer) {
            score++;
            document.getElementById("result").innerHTML = `Correct! Your score is ${score} out of ${questions.length}.`;
        } else {
            document.getElementById("result").innerHTML = `Incorrect. The correct answer is ${questions[currentQuestion].options[questions[currentQuestion].answer]}. Your score is ${score} out of ${questions.length}.`;
        }
    } else {
        document.getElementById("result").innerHTML = `Please select an option. Your score is ${score} out of ${questions.length}.`;
    }
    currentQuestion++;
    if (currentQuestion < questions.length) {
        document.getElementById("question").innerHTML = questions[currentQuestion].question;
        for (let i = 0; i < 4; i++) {
            let option = questions[currentQuestion].options[i];
            let label = document.getElementById(`label${i+1}`);
            label.innerHTML = option;
        }
        timer = 30;
        document.getElementById("timer").innerHTML = `${timer} seconds`;
    } else {
        document.getElementById("result").innerHTML = `Quiz finished! Your final score is ${score} out of ${questions.length}.`;
    }
}