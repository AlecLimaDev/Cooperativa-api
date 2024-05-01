import { PrismaClient } from "@prisma/client";
import { created, deleted } from "../utils/http-helper";
import { z } from "zod";
import { FastifyRequest } from "fastify";

const prisma = new PrismaClient();

class Cooperativas {
  async get() {
    const cooperativas = await prisma.cooperativa.findMany();

    return { cooperativas };
  }

  async post(request: FastifyRequest) {
    const cooperativaSchema = z.object({
      cnpj: z.string(),
      nome_da_instituicao: z.string(),
      endereco: z.string(),
      complemento: z.string(),
      bairro: z.string(),
      cep: z.string(),
      municipio: z.string(),
      uf: z.string(),
      ddd: z.string(),
      telefone: z.string(),
      classe: z.string(),
      criterio_de_associacao: z.string(),
      categ_coop_sing: z.string(),
      filiacao: z.string(),
      email: z.string().email(),
      site_da_cooperativa: z.string(),
    });

    const {
      cnpj,
      nome_da_instituicao,
      endereco,
      complemento,
      bairro,
      cep,
      municipio,
      uf,
      ddd,
      telefone,
      classe,
      criterio_de_associacao,
      categ_coop_sing,
      filiacao,
      email,
      site_da_cooperativa,
    } = cooperativaSchema.parse(request.body);

    await prisma.cooperativa.create({
      data: {
        cnpj,
        nome_da_instituicao,
        endereco,
        complemento,
        bairro,
        cep,
        municipio,
        uf,
        ddd,
        telefone,
        classe,
        criterio_de_associacao,
        categ_coop_sing,
        filiacao,
        email,
        site_da_cooperativa,
      },
    });

    return created;
  }

  async delete(request: FastifyRequest) {
    const cooperativaSchema = z.object({
      id: z.string(),
    });

    const { id } = cooperativaSchema.parse(request.params);

    await prisma.cooperativa.delete({
      where: {
        id,
      },
    });

    return deleted;
  }
}

export default new Cooperativas();
