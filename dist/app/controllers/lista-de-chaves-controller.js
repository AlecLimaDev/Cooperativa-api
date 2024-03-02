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

// src/app/controllers/lista-de-chaves-controller.ts
var lista_de_chaves_controller_exports = {};
__export(lista_de_chaves_controller_exports, {
  default: () => lista_de_chaves_controller_default
});
module.exports = __toCommonJS(lista_de_chaves_controller_exports);
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
