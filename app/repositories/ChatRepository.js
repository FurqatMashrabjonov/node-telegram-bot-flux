import {PrismaClient} from "@prisma/client";
import {re} from "prisma/build/child.js";

export default class ChatRepository {
    constructor() {
        this.db = new PrismaClient()
    }
    async create(chatId) {
        let chat = this.get(chatId)
        if (!chat){
            chat = await this.db.chat.create({
                data: {
                    chat_id: chatId
                }
            })
        }
        return chat
    }

    exists(chatId) {
        return this.get(chatId) !== null
    }

    get(chatId) {
        return this.db.chat.findFirst({
            where: {
                chatId: chatId
            }
        })
    }
}