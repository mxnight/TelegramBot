const { Telegraf } = require('telegraf');


const {config} = require("dotenv")
const cfg = require("./config")
const actionsHandler = require("./handlers/actions_handler");

config()

const bot = new Telegraf(process.env.TOKEN)
bot.config = cfg

bot.start((ctx) => {
    ctx.reply('Welcome! This is a telegram bot base using classes', {
        reply_markup: {
        inline_keyboard: [
            [{ text: 'test', callback_data: 'test' }],
            [{ text: 'Help', callback_data: 'help' }],
        ],
        },
    });
});

process.on('uncaughtException', console.error)
process.on('unhandledRejection', console.error)

bot.launch(() => {
    console.log("The bot has been successfully launched!")
    actionsHandler(bot)
}).then().catch(console.error)