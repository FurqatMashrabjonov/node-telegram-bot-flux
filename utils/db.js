import { PrismaClient } from '@prisma/client';

export default class Db {
    constructor() {
        const prisma = new PrismaClient()
        const chat = prisma.chat.create({
            data: {
                chat_id: '342342',
            }
        })

        console.log(chat.then(r => console.log(r)))
    }

}