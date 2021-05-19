const init = (bot) => {
    bot.start((ctx) => {
        ctx.reply (`Bienvenid@!${ctx.chat.first_name}`+
        	`\nPara poder usar Raudo Bot, debe validar tu identidad!`+
        	`\nEscriba por favor su numero de telefono para enviarle el codigo de validacion usando el comando /enviar_codigo. Por ejemplo:` +
			`\n/enviar_codigo XXXXXXXXXXX`)
	})
	bot.command('enviar_codigo', (ctx) => {
		ctx.reply(`Un poco mas ${ctx.chat.first_name}`+
		`\nIngrese el codigo enviado a su telefono usando el comando /codigo`+
		`\nPor ejemplo /codigo XXXXXXXXX`)
						//numero de telefono ingresaso en el chat
		const numUser = (ctx.message.text).split(' ').slice(1).toString();
		console.log(numUser)
						//chat id de la persona
		const chat_id = ctx.chat.id
		console.log (chat_id)
	})
	bot.command('codigo', (ctx) => {
		ctx.reply(`Listo! ${ctx.chat.first_name}`+
			`\nSe a confirmado su identidad, para conocer las acciones que puede hacer con el bot escriba el comando /ayuda`)
		const chat_id = ctx.chat.id
		console.log (chat_id)
	})
}

module.exports = {init}