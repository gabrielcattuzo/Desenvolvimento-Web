const form = document.getElementById('form-contato');
const enviarButton = document.getElementById('enviar');

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
      console.log(data);
    })
    .catch((err) => console.error(err));
});
