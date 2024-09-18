const questions = [
    {
        question: "1. Qual é a linguagem de programação mais utilizada para o desenvolvimento de aplicativos Android?",
        answers: ["Swift", "Ruby", "Java", "Python"],
        correctAnswer: 2
    },
    {
        question: "2. O que significa a sigla \"IoT\" no contexto da tecnologia?",
        answers: ["Internet of Technology", "Internal Operations Technology", "Internet of Things", "Information of Technology"],
        correctAnswer: 2
    },
    {
        question: "3. Qual empresa é a criadora do sistema operacional Windows?",
        answers: ["Google","Apple","Microsoft","IBM"],
        correctAnswer: 2
    },
    {
        question: "4. O que é uma \"GPU\"?",
        answers: ["Unidade de processamento gráficos", "Unidade de processamento geral", "Unidade de Potência Global", "Unidade de Dados de Processamento"],
        correctAnswer: 0
    },
    {
        question: "5. Qual é a principal função da CPU (Unidade Central de Processamento) em um computador?",
        answers: ["Armazenar dados permanentes", "Executar instruções e processar dados", "Controlar a exibição de gráficos na tela", "Gerenciar a rede de internet"],
        correctAnswer: 1
    },
    {
        question: "6. Qual componente do computador é responsável por armazenar dados temporariamente enquanto o sistema está em uso?",
        answers: ["Disco Rígido (HD)","Placa-Mãe","SSD","Memória-RAM"
        ],
        correctAnswer: 3
    }
];

// Carrega perguntas na página
function loadQuestions() {
    const questionContainer = document.getElementById('question-container');
    questions.forEach((q, index) => {
        const div = document.createElement('div');
        div.innerHTML = `<h3>${q.question}</h3>`;
        q.answers.forEach((answer, i) => {
            div.innerHTML += `<label>
                <input type="radio" name="question${index}" value="${i}"> ${answer}
            </label><br>`;
        });
        questionContainer.appendChild(div);
    });
}

// Avalia as respostas fornecidas pelo usuário
function submitAnswers() {
    let score = 0;
    questions.forEach((q, index) => {
        const selectedAnswer = document.querySelector(`input[name="question${index}"]:checked`);
        if (selectedAnswer && parseInt(selectedAnswer.value) === q.correctAnswer) {
            score++;
        }
    });
    document.getElementById('result').innerHTML = `You scored ${score} out of ${questions.length}`;
}

window.onload = loadQuestions;

/* Função para trocar a cor das alternativas corretas e erradas*/
function submitAnswers() {
    let score = 0;
    questions.forEach((q, index) => {
      const selectedAnswer = document.querySelector(`input[name="question${index}"]:checked`);
      const answerContainer = selectedAnswer.parentNode;
      if (selectedAnswer && parseInt(selectedAnswer.value) === q.correctAnswer) {
        score++;
        answerContainer.style.color = 'green';
        answerContainer.style.fontWeight = 'bold';
      } else {
        answerContainer.style.color = 'red';
        answerContainer.style.fontWeight = 'bold';
      }
    });
    document.getElementById('result').innerHTML = `You scored ${score} out of ${questions.length}`;
  }

 /* Função para deixar o modo escuro ou modo claro */
  function toggleDarkMode() {
    const body = document.body;
    const quizContainer = document.getElementById('quiz-container');
    const questionContainer = document.getElementById('question-container');
    const resultContainer = document.getElementById('result');
  
    const isDarkMode = body.classList.contains('dark-mode');
  
    if (isDarkMode) {
      body.classList.remove('dark-mode');
      quizContainer.classList.remove('dark-mode');
      questionContainer.classList.remove('dark-mode');
      resultContainer.classList.remove('dark-mode');
    } else {
      body.classList.add('dark-mode');
      quizContainer.classList.add('dark-mode');
      questionContainer.classList.add('dark-mode');
      resultContainer.classList.add('dark-mode');
    }
  }

  // ...

function loadQuestions() {
    const questionContainer = document.getElementById('question-container');
    questions.forEach((q, index) => {
      const div = document.createElement('div');
      div.innerHTML = `<h3>${q.question}</h3>`;
      q.answers.forEach((answer, i) => {
        div.innerHTML += `<label>
            <input type="radio" name="question${index}" value="${i}"> ${answer}
          </label><br>`;
      });
      // Adiciona um elemento timer para cada pergunta
      const timerElement = document.createElement('p');
      timerElement.id = `timer-${index}`;
      timerElement.innerHTML = `Time: 120 segundos`;
      div.appendChild(timerElement);
      questionContainer.appendChild(div);
    });
  }
  
  // ...
  /* programa não funcionando totalmente, falta colocar um alert e forçar um f5 para quando esgotar o tempo, ou simplesmente outra tela com o resultado*/
  let timers = [];
  
  function startTimers() {
    questions.forEach((q, index) => {
      const timerElement = document.getElementById(`timer-${index}`);
      let time = 120; // tempo em segundos
      timers[index] = setInterval(() => {
        time--;
        timerElement.innerHTML = `Tempo: ${time} segundos`;
        if (time <= 0) {
          // Tempo esgotado, desativa a opção de resposta
          const radios = document.getElementsByName(`question${index}`);
          radios.forEach((radio) => {
            radio.disabled = true;
          });
        }
      }, 1000); // decrementa o tempo a cada 1 segundo
    });
  }
  
  window.onload = () => {
    loadQuestions();
    startTimers();
  };
  