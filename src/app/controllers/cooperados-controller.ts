import { Request, Response } from "express";

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

class CooperadosController {
  async get(req: Request, res: Response) {
    try {
      const cooperados = await prisma.cooperados.findMany();
      res.json(cooperados);
    } catch (err) {
      console.error("Erro ao buscar os cooperados: " + err);
      res.status(500).json({ error: "Erro interno do servidor" });
    }
  }

  async post(req: Request, res: Response) {
    const { cooperativa_id, conta_corrente, nome } = req.body;
    try {
      await prisma.cooperados.create({
        data: {
          cooperativa_id,
          conta_corrente,
          nome,
        },
      });

      res.json("Novo cooperado cadastrado com sucesso.");
    } catch (err) {
      console.error("Erro ao inserir o novo cooperado: " + err.message);
      res.status(500).json({ error: "Erro interno do servidor" });
    }
  }

  async update(req: Request, res: Response) {
    const { cooperativa_id, conta_corrente, nome } = req.body;
    const id = parseInt(req.params.id, 10);

    try {
      await prisma.cooperados.update({
        where: { id },
        data: {
          cooperativa_id,
          conta_corrente,
          nome,
        },
      });

      res.json("Cooperado atualizado com sucesso.");
    } catch (err) {
      console.error("Erro ao atualizar o cooperado: " + err.message);
      res.status(500).json({ error: "Erro interno do servidor" });
    }
  }

  async delete(req: Request, res: Response) {
    const id = parseInt(req.params.id, 10);

    try {
      await prisma.cooperados.delete({
        where: { id },
      });

      res.json("Cooperado excluído com sucesso.");
    } catch (err) {
      console.error("Erro ao excluir o cooperado: " + err.message);
      res.status(500).json({ error: "Erro interno do servidor" });
    }
  }
}

export default new CooperadosController();
