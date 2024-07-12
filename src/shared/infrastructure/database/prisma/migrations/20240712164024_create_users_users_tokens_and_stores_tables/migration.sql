-- CreateEnum
CREATE TYPE "UserRoles" AS ENUM ('OWNER', 'ADMIN', 'USER', 'ASSISTANT', 'SELLER', 'SUPERVISOR', 'DIRECTOR', 'FINANCIAL', 'HR', 'SAC', 'GUEST');

-- CreateEnum
CREATE TYPE "UserSectors" AS ENUM ('MANAGER', 'DIRECTOR', 'ASSISTANT', 'IT', 'MARKETING', 'SALES', 'BILLING', 'FINANCE', 'HR', 'SAC', 'GUEST');

-- CreateTable
CREATE TABLE "users_tokens" (
    "id" UUID NOT NULL,
    "token" UUID NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "user_id" UUID NOT NULL,

    CONSTRAINT "users_tokens_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "users" (
    "id" UUID NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "status" BOOLEAN NOT NULL DEFAULT false,
    "password" VARCHAR(100) NOT NULL,
    "avatar" VARCHAR(255),
    "roles" "UserRoles"[] DEFAULT ARRAY['USER']::"UserRoles"[],
    "sectors" "UserSectors"[] DEFAULT ARRAY['GUEST']::"UserSectors"[],
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "store_id" UUID,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "stores" (
    "id" UUID NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "document" VARCHAR(14) NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "instagram" VARCHAR(255),
    "address" VARCHAR(255) NOT NULL,
    "cep" VARCHAR(255) NOT NULL,
    "city" VARCHAR(255) NOT NULL,
    "state" VARCHAR(255) NOT NULL,
    "logo" VARCHAR(255) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "stores_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "stores_document_key" ON "stores"("document");

-- AddForeignKey
ALTER TABLE "users_tokens" ADD CONSTRAINT "users_tokens_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "users" ADD CONSTRAINT "users_store_id_fkey" FOREIGN KEY ("store_id") REFERENCES "stores"("id") ON DELETE SET NULL ON UPDATE CASCADE;
