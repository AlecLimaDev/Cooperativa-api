import { PrismaClient } from "@prisma/client";
import { created, deleted } from "../utils/http-helper";
import { z } from "zod";
import { FastifyRequest } from "fastify";

const prisma = new PrismaClient();

class Consorcios {

    async get  ()  {
        const consorcios = await prisma.consorcio.findMany();
        return { consorcios };
      }

    async post (request: FastifyRequest) {
        const consorcioSchema = z.object({
          cnpj: z.string(),
          nome_da_instituicao: z.string(),
          endereco: z.string(),
          complemento: z.string(),
          bairro: z.string(),
          cep: z.string(),
          municipio: z.string(),
          uf: z.string(),
          email: z.string().email(),
          municipio_ibge: z.string(),
        });
      
        const {
          cnpj,
          nome_da_instituicao,
          bairro,
          cep,
          municipio,
          complemento,
          endereco,
          uf,
          email,
          municipio_ibge,
        } = consorcioSchema.parse(request.body);
      
        await prisma.consorcio.create({
          data: {
            cnpj,
            nome_da_instituicao,
            bairro,
            cep,
            municipio,
            complemento,
            endereco,
            uf,
            email,
            municipio_ibge,
          },
        });
        return created;
      }

    async delete(request: FastifyRequest) {
        const consorcioSchema = z.object({
          id: z.string(),
        });
    
        const { id } = consorcioSchema.parse(request.params);
    
        await prisma.consorcio.delete({
          where: {
            id,
          },
        });
    
        return deleted;
      }
}

export default new Consorcios()