-- CreateTable
CREATE TABLE "CompeIspb" (
    "id" TEXT NOT NULL,
    "compe" TEXT NOT NULL,
    "ispb" TEXT NOT NULL,
    "documento" TEXT NOT NULL,
    "nome_longo" TEXT NOT NULL,
    "nome_curto" TEXT NOT NULL,
    "network" TEXT NOT NULL,
    "tipo" TEXT NOT NULL,
    "tipo_pix" TEXT NOT NULL,
    "charge" TEXT NOT NULL,
    "documento_credito" TEXT NOT NULL,
    "cheque_legal" TEXT NOT NULL,
    "detecta_flow" TEXT NOT NULL,
    "portabilidade_salario" TEXT NOT NULL,
    "produtos" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "operacao_iniciada" TEXT NOT NULL,
    "data_pix_iniciada" TEXT NOT NULL,
    "data_registrada" TEXT NOT NULL,
    "data_atualizada" TEXT NOT NULL,

    CONSTRAINT "CompeIspb_pkey" PRIMARY KEY ("id")
);
