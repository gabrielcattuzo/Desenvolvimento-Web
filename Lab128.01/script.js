const form = document.getElementById('contactForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');
const successMessage = document.getElementById('successMessage');

form.addEventListener('submit', function(event) {
  event.preventDefault(); 

  // Limpar mensagens de erro
  document.getElementById('nameError').textContent = '';
  document.getElementById('emailError').textContent = '';
  document.getElementById('messageError').textContent = '';

  // Validação 
  let valid = true;
  if (nameInput.value.trim() === '') {
    document.getElementById('nameError').textContent = 'Por favor, insira seu nome.';
    valid = false;
  }

  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  if (emailInput.value.trim() === '' || !emailPattern.test(emailInput.value)) {
    document.getElementById('emailError').textContent = 'Por favor, insira um endereço de e-mail válido.';
    valid = false;
  }

  if (messageInput.value.trim() === '') {
    document.getElementById('messageError').textContent = 'Por favor, insira sua mensagem.';
    valid = false;
  }

  // Envio do formulário
  if (valid) {
    fetch('/', { // Substitua '/' pelo endpoint correto
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: nameInput.value,
        email: emailInput.value,
        message: messageInput.value
      })
    })
    .then(response => { // Lidando com a resposta do servidor
      if (response.ok) { 
        // Requisição bem-sucedida (código 200)
        successMessage.textContent = 'Mensagem enviada com sucesso!';
        form.reset(); // Limpa o formulário após o envio
      } else {
        // Lidando com erros do servidor (ex: código 400, 500)
        response.text().then(errorMessage => {
          console.error("Erro ao enviar o formulário:", errorMessage);
          alert("Ocorreu um erro ao enviar a mensagem. Por favor, tente novamente mais tarde.");
        });
      }
    })
    .catch(error => { // Lidando com erros de rede
      console.error("Erro ao enviar o formulário:", error);
      alert("Ocorreu um erro ao enviar a mensagem. Por favor, verifique sua conexão."); 
    });
  }
});