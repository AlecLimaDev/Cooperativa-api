import fastify, { FastifyError, FastifyInstance } from "fastify";
const nodemailer = require("nodemailer");
import { PrismaClient } from "@prisma/client";
import { z } from "zod";
import fastifyCors from "@fastify/cors";
import { created, deleted } from "./utils/http-helper";

const app: FastifyInstance = fastify();
const prisma = new PrismaClient();

const corsOptions = {
  origin: process.env.ORIGIN,
};

app.register(fastifyCors, {
  origin: corsOptions.origin,
});

app.post("/enviar-email", async (req: any, res) => {
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.SMTP_EMAIL,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    const options = {
      from: req.body.from,
      name: req.body.name,
      address: req.body.address,
      to: process.env.TO,
      subject: req.body.subject,
      text: req.body.text,
    };

    await transporter.sendMail(options);
    console.log(`email enviado`);
    res.status(200).send("E-mail enviado com sucesso");
  } catch (error) {
    console.error(`erro ao enviar email: ${error}`);
    res.status(500).send("Erro ao enviar o e-mail");
  }
});

app.get("/bancos", async () => {
  const bancos = await prisma.banco.findMany();

  return { bancos };
});

app.post("/bancos", async (request) => {
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
});

app.delete("/bancos/:id", async (request, response) => {
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
});

app.get("/compe-ispb", async (request) => {
  const compeIspbs = await prisma.compeIspb.findMany();

  return { compeIspbs };
});

app.post("/compe-ispb", async (request) => {
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
});

app.delete("/compe-ispb/:id", async (request, response) => {
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
});

app.get("/cooperativas", async () => {
  const cooperativas = await prisma.cooperativa.findMany();

  return { cooperativas };
});

app.post("/cooperativas", async (request) => {
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
});

app.delete("/cooperativas/:id", async (request) => {
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
});

app.get("/sociedades", async () => {
  const sociedades = await prisma.sociedade.findMany();

  return { sociedades };
});

app.post("/sociedades", async (request) => {
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
});

app.delete("/sociedades/:id", async (request, response) => {
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
});

app.get("/consorcios", async () => {
  const consorcios = await prisma.consorcio.findMany();
  return { consorcios };
});

app.post("/consorcios", async (request) => {
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
});

app.get("/conglomerados", async () => {
  const conglomerados = await prisma.conglomerado.findMany();
  return { conglomerados };
});

app.post("/conglomerados", async (request) => {
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
  });
});

app
  .listen({
    host: "0.0.0.0",
    port: process.env.PORT ? Number(process.env.PORT) : 3333,
  })
  .then(() => {
    console.log("HTTP SERVER RUNNING");
  });
