import "reflect-metadata";
import { router } from "./routes"
import "./database"
import express, {Request, Response, NextFunction } from "express";
import "express-async-errors"

//baixar os types do express
const app = express();

app.use(express.json())

app.use(router)

app.use((err:Error, request:Request, response:Response, next:NextFunction) => { //next envia a tratativa do erro pra um próximo nível
  if(err instanceof Error) {
    return response.status(400).json({
      error: err.message
    })
  }else {
    return response.status(500).json({
      status: "error",
      message: "Internal server error"
    })
  }
})

/**
 * GET => buscar uma informação
 * POST => inserir uma informação
 * PUT => atualizar uma informação
 * DELETE => deletar uma informação
 * PATCH => alterar uma informação específica
 */

 /**
  * TIPOS DE PARÂMETROS>>
  * Routes params => http://localhost:3000/produtos/423453453453
  * Query params => http://localhost:3000/produtos/?name=teclado&description=teclado-bom
  * 
  * Body params => {
  *     "name": "teclado",
  *     "description": "teclado bom"
  * }
  */

//http...
app.listen(3000, ()=> console.log("Server is running"));