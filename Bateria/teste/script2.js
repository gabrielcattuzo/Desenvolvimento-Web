const perguntas = [
    {
      pergunta: "Qual é a capital do Brasil?",
      opcoes: ["Brasília", "Rio de Janeiro", "São Paulo", "Belo Horizonte"],
      resposta: 0
    },
    {
      pergunta: "Qual é o maior planeta do sistema solar?",
      opcoes: ["Terra", "Marte", "Júpiter", "Saturno"],
      resposta: 2
    },
    {
      pergunta: "Qual é o autor do livro 'Dom Casmurro'?",
      opcoes: ["Machado de Assis", "Graciliano Ramos", "Guimarães Rosa", "Carlos Drummond de Andrade"],
      resposta: 0
    },
    {
      pergunta: "Qual é o time de futebol mais vezes campeão da Copa Libertadores?",
      opcoes: ["Boca Juniors", "River Plate", "Independiente", "Santos"],
      resposta: 0
    },
    {
      pergunta: "Qual é o maior rio do mundo?",
      opcoes: ["Amazonas", "Nilo", "Mississippi", "Yangtzé"],
      resposta: 0
    }
  ];
  
  let indicePergunta = 0;
  let pontuacao = 0;
  
  document.getElementById("pergunta").innerHTML = perguntas[indicePergunta].pergunta;
  document.getElementById("opcao1").nextElementSibling.innerHTML = perguntas[indicePergunta].opcoes[0];
  document.getElementById("opcao2").nextElementSibling.innerHTML = perguntas[indicePergunta].opcoes[1];
  document.getElementById("opcao3").nextElementSibling.innerHTML = perguntas[indicePergunta].opcoes[2];
  document.getElementById("opcao4").nextElementSibling.innerHTML = perguntas[indicePergunta].opcoes[3];
  
  document.getElementById("submeter").addEventListener("click", verificarResposta);
  
  function verificarResposta() {
    const respostaSelecionada = document.querySelector('input[name="opcao"]:checked');
    if (respostaSelecionada !== null) {
      const indiceResposta = parseInt(respostaSelecionada.id.replace("opcao", ""));
      if (indiceResposta === perguntas[indicePergunta].resposta) {
        pontuacao++;
        document.getElementById("resultado").innerHTML = `Você acertou! Pontuação: ${pontuacao}`;
        document.getElementById("resultado").classList.add("correta");
      } else {
        document.getElementById("resultado").innerHTML = `Você errou! A resposta correta era ${perguntas[indicePergunta].opcoes[perguntas[indicePergunta].resposta]}. Pontuação: ${pontuacao}`;
        document.getElementById("resultado").classList.add("incorreta");
      }
      indicePergunta++;
      if (indicePergunta < perguntas.length) {
        document.getElementById("pergunta").innerHTML = perguntas[indicePergunta].pergunta;
        document.getElementById("opcao1").nextElementSibling.innerHTML = perguntas[indicePergunta].opcoes[0];
        document.getElementById("opcao2").nextElementSibling.innerHTML = perguntas[indicePergunta].opcoes[1];
        document.getElementById("opcao3").nextElementSibling.innerHTML = perguntas[indicePergunta].opcoes[2];
        document.getElementById("opcao4").nextElementSibling.innerHTML = perguntas[indicePergunta].opcoes[3];
      } else {
        document.getElementById("pergunta-container").style.display = "none";
        document.getElementById("submeter").style.display = "none";
        document.getElementById("resultado").innerHTML = `Fim do quiz! Pontuação final: ${pontuacao}`;
      }
    } else {
      alert("Selecione uma opção!");
    }
  }