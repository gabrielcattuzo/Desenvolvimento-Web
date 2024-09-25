# Servidor Web com Node.js

Este é um exemplo de servidor web simples criado com Node.js. O servidor responde a requisições HTTP e manipula diferentes rotas.

## Comandos cURL para testar as funcionalidades

* Testar a página inicial: `curl http://127.0.0.1:3000/`
* Testar a página Sobre: `curl http://127.0.0.1:3000/about`
* Upload de arquivo: `curl -X POST -F "file=@Desenvolvimento-Web/Lab64.2/arquivo.txt" http://127.0.0.1:3000/upload`