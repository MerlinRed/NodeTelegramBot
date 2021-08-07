const translate = require('translate')
const {
    bot
} = require('./config')


bot.start(ctx => {
    const text = 'Бот щебеталка, умеет поддакивать и поддерживать разговор'
    return ctx.reply(text)
})

bot.on('new_chat_member', ctx => {
    const text = `Добро пожаловать - ${ctx.message.new_chat_member.first_name}\n Или лучше вас называть - ${ctx.message.new_chat_member.username}`
    return ctx.reply(text)
})

bot.on('text', ctx => {
    const reply = Math.round(Math.random()) + Math.round(Math.random()) + Math.round(Math.random())

    if (ctx.message.text.toLowerCase().includes('да?')) {
        return bot.telegram.sendMessage(ctx.message.chat.id, 'да!', {
            reply_to_message_id: ctx.message.message_id
        })
    } else if (ctx.message.text.toLowerCase().includes('пидор')) {
        return bot.telegram.sendMessage(ctx.message.chat.id, '+', {
            reply_to_message_id: ctx.message.message_id
        })
    } else if (reply === 3) {
        return bot.telegram.sendMessage(ctx.message.chat.id, 'Дааа...Понимаю', {
            reply_to_message_id: ctx.message.message_id
        })
    }
})

bot.startPolling()