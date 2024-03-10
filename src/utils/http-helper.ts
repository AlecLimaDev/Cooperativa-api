import { FastifyReply } from "fastify";

const badRequest = (reply: FastifyReply, message: string) => {
  return reply.code(400).send({ message });
};

const unauthorized = (reply: FastifyReply, message: string) => {
  return reply.code(401).send({ message });
};

const serverError = (reply: FastifyReply, message: string) => {
  return reply.code(500).send({ message });
};

const noContent = (reply: FastifyReply) => {
  return reply.code(204).send();
};

const created = (reply: FastifyReply, data: any) => {
  return reply.code(201).send(data);
};

const ok = (reply: FastifyReply, data: any) => {
  return reply.code(200).send(data);
};

export { badRequest, unauthorized, serverError, noContent, created, ok };
