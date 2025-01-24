const express = require('express');

const server = express();

server.get('/hello', (req, res) => {
    const nome = req.query.nome;
    const idade = req.query.idade;
    res.json({
        title: 'Hello World',
        message: `Olá ${nome} tudo bem!?`,
        idade
    });
});

server.get('/hello/:nome', (req, res) => {
    const { nome } = req.params;
    res.json({
        title: 'Hello World',
        message: `Olá ${nome} tudo bem!?`
    });
});

server.listen(3000);