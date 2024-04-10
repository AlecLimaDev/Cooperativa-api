-- CreateTable
CREATE TABLE "contato_favorito" (
    "id" TEXT NOT NULL,
    "nome_contato" TEXT NOT NULL,
    "tipo_chave_pix" TEXT NOT NULL,
    "chave_pix" TEXT NOT NULL,

    CONSTRAINT "contato_favorito_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "cooperados" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "conta_corrente" TEXT NOT NULL,

    CONSTRAINT "cooperados_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "bancos" (
    "id" TEXT NOT NULL,
    "cnpj" TEXT NOT NULL,
    "nome_constituicao" TEXT NOT NULL,
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

    CONSTRAINT "bancos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "user" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "cooperativas" (
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

    CONSTRAINT "cooperativas_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "sociedades" (
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
    "String" TEXT NOT NULL,
    "municipio_ibge" TEXT NOT NULL,

    CONSTRAINT "sociedades_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "consorcios" (
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

    CONSTRAINT "consorcios_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "conglomerado" (
    "id" TEXT NOT NULL,
    "nome_do_conglomerado" TEXT NOT NULL,
    "classe_do_conglomerado" TEXT NOT NULL,
    "cnpj_participante" TEXT NOT NULL,
    "nome_do_participante" TEXT NOT NULL,
    "tipo_participacao" TEXT NOT NULL,
    "data_inicio" TIMESTAMP(3) NOT NULL,
    "uf" TEXT NOT NULL,

    CONSTRAINT "conglomerado_pkey" PRIMARY KEY ("id")
);
