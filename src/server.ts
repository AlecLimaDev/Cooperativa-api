import express from "express";
import cors from "cors";
import fs from "fs";
import https from "https";
import { Request, Response } from "express";

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World");
});

const PORT = process.env.PORT || 5434;

app.listen(PORT, () => console.log("Rodando"));

https
  .createServer(
    {
      cert: fs.readFileSync("SSL/code.crt"),
      key: fs.readFileSync("SSL/code.key"),
    },
    app
  )
  .listen(PORT, () => console.log("API HTTPS RODANDO"));

export { app };
