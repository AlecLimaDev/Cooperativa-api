import { PrismaClient } from "@prisma/client";
import { created, deleted } from "../utils/http-helper";
import { z } from "zod";
import { FastifyRequest } from "fastify";

const prisma = new PrismaClient();

class Conglomerados {
  async get() {
    const conglomerados = await prisma.conglomerado.findMany();
    return { conglomerados };
  }

  async post(request: FastifyRequest) {
    const conglomeradoSchema = z.object({
      nome_do_conglomerado: z.string(),
      classe_do_conglomerado: z.string(),
      cnpj_participante: z.string(),
      nome_do_participante: z.string(),
      tipo_participacao: z.string(),
      data_inicio: z.string(),
      uf: z.string(),
    });
  
    const {
      nome_do_conglomerado,
      classe_do_conglomerado,
      cnpj_participante,
      nome_do_participante,
      tipo_participacao,
      data_inicio,
      uf,
    } = conglomeradoSchema.parse(request.body);
  
    await prisma.conglomerado.create({
      data: {
        nome_do_conglomerado,
        classe_do_conglomerado,
        cnpj_participante,
        nome_do_participante,
        tipo_participacao,
        data_inicio,
        uf,
      },
    })
    return created;
  }

  async delete(request: FastifyRequest) {
    const conglomeradoSchema = z.object({
      id: z.string(),
    });

    const { id } = conglomeradoSchema.parse(request.params);

    await prisma.conglomerado.delete({
      where: {
        id,
      },
    });

    return deleted;
  }
}

export default new Conglomerados();
