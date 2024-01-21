-- CreateTable
CREATE TABLE "cooperativas" (
    "id" SERIAL NOT NULL,
    "descricao" TEXT NOT NULL,
    "codigos" TEXT NOT NULL,

    CONSTRAINT "cooperativas_pkey" PRIMARY KEY ("id")
);
