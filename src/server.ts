import express from "express";
import cors from "cors";
import fs from "fs";
import https from "https";
import ListaDeChavesController from "./app/controllers/lista-de-chaves-controller";
import ContatosFavoritosController from "./app/controllers/contatos-favoritos-controller";
import CooperativasController from "./app/controllers/cooperativas-controller";
import CooperadosController from "./app/controllers/cooperados-controller";
import { Request, Response } from "express"; 



const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World");
});

app.get("/lista_de_chaves", ListaDeChavesController.get);

app.post("/contatos-favoritos", ContatosFavoritosController.post);

app.get("/contatos-favoritos", ContatosFavoritosController.get);

app.put("/contatos-favoritos/:id", ContatosFavoritosController.update);

app.delete("/contatos-favoritos/:id", ContatosFavoritosController.delete);

app.post("/cooperativas", CooperativasController.post);

app.get("/cooperativas", CooperativasController.get);

app.put("/cooperativas/:id", CooperativasController.update);

app.delete("/cooperativas/:id", CooperativasController.delete);

app.post("/cooperados", CooperadosController.post);

app.get("/cooperados", CooperadosController.get);

app.put("/cooperados/:id", CooperadosController.update);

app.delete("/cooperados/:id", CooperadosController.delete);

app.listen(2000, () => console.log("Rodando"))


https
  .createServer(
    {
      cert: fs.readFileSync("SSL/code.crt"),
      key: fs.readFileSync("SSL/code.key"),
    },
    app
  )
  .listen(2001, () => console.log("API HTTPS RODANDO"));
