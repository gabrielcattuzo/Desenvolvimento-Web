const form = document.getElementById('form-contato');
const enviarButton = document.getElementById('enviar');
const autenticacao2F = document.getElementById('autenticacao-2f');
const verificarButton = document.getElementById('verificar-2f');
const codigo2FInput = document.getElementById('codigo-2f');
const resultado2F = document.getElementById('resultado-2f');

enviarButton.addEventListener('click', (e) => {
  e.preventDefault();
  const nome = document.getElementById('nome').value;
  const email = document.getElementById('email').value;
  const mensagem = document.getElementById('mensagem').value;

  // Enviar dados para o servidor
  fetch('/enviar', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ nome, email, mensagem })
  })
    .then((res) => res.json())
    .then((data) => {
      if (data.codigo2F) {
        autenticacao2F.style.display = 'block';
        codigo2FInput.value = '';
      } else {
        console.log('Mensagem enviada com sucesso!');
      }
    })
    .catch((err) => console.error(err));
});

verificarButton.addEventListener('click', (e) => {
  e.preventDefault();
  const codigo2F = codigo2FInput.value;

  // Verificar código de autenticação de 2 fatores
  fetch('/verificar-2f', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ codigo2F })
  })
    .then((res) => res.json())
    .then((data) => {
      if (data.valido) {
        resultado2F.textContent = 'E-mail validado!';
      } else {
        resultado2F.textContent = 'Código inválido!';
      }
    })
    .catch((err) => console.error(err));
});