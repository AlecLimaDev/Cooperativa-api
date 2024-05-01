import { PrismaClient } from "@prisma/client";
import { created, deleted } from "../utils/http-helper";
import { z } from "zod";
import { FastifyRequest } from "fastify";

const prisma = new PrismaClient();

class Bancos {
  async get() {
    const bancos = await prisma.banco.findMany();

    return { bancos };
  }


  async post (request: FastifyRequest) {
    const bancoSchema = z.object({
      cnpj: z.string(),
      nome_instituicao: z.string(),
      segmento: z.string(),
      endereco: z.string(),
      complemento: z.string(),
      bairro: z.string(),
      cep: z.string(),
      municipio: z.string(),
      uf: z.string(),
      ddd: z.string(),
      cart_comercial: z.string(),
      email: z.string().email(),
      site_na_internet: z.string(),
      municipio_ibge: z.string(),
      fone: z.string(),
    });
  
    const {
      cnpj,
      nome_instituicao,
      segmento,
      endereco,
      complemento,
      bairro,
      cep,
      municipio,
      uf,
      ddd,
      cart_comercial,
      email,
      site_na_internet,
      municipio_ibge,
      fone,
    } = bancoSchema.parse(request.body);
  
    await prisma.banco.create({
      data: {
        cnpj,
        nome_instituicao,
        segmento,
        endereco,
        complemento,
        bairro,
        cep,
        municipio,
        uf,
        ddd,
        cart_comercial,
        email,
        site_na_internet,
        municipio_ibge,
        fone,
      },
    });
  
    return created;
  }

  async update() {}

  async delete (request: FastifyRequest)  {
    const bancoSchema = z.object({
      id: z.string(),
    });
  
    const { id } = bancoSchema.parse(request.params);
  
    await prisma.banco.delete({
      where: {
        id,
      },
    });
  
    return deleted;
  }

}

export default new Bancos();
