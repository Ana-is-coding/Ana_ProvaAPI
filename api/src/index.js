import 'dotenv/config'

import express from 'express'
import cors from 'cors'

import animerepository from './controller/animecontroller.js'
const server = express();
server.use(cors());
server.use(express.json());
server.use(animerepository);

server.listen(process.env.PORT,() => console.log(`api conectada na porta ${process.env.PORT}`));

