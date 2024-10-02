const express = require('express');
const nodemailer = require('nodemailer');
const app = express();

app.use(express.json());

app.post('/enviar', (req, res) => {
  const { nome, email, mensagem } = req.body;

  // Configuração do e-mail
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
      user: 'seu-email@gmail.com',
      pass: 'sua-senha'
    }
  });

  // Enviar e-mail
  const mailOptions = {
    from: 'seu-email@gmail.com',
    to: 'seu-email@gmail.com',
    subject: 'Formulário de Contato',
    text: `Nome: ${nome}\nE-mail: ${email}\nMensagem: ${mensagem}`
  };

  transporter.sendMail(mailOptions, (err, info) => {
    if (err) {
      console.log(err);
    } else {
      console.log('E-mail enviado com sucesso!');
      res.json({ mensagem: 'E-mail enviado com sucesso!' });
    }
  });
});

app.listen(3000, () => {
  console.log('Servidor iniciado na porta 3000');
});