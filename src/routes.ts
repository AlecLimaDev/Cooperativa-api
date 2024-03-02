import { app } from "./server";

import ListaDeChavesController from "./app/controllers/lista-de-chaves-controller";
import ContatosFavoritosController from "./app/controllers/contatos-favoritos-controller";
import CooperativasController from "./app/controllers/cooperativas-controller";
import CooperadosController from "./app/controllers/cooperados-controller";

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
