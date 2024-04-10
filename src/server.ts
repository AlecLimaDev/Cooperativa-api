import fastify, {

  FastifyInstance,
} from "fastify";
import { PrismaClient } from "@prisma/client";
import { z } from "zod";
import fastifyCors from "@fastify/cors";
import { created, deleted, updated } from "./utils/http-helper";

const app: FastifyInstance = fastify();
const prisma = new PrismaClient();

const corsOptions = {
  origin: process.env.ORIGIN,
};

app.register(fastifyCors, {
  origin: corsOptions.origin,
});


app.get("/user", async () => {
  const users = await prisma.user.findMany();

  return { users };
});


app.post("/user", async (request) => {
  const userSchema = z.object({
    id: z.string(),
    name: z.string(),
    email: z.string().email(),
  });

  const {
    name,
    email,
  } = userSchema.parse(request.body);

  await prisma.user.create({
    data: {
      name,
      email,
    },
  });

  return created;
});


app.get("/bancos", async () => {
  const bancos = await prisma.bancos.findMany();

  return { bancos };
});

app.post("/bancos", async (request, reply) => {
  const bancoSchema = z.object({
    id: z.string(),
    cnpj: z.string(),
    nome_constituicao: z.string(),
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

  try {
    const {
      id,
      cnpj,
      nome_constituicao,
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

    const novoBanco = await prisma.bancos.create({
      data: {
        id,
        cnpj,
        nome_constituicao,
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

    reply.code(201).send(novoBanco);
  } catch (error) {
    console.error("Erro ao criar banco:", error);
    reply.code(500).send({ error: "Erro interno do servidor" });
  }
});






app
  .listen({
    host: "0.0.0.0",
    port: process.env.PORT ? Number(process.env.PORT) : 3333,
  })
  .then(() => {
    console.log("HTTP SERVER RUNNING");
  });
