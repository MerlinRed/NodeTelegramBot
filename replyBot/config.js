const { Telegraf } = require('telegraf')
const dotenv = require('dotenv')

const TOKEN = dotenv.config({path: '.env'}).parsed.TOKEN
module.exports.bot = new Telegraf(TOKEN)
