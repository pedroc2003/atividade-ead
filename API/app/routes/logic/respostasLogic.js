const express = require('express')
const Router = express.Router()

let respostas = [];
let contador = [];
let objeto = {};
var numero = 0;

Router.post('/respostas', (req, res) => {
    contador.push(contador.length+1);
    numero += 1;
    for(let i=numero; i<contador.length+1; i++){
        objeto = req.body
        objeto['id'] = i
    }
    respostas.push(objeto);
})

Router.get('/respostas', (req, res) => {
    res.json(respostas);
})

module.exports = Router 