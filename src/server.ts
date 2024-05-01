import fastify, {
  FastifyInstance,
  FastifyReply,
  FastifyRequest,
} from "fastify";
const nodemailer = require("nodemailer");
import fastifyCors from "@fastify/cors";
import CompeIspbController from "./controllers/CompeIspbController";
import BancosController from "./controllers/BancosController";
import SociedadesController from "./controllers/SociedadesController";
import ConsorciosController from "./controllers/ConsorciosController";
import ConglomeradosController from "./controllers/ConglomeradosController";
import CooperativasController from "./controllers/CooperativasController";
const app: FastifyInstance = fastify();


const corsOptions = {
  origin: process.env.ORIGIN,
};



app.register(fastifyCors, {
  origin: (origin, cb) => {
    cb(null, true);
  },
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
});

app.addHook(
  "onSend",
  (request: FastifyRequest, reply: FastifyReply, payload, next) => {
    reply.header("Access-Control-Allow-Origin", "*");
    next();
  }
);

app.post("/enviar-email", async (request: any, response) => {
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.SMTP_EMAIL,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    const options = {
      from: request.body.from,
      name: request.body.name,
      address: request.body.address,
      to: process.env.TO,
      subject: request.body.subject,
      text: request.body.text,
    };

    await transporter.sendMail(options);
    console.log(`email enviado`);
    response.status(200).send("E-mail enviado com sucesso");
  } catch (error) {
    console.error(`erro ao enviar email: ${error}`);
    response.status(500).send("Erro ao enviar o e-mail");
  }
});

app.get("/bancos", BancosController.get);
app.post("/bancos", BancosController.post);
app.delete("/bancos/:id", BancosController.delete);
app.get("/compe-ispb", CompeIspbController.get);
app.post("/compe-ispb", CompeIspbController.post);
app.delete("/compe-ispb/:id", CompeIspbController.delete);
app.get("/cooperativas", CooperativasController.get);
app.post("/cooperativas", BancosController.post);
app.delete("/cooperativas/:id", CooperativasController.delete);
app.get("/sociedades", SociedadesController.get);
app.post("/sociedades", SociedadesController.post);
app.delete("/sociedades/:id", SociedadesController.delete);
app.get("/consorcios", ConsorciosController.get);
app.post("/consorcios", ConsorciosController.post);
app.delete("/consorcios/:id", ConsorciosController.delete);
app.get("/conglomerados", ConglomeradosController.get);
app.post("/conglomerados", ConglomeradosController.post);
app.delete("/conglomerados/:id", ConglomeradosController.delete);

app
  .listen({
    host: "0.0.0.0",
    port: process.env.PORT ? Number(process.env.PORT) : 3333,
  })
  .then(() => {
    console.log("HTTP SERVER RUNNING");
  });
