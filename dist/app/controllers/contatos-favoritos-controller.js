"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/app/controllers/contatos-favoritos-controller.ts
var contatos_favoritos_controller_exports = {};
__export(contatos_favoritos_controller_exports, {
  default: () => contatos_favoritos_controller_default
});
module.exports = __toCommonJS(contatos_favoritos_controller_exports);
var import_client = require("@prisma/client");
var prisma = new import_client.PrismaClient();
var ContatosFavoritosController = class {
  async get(req, res) {
    try {
      const contatosFavoritos = await prisma.contatoFavorito.findMany();
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
      await prisma.contatoFavorito.create({
        data: {
          nome_contato,
          tipo_chave_pix,
          chave_pix,
          cooperado_id,
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
      await prisma.contatoFavorito.update({
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
      await prisma.contatoFavorito.delete({
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
