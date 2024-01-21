"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// src/server.ts
var import_express = __toESM(require("express"));
var import_cors = __toESM(require("cors"));
var import_fs = __toESM(require("fs"));
var import_https = __toESM(require("https"));

// src/app/controllers/lista-de-chaves-controller.ts
var import_client = require("@prisma/client");
var prisma = new import_client.PrismaClient();
var ListaDeChavesController = class {
  async get(req, res) {
    try {
      const contatosFavoritos = await prisma.contatoFavorito.findMany({
        orderBy: {
          lista_de_chaves: "asc"
        }
      });
      res.json(contatosFavoritos);
    } catch (err) {
      console.error("Erro ao buscar tipos de chaves pix: " + err.message);
      res.status(500).json({ error: "Erro interno do servidor" });
    }
  }
};
var lista_de_chaves_controller_default = new ListaDeChavesController();

// src/app/controllers/contatos-favoritos-controller.ts
var import_client2 = require("@prisma/client");
var prisma2 = new import_client2.PrismaClient();
var ContatosFavoritosController = class {
  async get(req, res) {
    try {
      const contatosFavoritos = await prisma2.contatoFavorito.findMany();
      res.json(contatosFavoritos);
    } catch (err) {
      console.error("Erro ao buscar os contatos favoritos: " + err.message);
      res.status(500).json({ error: "Erro interno do servidor" });
    }
  }
  async post(req, res) {
    const {
      nome_contato,
      tipo_chave_pix,
      chave_pix,
      cooperado_id,
      lista_de_chaves
    } = req.body;
    try {
      await prisma2.contatoFavorito.create({
        data: {
          nome_contato,
          tipo_chave_pix,
          chave_pix,
          cooperado_id: 1,
          lista_de_chaves
        }
      });
      res.json("Contato favorito cadastrado com sucesso.");
    } catch (err) {
      console.error("Erro ao inserir o contato favorito: " + err.message);
      res.status(500).json({ error: "Erro interno do servidor" });
    }
  }
  async update(req, res) {
    const { nome_contato, tipo_chave_pix, chave_pix, cooperado_id } = req.body;
    const id = Number(req.params.id);
    try {
      await prisma2.contatoFavorito.update({
        where: { id },
        data: { nome_contato, tipo_chave_pix, chave_pix, cooperado_id }
      });
      res.json("Contato favorito atualizado com sucesso.");
    } catch (err) {
      console.error("Erro ao atualizar o contato favorito: " + err.message);
      res.status(500).json({ error: "Erro interno do servidor" });
    }
  }
  async delete(req, res) {
    const id = Number(req.params.id);
    try {
      await prisma2.contatoFavorito.delete({
        where: { id }
      });
      res.json("Contato favorito exclu\xEDdo com sucesso.");
    } catch (err) {
      console.error("Erro ao excluir o contato favorito: " + err.message);
      res.status(500).json({ error: "Erro interno do servidor" });
    }
  }
};
var contatos_favoritos_controller_default = new ContatosFavoritosController();

// src/app/controllers/cooperativas-controller.ts
var import_client3 = require("@prisma/client");
var prisma3 = new import_client3.PrismaClient();
var CooperativasController = class {
  async get(req, res) {
    try {
      const cooperativas = await prisma3.cooperativas.findMany();
      res.json(cooperativas);
    } catch (err) {
      console.error("Erro ao buscar as cooperativas: " + err.message);
      res.status(500).json({ error: "Erro interno do servidor" });
    }
  }
  async post(req, res) {
    const { codigos, descricao } = req.body;
    try {
      await prisma3.cooperativas.create({
        data: {
          codigos,
          descricao
        }
      });
      res.json("Cooperativa cadastrada com sucesso.");
    } catch (err) {
      console.error("Erro ao inserir a nova cooperativa: " + err.message);
      res.status(500).json({ error: "Erro interno do servidor" });
    }
  }
  async update(req, res) {
    const { codigos, descricao } = req.body;
    const id = parseInt(req.params.id, 10);
    try {
      await prisma3.cooperativas.update({
        where: { id },
        data: {
          codigos,
          descricao
        }
      });
      res.json("Cooperativa atualizada com sucesso.");
    } catch (err) {
      console.error("Erro ao atualizar a cooperativa: " + err.message);
      res.status(500).json({ error: "Erro interno do servidor" });
    }
  }
  async delete(req, res) {
    const id = parseInt(req.params.id, 10);
    try {
      await prisma3.cooperativas.delete({
        where: { id }
      });
      res.json("Cooperativa exclu\xEDda com sucesso.");
    } catch (err) {
      console.error("Erro ao excluir a cooperativa: " + err.message);
      res.status(500).json({ error: "Erro interno do servidor" });
    }
  }
};
var cooperativas_controller_default = new CooperativasController();

