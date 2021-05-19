const invitation = (bot,order) => {

    bot.command('invitar_cliente', async (ctx) => {
		bot.telegram.sendMessage(order.chat_id_cliente,
			`\nUsando este link, entrara en un grupo con servicio al cliente para estar al tanto de la orden: ${order.order_id}` + `\n` +
			await (await (bot.telegram.createChatInviteLink(ctx.chat.id))).invite_link
		)
	})

	bot.command('invitar_repartidor', async (ctx) => {
		bot.telegram.sendMessage(order.chat_id_repartidor,
			`\nUsando este link, entrara en un grupo con su cliente y servicio al cliente para estar al tanto de la orden: ${order.order_id}` + `\n` +
			await (await (bot.telegram.createChatInviteLink(ctx.chat.id))).invite_link
		)
	})

}
module.exports = {invitation}