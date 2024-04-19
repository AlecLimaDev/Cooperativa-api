-- CreateTable
CREATE TABLE "Banco" (
    "id" TEXT NOT NULL,
    "cnpj" TEXT NOT NULL,
    "nome_instituicao" TEXT NOT NULL,
    "segmento" TEXT NOT NULL,
    "endereco" TEXT NOT NULL,
    "complemento" TEXT NOT NULL,
    "bairro" TEXT NOT NULL,
    "cep" TEXT NOT NULL,
    "municipio" TEXT NOT NULL,
    "uf" TEXT NOT NULL,
    "ddd" TEXT NOT NULL,
    "fone" TEXT NOT NULL,
    "cart_comercial" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "municipio_ibge" TEXT NOT NULL,
    "site_na_internet" TEXT NOT NULL,

    CONSTRAINT "Banco_pkey" PRIMARY KEY ("id")
);
