-- CreateTable
CREATE TABLE "Consorcio" (
    "id" TEXT NOT NULL,
    "cnpj" TEXT NOT NULL,
    "nome_da_instituicao" TEXT NOT NULL,
    "endereco" TEXT NOT NULL,
    "complemento" TEXT NOT NULL,
    "bairro" TEXT NOT NULL,
    "cep" TEXT NOT NULL,
    "municipio" TEXT NOT NULL,
    "uf" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "municipio_ibge" TEXT NOT NULL,

    CONSTRAINT "Consorcio_pkey" PRIMARY KEY ("id")
);
