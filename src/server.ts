import fastify, { FastifyReply, FastifyRequest } from "fastify";
import { Prisma, PrismaClient } from "@prisma/client";

import { z } from "zod";

const app = fastify();

const prisma = new PrismaClient();

app.get("/contatos-favoritos", async () => {
  const contatosFavoritos = await prisma.contatoFavorito.findMany();

  return { contatosFavoritos };
});

app.post("/contatos-favoritos", async (request, reply) => {
  const createContatosFavoritoSchema = z.object({
    id: z.number(),
    nome_contato: z.string(),
    tipo_chave_pix: z.string(),
    chave_pix: z.string(),
    cooperado_id: z.number(),
    lista_de_chaves: z.string(),
  });

  const {
    id,
    nome_contato,
    tipo_chave_pix,
    chave_pix,
    cooperado_id,
    lista_de_chaves,
  } = createContatosFavoritoSchema.parse(request.body);

  await prisma.contatoFavorito.create({
    data: {
      nome_contato,
      tipo_chave_pix,
      chave_pix,
      cooperado_id,
      lista_de_chaves,
      id,
    },
  });

  return reply.status(201).send();
});

app.put("/contatos-favoritos/:id", async (request, reply) => {
  const { id } = request.params as { id: string };
  const updateContatosFavoritoSchema = z.object({
    nome_contato: z.string(),
    tipo_chave_pix: z.string(),
    chave_pix: z.string(),
    cooperado_id: z.number(),
  });

  const { nome_contato, tipo_chave_pix, chave_pix, cooperado_id } =
    updateContatosFavoritoSchema.parse(request.body);

  await prisma.contatoFavorito.update({
    where: { id: parseInt(id) },
    data: {
      nome_contato,
      tipo_chave_pix,
      chave_pix,
      cooperado_id,
    },
  });

  return reply.status(201).send();
});

app.delete(
  "/contatos-favoritos/:id",
  async (request: FastifyRequest, reply: FastifyReply) => {
    const params = request.params as { id: string };
    const id = parseInt(params.id, 10);

    await prisma.contatoFavorito.delete({
      where: { id },
    });

    return reply.status(201).send();
  }
);

app.get("/cooperativas", async () => {
  const cooperativaDeCredito = await prisma.cooperativas.findMany();

  return { cooperativaDeCredito };
});

app.post("/cooperativas", async (request, reply) => {
  const createCooperativasDeCreditoSchema = z.object({
    codigos: z.string(),
    descricao: z.string(),
  });

  const { codigos, descricao } = createCooperativasDeCreditoSchema.parse(
    request.body
  );

  await prisma.cooperativas.create({
    data: {
      codigos,
      descricao,
    },
  });

  return reply.status(201).send();
});

app.put("/cooperativas/:id", async (request, reply) => {
  const { id } = request.params as { id: string };
  const updateContatosFavoritoSchema = z.object({
    codigos: z.string(),
    descricao: z.string(),
  });

  const { codigos, descricao } = updateContatosFavoritoSchema.parse(
    request.body
  );

  await prisma.cooperativas.update({
    where: { id: parseInt(id) },
    data: {
      codigos,
      descricao,
    },
  });

  return reply.status(201).send();
});

app.get("/cooperados", async (request, reply) => {
  const cooperados = await prisma.cooperados.findMany();

  return { cooperados };
});

app.post("/cooperados", async (request, reply) => {
  const createCooperadoSchema = z.object({
    conta_corrente: z.string(),
    nome: z.string(),
    cooperativa_id: z.string(),
  });

  const { conta_corrente, cooperativa_id, nome } = createCooperadoSchema.parse(
    request.body
  );

  await prisma.cooperados.create({
    data: {
      conta_corrente,
      nome,
      cooperativa_id,
    },
  });

  return reply.status(201).send();
});


app.put("/cooperados/:id", async (request, reply) => {
    const { id } = request.params as { id: string };
    const updateCooperadoSchema = z.object({
        conta_corrente: z.string(),
        nome: z.string(),
        cooperativa_id: z.string(),
    });
  
    const { conta_corrente, cooperativa_id, nome } = updateCooperadoSchema.parse(
      request.body
    );
  
    await prisma.cooperados.update({
      where: { id: parseInt(id) },
      data: {
        conta_corrente,
        cooperativa_id,
        nome
      },
    });
  
    return reply.status(201).send();
  });

app
  .listen({
    host: "0.0.0.0",
    port: process.env.PORT ? Number(process.env.PORT) : 3333,
  })
  .then(() => {
    console.log("HTTP SERVER RUNNING");
  });
