document.getElementById('send-code-btn').addEventListener('click', sendCode);
document.getElementById('auth-form').addEventListener('submit', verifyCode);

let generatedCode = '';

function sendCode() {
    const email = document.getElementById('email').value;
    
    if (email) {
        generatedCode = Math.floor(100000 + Math.random() * 900000).toString();  // Gera um código de 6 dígitos

        // Faz uma requisição POST para o servidor Node.js enviar o e-mail
        fetch('http://localhost:3000/send-code', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email: email, code: generatedCode })
        })
        .then(response => response.text())
        .then(data => {
            console.log(data);
            document.getElementById('code-section').classList.remove('hidden');
            document.getElementById('message').textContent = 'Código enviado ao seu e-mail!';
        })
        .catch(error => {
            console.error('Erro:', error);
            document.getElementById('message').textContent = 'Erro ao enviar o código. Tente novamente.';
        });
    } else {
        document.getElementById('message').textContent = 'Por favor, insira um e-mail válido.';
    }
}

function verifyCode(event) {
    event.preventDefault();
    const inputCode = document.getElementById('code').value;

    if (inputCode === generatedCode) {
        document.getElementById('message').textContent = 'Código verificado com sucesso!';
    } else {
        document.getElementById('message').textContent = 'Código incorreto, tente novamente.';
    }
}
