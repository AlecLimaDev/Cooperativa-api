-- CreateTable
CREATE TABLE "Conglomerado" (
    "id" TEXT NOT NULL,
    "nome_do_conglomerado" TEXT NOT NULL,
    "classe_do_conglomerado" TEXT NOT NULL,
    "cnpj_participante" TEXT NOT NULL,
    "nome_do_participante" TEXT NOT NULL,
    "tipo_participacao" TEXT NOT NULL,
    "data_inicio" TIMESTAMP(3) NOT NULL,
    "uf" TEXT NOT NULL,

    CONSTRAINT "Conglomerado_pkey" PRIMARY KEY ("id")
);
