import { PrismaClient } from "@prisma/client";
import { created, deleted } from "../utils/http-helper";
import { z } from "zod";
import { FastifyRequest } from "fastify";

const prisma = new PrismaClient();
class Sociedades {
  async get() {
    const sociedades = await prisma.sociedade.findMany();

    return { sociedades };
  }

  async post(request: FastifyRequest) {
    const sociedadeSchema = z.object({
      cnpj: z.string(),
      segmento: z.string(),
      endereco: z.string(),
      complemento: z.string(),
      bairro: z.string(),
      cep: z.string(),
      cidade: z.string(),
      uf: z.string(),
      ddd: z.string(),
      fone: z.string(),
      email: z.string().email(),
      municipio_ibge: z.string(),
    });

    const {
      cnpj,
      segmento,
      endereco,
      complemento,
      bairro,
      cep,
      uf,
      ddd,
      fone,
      cidade,
      email,
      municipio_ibge,
    } = sociedadeSchema.parse(request.body);

    await prisma.sociedade.create({
      data: {
        cnpj,
        segmento,
        endereco,
        complemento,
        bairro,
        cep,
        uf,
        ddd,
        fone,
        cidade,
        email,
        municipio_ibge,
      },
    });

    return created;
  }

  async delete(request: FastifyRequest) {
    const sociedadeSchema = z.object({
      id: z.string(),
    });

    const { id } = sociedadeSchema.parse(request.params);

    await prisma.sociedade.delete({
      where: {
        id,
      },
    });

    return deleted;
  }
}

export default new Sociedades();
