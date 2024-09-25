const http = require('http');
const fs = require('fs');
const url = require('url');
const formidable = require('formidable');

const port = 3000;

// Função para lidar com requisições HTTP
function handleRequest(req, res) {
  const urlPath = url.parse(req.url).pathname;

  // Rota para página inicial
  if (urlPath === '/') {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('<h1>Página Inicial</h1>');
  }

  // Rota para página Sobre
  else if (urlPath === '/about') {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('<h1>Sobre</h1>');
  }

  // Rota para upload de arquivo
  else if (urlPath === '/upload') {
    const form = new formidable.IncomingForm();
    form.uploadDir = './uploads';
    form.keepExtensions = true;

    form.parse(req, (err, fields, files) => {
      if (err) {
        res.writeHead(500, {'Content-Type': 'text/plain'});
        res.end('Erro ao upload do arquivo');
      } else {
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end('Arquivo enviado com sucesso!');
      }
    });
  }

  // Rota para página não encontrada
  else {
    res.writeHead(404, {'Content-Type': 'text/plain'});
    res.end('Página não encontrada');
  }
}

// Função para lidar com requisições POST
function handlePost(req, res) {
  const urlPath = url.parse(req.url).pathname;

  // Rota para página inicial
  if (urlPath === '/') {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Requisição POST recebida!');
  }

  // Rota para página Sobre
  else if (urlPath === '/about') {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Requisição POST recebida!');
  }

  // Rota para upload de arquivo
  else if (urlPath === '/upload') {
    const form = new formidable.IncomingForm();
    form.uploadDir = './uploads';
    form.keepExtensions = true;

    form.parse(req, (err, fields, files) => {
      if (err) {
        res.writeHead(500, {'Content-Type': 'text/plain'});
        res.end('Erro ao upload do arquivo');
      } else {
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end('Arquivo enviado com sucesso!');
      }
    });
  }

  // Rota para página não encontrada
  else {
    res.writeHead(404, {'Content-Type': 'text/plain'});
    res.end('Página não encontrada');
  }
}

// Criar servidor HTTP
const server = http.createServer((req, res) => {
  if (req.method === 'GET') {
    handleRequest(req, res);
  } else if (req.method === 'POST') {
    handlePost(req, res);
  }
});

// Iniciar servidor
server.listen(port, () => {
  console.log(`Servidor iniciado em http://localhost:${port}`);
});