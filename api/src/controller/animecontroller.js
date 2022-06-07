import { adicionarAnime } from '../repository/animerepository.js'

import { Router } from "express";
const server= Router();

server.post ('/anime/nome', async (req,resp) => {
    try {
        const {nome} = req.body 
        const x = await adicionarAnime (nome);
        resp,send({
            resposta:x
        })
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        });
    }
})

export default server;