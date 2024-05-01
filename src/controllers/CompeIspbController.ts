import { PrismaClient } from "@prisma/client";
import { created, deleted } from "../utils/http-helper";
import { z } from "zod";
import { FastifyRequest } from "fastify";

const prisma = new PrismaClient();

class CompeIspbController {
  async index() {}

  async get() {
    const compeIspbs = await prisma.compeIspb.findMany();

    return { compeIspbs };
  }

  async post(request: FastifyRequest) {
    const compeIspbSchema = z.object({
      compe: z.string(),
      ispb: z.string(),
      documento: z.string(),
      nome_longo: z.string(),
      nome_curto: z.string(),
      network: z.string(),
      tipo: z.string(),
      tipo_pix: z.string(),
      charge: z.string(),
      documento_credito: z.string(),
      cheque_legal: z.string(),
      detecta_flow: z.string(),
      portabilidade_salario: z.string(),
      produtos: z.string(),
      url: z.string(),
      operacao_iniciada: z.string(),
      data_pix_iniciada: z.string(),
      data_registrada: z.string(),
      data_atualizada: z.string(),
    });

    const {
      compe,
      ispb,
      documento,
      nome_longo,
      nome_curto,
      network,
      tipo,
      tipo_pix,
      charge,
      documento_credito,
      cheque_legal,
      detecta_flow,
      portabilidade_salario,
      produtos,
      url,
      operacao_iniciada,
      data_pix_iniciada,
      data_registrada,
      data_atualizada,
    } = compeIspbSchema.parse(request.body);

    await prisma.compeIspb.create({
      data: {
        compe,
        ispb,
        documento,
        nome_longo,
        nome_curto,
        network,
        tipo,
        tipo_pix,
        charge,
        documento_credito,
        cheque_legal,
        detecta_flow,
        portabilidade_salario,
        produtos,
        url,
        operacao_iniciada,
        data_pix_iniciada,
        data_registrada,
        data_atualizada,
      },
    });
    return created;
  }

  async update() {}

  async delete(request: FastifyRequest) {
    const compeIspbSchema = z.object({
      id: z.string(),
    });

    const { id } = compeIspbSchema.parse(request.params);

    await prisma.compeIspb.delete({
      where: {
        id,
      },
    });

    return deleted;
  }
}
export default new CompeIspbController();
