-- CreateTable
CREATE TABLE "contatos_favoritos" (
    "id" SERIAL NOT NULL,
    "nome_contato" TEXT NOT NULL,
    "tipo_chave_pix" TEXT NOT NULL,
    "chave_pix" TEXT NOT NULL,
    "cooperado_id" SERIAL NOT NULL,
    "lista_de_chaves" TEXT NOT NULL,

    CONSTRAINT "contatos_favoritos_pkey" PRIMARY KEY ("id")
);
