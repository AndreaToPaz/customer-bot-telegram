const help = (bot, servicio) => {
    bot.command('ayuda', (ctx) => {
		if (ctx.chat.type == 'group') {
			ctx.reply(`hola!`+
			`\nPuede realizar las siguientes acciones con el Bot en este grupo:`+
			`\n/invitar_cliente - Para invitar al cliente al grupo`+
			`\n/invitar_repartidor - Para invitar al repartidor al grupo`+
			`\n/eliminar_cliente - Para eliminar al cliente al grupo`+
			`\n/eliminar_repartidor - Para eliminar al repartidor al grupo`+
			`\n/eliminar_bot - Para eliminarme del grupo`+
			
			`\nPara que los comandos funcionen el bot debe ser administrador.`+
			`\nrecuerde borrar el chat cuando haya cumplido su funcion.`)
		}
		else if (ctx.chat.type == 'private') {
			ctx.reply(`Listo! ${ctx.chat.first_name}`+
			`\nPuede realizar las siguientes acciones con este Bot: `+
			`\n/reportar - notifica al equipo que tiene un problema con la aplicacion`+
			`\n/informacion - notifica al equipo que necesita informacion`+
			`\nEscriba los comandos y luego el reporte o informacion que necesita, como por ejemplo:`+
			`\n/reportar Tengo un problem con..`)
		 }
		
	})

	bot.command('reportar', (ctx) => {
		ctx.reply(`Listo! ${ctx.chat.first_name}`+
			`\nSu reporte fue enviado al equipo tecnico, pronto contactaran con usted`)
		bot.telegram.sendMessage(servicio.chat_id,
			`\nCodigo: ${ctx.chat.id}`+
			`\nNombre: ${ctx.chat.first_name}`+
			`\nReporta: ${ctx.message.text}`+
			`\nPara contestar este reporte cree un grupo y agregue al bot, use el comando /responder_reporte, seguido de poner el codigo, para agregar a la persona al grupo. Por ejemplo`+
			`\n/responder_reporte XXXXXXXXX`+
			`\nRecuerde que el bot debe ser administrador para que el comando funcione.`)
	})

	bot.command('informacion', (ctx) => {
		ctx.reply(`Listo! ${ctx.chat.first_name}`+
			`\nSu pregunta fue enviado al equipo tecnico, pronto contactaran con usted`)
		
		bot.telegram.sendMessage(servicio.chat_id,
				`\nCodigo: ${ctx.chat.id}`+
				`\nNombre: ${ctx.chat.first_name}`+
				`\nPregunta: ${ctx.message.text}`+
				`\nPara contestar esta pregunta cree un grupo y agregue al bot, use el comando /responder_informacion, seguido de poner el codigo, para agregar a la persona al grupo. Por ejemplo`+
				`\n/responder_informacion XXXXXXXXX`+
				`\nRecuerde que el bot debe ser administrador para que el comando funcione.`)
	})

	bot.command('responder_reporte', async (ctx) => {
		const chat_id = (ctx.message.text).split(' ').slice(1).toString();

		bot.telegram.sendMessage(chat_id, `Hola` +
			`\nUsando este link, entrara en un grupo con servicio al cliente de Raudo para discutir su problema ` + `\n` +
			await (await (bot.telegram.createChatInviteLink(ctx.chat.id))).invite_link
		)
	})
	
	bot.command('responder_informacion', async (ctx) => {
		const chat_id = (ctx.message.text).split(' ').slice(1).toString();

		bot.telegram.sendMessage(chat_id, `Hola` +
			`\nUsando este link, entrara en un grupo con servicio al cliente de Raudo para discutir su pregunta ` + `\n` +
			await (await (bot.telegram.createChatInviteLink(ctx.chat.id))).invite_link
		)
	})

}
module.exports = {help}