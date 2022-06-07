import { con } from './animeconnection.js'

export async function adicionarAnime(nome){
    const comando= `insert into tb_anime(nm_nome)
    values (?);`;
     const [resposta] = await con.query(comando,[nome.nome]);
     return resposta.affectedRows;
}