// src/swagger.json
var openapi = "3.0.0";
var info = {
  title: "API da lista de chaves pix",
  description: "Essa API \xE9 uma API para listar todas as chaves PIX do banco de dados",
  contact: {
    name: "Alec",
    email: "aleclimadev@gmail.com"
  },
  version: "1.0.0"
};
var paths = {
  tags: ["Lista de Chaves"],
  "/lista_de_chaves": {
    get: {
      description: "Lista de todas as chaves pix cadastradas no banco de dados"
    },
    requestBody: {
      description: "",
      content: {
        "application/json": {
          schema: {}
        }
      }
    }
  }
};
var components = {
  schema: {
    requestVideo: {
      type: "object",
      properties: {}
    }
  }
};
var swagger_default = {
  openapi,
  info,
  paths,
  components
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  components,
  info,
  openapi,
  paths
});
