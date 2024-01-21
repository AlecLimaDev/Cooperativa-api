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

// src/app/controllers/cooperativas-controller.ts
var cooperativas_controller_exports = {};
__export(cooperativas_controller_exports, {
  default: () => cooperativas_controller_default
});
module.exports = __toCommonJS(cooperativas_controller_exports);
var import_client = require("@prisma/client");
var prisma = new import_client.PrismaClient();
var CooperativasController = class {
  async get(req, res) {
    try {
      const cooperativas = await prisma.cooperativas.findMany();
      res.json(cooperativas);
    } catch (err) {
      console.error("Erro ao buscar as cooperativas: " + err.message);
      res.status(500).json({ error: "Erro interno do servidor" });
    }
  }
  async post(req, res) {
    const { codigos, descricao } = req.body;
    try {
      await prisma.cooperativas.create({
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
      await prisma.cooperativas.update({
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
      await prisma.cooperativas.delete({
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
