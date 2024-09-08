-- CreateTable
CREATE TABLE "grupos_de_produtos" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,

    CONSTRAINT "grupos_de_produtos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "produtos" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "preco_em_centavos" INTEGER NOT NULL,
    "grupo_de_produtos_id" TEXT NOT NULL,

    CONSTRAINT "produtos_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "grupos_de_produtos_nome_key" ON "grupos_de_produtos"("nome");

-- AddForeignKey
ALTER TABLE "produtos" ADD CONSTRAINT "produtos_grupo_de_produtos_id_fkey" FOREIGN KEY ("grupo_de_produtos_id") REFERENCES "grupos_de_produtos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
