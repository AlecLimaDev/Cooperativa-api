import { Request, Response } from "express";

import { PrismaClient } from "@prisma/client" 

const prisma = new PrismaClient();

class ListaDeChavesController {
  async get(req: Request, res: Response) {
    try {
      const contatosFavoritos = await prisma.contatoFavorito.findMany({
        orderBy: {
          lista_de_chaves: "asc",
        },
      });
      res.json(contatosFavoritos);
    } catch (err) {
      console.error("Erro ao buscar tipos de chaves pix: " + err.message);
      res.status(500).json({ error: "Erro interno do servidor" });
    }
  }
}

export default new ListaDeChavesController();