// src/app/controllers/cooperados-controller.ts
var import_client4 = require("@prisma/client");
var prisma4 = new import_client4.PrismaClient();
var CooperadosController = class {
  async get(req, res) {
    try {
      const cooperados = await prisma4.cooperados.findMany();
      res.json(cooperados);
    } catch (err) {
      console.error("Erro ao buscar os cooperados: " + err);
      res.status(500).json({ error: "Erro interno do servidor" });
    }
  }

  async post(req, res) {
    const {  conta_corrente, nome } = req.body;
    try {
      await prisma4.cooperados.create({
        data: {
          cooperativa_id: "1",
          conta_corrente,
          nome
        }
      });
      res.json("Novo cooperado cadastrado com sucesso.");
    } catch (err) {
      console.error("Erro ao inserir o novo cooperado: " + err.message);
      res.status(500).json({ error: "Erro interno do servidor" });
    }
  }

  async update(req, res) {
    const { cooperativa_id, conta_corrente, nome } = req.body;
    const id = parseInt(req.params.id, 10);
    try {
      await prisma4.cooperados.update({
        where: { id },
        data: {
          cooperativa_id,
          conta_corrente,
          nome
        }
      });
      res.json("Cooperado atualizado com sucesso.");
    } catch (err) {
      console.error("Erro ao atualizar o cooperado: " + err.message);
      res.status(500).json({ error: "Erro interno do servidor" });
    }
  }
  async delete(req, res) {
    const id = parseInt(req.params.id, 10);
    try {
      await prisma4.cooperados.delete({
        where: { id }
      });
      res.json("Cooperado exclu\xEDdo com sucesso.");
    } catch (err) {
      console.error("Erro ao excluir o cooperado: " + err.message);
      res.status(500).json({ error: "Erro interno do servidor" });
    }
  }
};
var cooperados_controller_default = new CooperadosController();

// src/server.ts
var app = (0, import_express.default)();
app.use((0, import_cors.default)());
app.use(import_express.default.json());
app.get("/", (req, res) => {
  res.send("Hello World");
});
app.get("/lista_de_chaves", lista_de_chaves_controller_default.get);
app.post("/contatos-favoritos", contatos_favoritos_controller_default.post);
app.get("/contatos-favoritos", contatos_favoritos_controller_default.get);
app.put("/contatos-favoritos/:id", contatos_favoritos_controller_default.update);
app.delete("/contatos-favoritos/:id", contatos_favoritos_controller_default.delete);
app.post("/cooperativas", cooperativas_controller_default.post);
app.get("/cooperativas", cooperativas_controller_default.get);
app.put("/cooperativas/:id", cooperativas_controller_default.update);
app.delete("/cooperativas/:id", cooperativas_controller_default.delete);
app.post("/cooperados", cooperados_controller_default.post);
app.get("/cooperados", cooperados_controller_default.get);
app.put("/cooperados/:id", cooperados_controller_default.update);
app.delete("/cooperados/:id", cooperados_controller_default.delete);
app.listen(2e3, () => console.log("Rodando"));
import_https.default.createServer(
  {
    cert: import_fs.default.readFileSync("SSL/code.crt"),
    key: import_fs.default.readFileSync("SSL/code.key")
  },
  app
).listen(2001, () => console.log("API HTTPS RODANDO"));
