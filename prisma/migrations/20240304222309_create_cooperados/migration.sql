-- CreateTable
CREATE TABLE "cooperados" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "conta_corrente" TEXT NOT NULL,
    "cooperativa_id" TEXT NOT NULL,

    CONSTRAINT "cooperados_pkey" PRIMARY KEY ("id")
);
