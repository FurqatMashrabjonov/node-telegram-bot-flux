import dotenv from 'dotenv';
import { Telegraf } from 'telegraf'
import { message } from 'telegraf/filters'
import FluxAiApi from "./utils/flux-ai-api.js";
import Caption from "./utils/caption.js";

dotenv.config()

const token = process.env.TELEGRAM_TOKEN
const bot = new Telegraf(token)

bot.command('start', async (ctx) => {
    await ctx.reply('So\'rovingizni yuboring')
});
bot.on(message('text'), async (ctx) => {
    const prompt = ctx.message.text
    // const db = new Db()
    const message = ctx.reply('Sabr...')
    //send chat action about sending image

    const response = await FluxAiApi.getResponse(ctx.message.text)
    const base64Data = response.result.split(',')[1];

    const imageBuffer = Buffer.from(base64Data, 'base64');

    await ctx.replyWithPhoto({ source: imageBuffer }, { caption: Caption.getCaption(prompt, parseFloat(parseInt(response.processingTime).toFixed(2))) , parse_mode: 'Markdown' });
    ctx.deleteMessage(message.message_id)
})





bot.launch().then(r => console.log('Bot started'))