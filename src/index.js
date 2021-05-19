const { config } = require('./config/index')
const { Telegraf } = require('telegraf')
const bot = new Telegraf(config.bot)
 

//^ CONSTRUCCION DE LA INTERACCION 
const { init } = require('./bot/commands/init')
const { user_message } = require ('./bot/actions/message')
const { help } = require('./bot/commands/help')
const { invitation } = require('./bot/commands/invitation')
const { kick_out } = require('./bot/commands/kickOut')
//^ 

//& Dato obtenido del sample - order.json
const order = require('./sample/order.json');
const servicio = require('./sample/Service.json');


try {
	init(bot);
	help(bot,servicio);
	user_message(bot, order);
	invitation(bot, order);
	kick_out(bot,order); 
	bot.launch()
	console.log('init success');
	
} catch (error) {
	console.error(error)
}

module.exports = { bot }