import { Request, Response } from "express";
import { PrismaClient } from '@prisma/client'


const prisma = new PrismaClient();

class ContatosFavoritosController {
  async get(req: Request, res: Response) {
    try {
      const contatosFavoritos = await prisma.contatoFavorito.findMany();
      res.json(contatosFavoritos);
    } catch (err) {
      console.error("Erro ao buscar os contatos favoritos: " + err.message);
      res.status(500).json({ error: "Erro interno do servidor" });
    }
  }

  async post(req: Request, res: Response) {
    const {
      nome_contato,
      tipo_chave_pix,
      chave_pix,
      cooperado_id,
      lista_de_chaves,
    } = req.body;

    try {
      await prisma.contatoFavorito.create({
        data: {
          nome_contato,
          tipo_chave_pix,
          chave_pix,
          cooperado_id,
          lista_de_chaves,
        },
      });

      res.json("Contato favorito cadastrado com sucesso.");
    } catch (err) {
      console.error("Erro ao inserir o contato favorito: " + err.message);
      res.status(500).json({ error: "Erro interno do servidor" });
    }
  }

  async update(req: Request, res: Response) {
    const { nome_contato, tipo_chave_pix, chave_pix, cooperado_id } = req.body;
    const id = Number(req.params.id);

    try {
      await prisma.contatoFavorito.update({
        where: { id },
        data: { nome_contato, tipo_chave_pix, chave_pix, cooperado_id },
      });

      res.json("Contato favorito atualizado com sucesso.");
    } catch (err) {
      console.error("Erro ao atualizar o contato favorito: " + err.message);
      res.status(500).json({ error: "Erro interno do servidor" });
    }
  }

  async delete(req: Request, res: Response) {
    const id = Number(req.params.id);

    try {
      await prisma.contatoFavorito.delete({
        where: { id },
      });

      res.json("Contato favorito excluído com sucesso.");
    } catch (err) {
      console.error("Erro ao excluir o contato favorito: " + err.message);
      res.status(500).json({ error: "Erro interno do servidor" });
    }
  }
}

export default new ContatosFavoritosController();
