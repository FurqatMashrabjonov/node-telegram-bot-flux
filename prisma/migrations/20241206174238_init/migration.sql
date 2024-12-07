/*
  Warnings:

  - A unique constraint covering the columns `[chat_id]` on the table `Prompt` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `chat_id` to the `Prompt` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Prompt" ADD COLUMN     "chat_id" TEXT NOT NULL,
ALTER COLUMN "prompt" DROP NOT NULL,
ALTER COLUMN "model" DROP NOT NULL,
ALTER COLUMN "size" DROP NOT NULL,
ALTER COLUMN "size" DROP DEFAULT,
ALTER COLUMN "lora" DROP NOT NULL,
ALTER COLUMN "lora" DROP DEFAULT,
ALTER COLUMN "style" DROP NOT NULL,
ALTER COLUMN "style" DROP DEFAULT,
ALTER COLUMN "color" DROP NOT NULL,
ALTER COLUMN "color" DROP DEFAULT,
ALTER COLUMN "lighting" DROP NOT NULL,
ALTER COLUMN "lighting" DROP DEFAULT;

-- CreateTable
CREATE TABLE "Chat" (
    "id" SERIAL NOT NULL,
    "chat_id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Chat_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Chat_chat_id_key" ON "Chat"("chat_id");

-- CreateIndex
CREATE UNIQUE INDEX "Prompt_chat_id_key" ON "Prompt"("chat_id");
