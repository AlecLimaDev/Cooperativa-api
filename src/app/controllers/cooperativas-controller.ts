import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

class CooperativasController {
  async get(req: Request, res: Response) {
    try {
      const cooperativas = await prisma.cooperativas.findMany();
      res.json(cooperativas);
    } catch (err) {
      console.error("Erro ao buscar as cooperativas: " + err.message);
      res.status(500).json({ error: "Erro interno do servidor" });
    }
  }

  async post(req: Request, res: Response) {
    const { codigos, descricao } = req.body;
    try {
      await prisma.cooperativas.create({
        data: {
          codigos,
          descricao,
        },
      });

      res.json("Cooperativa cadastrada com sucesso.");
    } catch (err) {
      console.error("Erro ao inserir a nova cooperativa: " + err.message);
      res.status(500).json({ error: "Erro interno do servidor" });
    }
  }

  async update(req: Request, res: Response) {
    const { codigos, descricao } = req.body;
    const id = parseInt(req.params.id, 10);

    try {
      await prisma.cooperativas.update({
        where: { id },
        data: {
          codigos,
          descricao,
        },
      });

      res.json("Cooperativa atualizada com sucesso.");
    } catch (err) {
      console.error("Erro ao atualizar a cooperativa: " + err.message);
      res.status(500).json({ error: "Erro interno do servidor" });
    }
  }

  async delete(req: Request, res: Response) {
    const id = parseInt(req.params.id, 10);

    try {
      await prisma.cooperativas.delete({
        where: { id },
      });

      res.json("Cooperativa excluída com sucesso.");
    } catch (err) {
      console.error("Erro ao excluir a cooperativa: " + err.message);
      res.status(500).json({ error: "Erro interno do servidor" });
    }
  }
}

export default new CooperativasController();
