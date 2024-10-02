const form = document.getElementById('form-contato');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const nome = document.getElementById('nome').value;
  const email = document.getElementById('email').value;
  const mensagem = document.getElementById('mensagem').value;

  // Enviar os dados para a ferramenta de envio de formulários
  // Aqui você pode usar a API da ferramenta escolhida para enviar os dados
  // Por exemplo, com o Formspree:
  fetch('https://formspree.io/f/your-form-id', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      nome,
      email,
      mensagem
    })
  })
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    alert('Formulário enviado com sucesso!');
    form.reset();
  })
  .catch((error) => {
    console.error(error);
    alert('Erro ao enviar formulário. Tente novamente!');
  });
});