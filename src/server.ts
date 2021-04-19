import express from "express";

const app = express();

/* 
 -> GET - Busca
 -> POST - Criação
 -> PUT - Alteração
 -> DELETE - Deletar
 -> PATCH - Alterar uma informação específica
*/

// Por padrão os navegadores sempre pegam requisições GET

app.get("/", (request, response) => {
  return response.json({
    message: "Olá NLW 05!"
  });
})

app.post("/", (request, response) =>{
  return response.json({ message: "Usuário salvo com sucesso!" });
})

app.listen(3333, () => console.log("Server is running on port 3333"));
