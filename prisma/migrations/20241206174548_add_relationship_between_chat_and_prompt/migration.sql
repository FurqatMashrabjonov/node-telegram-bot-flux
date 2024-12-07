-- AddForeignKey
ALTER TABLE "Prompt" ADD CONSTRAINT "Prompt_chat_id_fkey" FOREIGN KEY ("chat_id") REFERENCES "Chat"("chat_id") ON DELETE RESTRICT ON UPDATE CASCADE;
