-- CreateTable
CREATE TABLE "Cooperativa" (
    "id" TEXT NOT NULL,
    "cnpj" TEXT NOT NULL,
    "nome_da_instituicao" TEXT NOT NULL,
    "endereco" TEXT NOT NULL,
    "complemento" TEXT NOT NULL,
    "bairro" TEXT NOT NULL,
    "cep" TEXT NOT NULL,
    "municipio" TEXT NOT NULL,
    "uf" TEXT NOT NULL,
    "ddd" TEXT NOT NULL,
    "telefone" TEXT NOT NULL,
    "classe" TEXT NOT NULL,
    "criterio_de_associacao" TEXT NOT NULL,
    "categ_coop_sing" TEXT NOT NULL,
    "filiacao" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "site_da_cooperativa" TEXT NOT NULL,

    CONSTRAINT "Cooperativa_pkey" PRIMARY KEY ("id")
);
