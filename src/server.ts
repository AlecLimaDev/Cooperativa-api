import fastify, {
  FastifyReply,
  FastifyRequest,
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





/* app.get("/contatos-favoritos", async () => {
  const contatosFavoritos = await prisma.contatoFavorito.findMany();

  return { contatosFavoritos };
});

app.post("/contatos-favoritos", async (request) => {
  const createContatosFavoritoSchema = z.object({
    id: z.number(),
    cooperado_id: z.number(),
    nome_contato: z.string(),
    tipo_chave_pix: z.string(),
    chave_pix: z.string(),
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

  return created;
});

app.put("/contatos-favoritos/:id", async (request) => {
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

  return updated;
});

app.delete("/contatos-favoritos/:id", async (request: FastifyRequest) => {
  const params = request.params as { id: string };
  const id = parseInt(params.id, 10);

  await prisma.contatoFavorito.delete({
    where: { id },
  });

  return deleted;
});
 */
/* app.get("/cooperativas", async () => {
  const cooperativaDeCredito = await prisma.cooperativas.findMany();

  return { cooperativaDeCredito };
});

app.post("/cooperativas", async (request) => {
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

  return created;
});

app.put("/cooperativas/:id", async (request) => {
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

  return updated;
});
 */
/* app.get("/cooperados", async () => {
  const cooperados = await prisma.cooperados.findMany();

  return { cooperados };
});

app.post("/cooperados", async (request) => {
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

  return created;
}); */

/* app.put("/cooperados/:id", async (request) => {
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
      nome,
    },
  });

  return updated;
});
 */
app
  .listen({
    host: "0.0.0.0",
    port: process.env.PORT ? Number(process.env.PORT) : 3333,
  })
  .then(() => {
    console.log("HTTP SERVER RUNNING");
  });
