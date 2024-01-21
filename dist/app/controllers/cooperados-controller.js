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

// src/app/controllers/cooperados-controller.ts
var cooperados_controller_exports = {};
__export(cooperados_controller_exports, {
  default: () => cooperados_controller_default
});
module.exports = __toCommonJS(cooperados_controller_exports);
var import_client = require("@prisma/client");
var prisma = new import_client.PrismaClient();
var CooperadosController = class {
  async get(req, res) {
    try {
      const cooperados = await prisma.cooperados.findMany();
      res.json(cooperados);
    } catch (err) {
      console.error("Erro ao buscar os cooperados: " + err);
      res.status(500).json({ error: "Erro interno do servidor" });
    }
  }
  async post(req, res) {
    const { cooperativa_id, conta_corrente, nome } = req.body;
    try {
      await prisma.cooperados.create({
        data: {
          cooperativa_id,
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
      await prisma.cooperados.update({
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
      await prisma.cooperados.delete({
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
