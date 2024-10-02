const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

// Configuração do Nodemailer
const transporter = nodemailer.createTransport({
    service: 'gmail', // Ou use outro serviço como Outlook, Yahoo, etc.
    auth: {
        user: 'gabrielcattuzo@gmail.com',  // Coloque seu e-mail
        pass: 'suasenha'  // Coloque a senha do seu e-mail (use OAuth2 para mais segurança)
    }
});

// Endpoint para enviar o e-mail
app.post('/send-code', (req, res) => {
    const { email, code } = req.body;

    const mailOptions = {
        from: 'seuemail@gmail.com',
        to: email,
        subject: 'Seu código de verificação',
        text: `Seu código de verificação é: ${code}`
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return res.status(500).send('Erro ao enviar o e-mail.');
        }
        res.status(200).send('Código enviado com sucesso!');
    });
});

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
