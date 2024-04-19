-- CreateTable
CREATE TABLE "Sociedade" (
    "id" TEXT NOT NULL,
    "cnpj" TEXT NOT NULL,
    "segmento" TEXT NOT NULL,
    "endereco" TEXT NOT NULL,
    "complemento" TEXT NOT NULL,
    "bairro" TEXT NOT NULL,
    "cep" TEXT NOT NULL,
    "cidade" TEXT NOT NULL,
    "uf" TEXT NOT NULL,
    "ddd" TEXT NOT NULL,
    "fone" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "municipio_ibge" TEXT NOT NULL,

    CONSTRAINT "Sociedade_pkey" PRIMARY KEY ("id")
);
