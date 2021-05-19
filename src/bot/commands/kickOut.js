const kick_out = (bot, order) => {
    
	bot.command('eliminar_cliente',  (ctx) => {
		bot.telegram.kickChatMember(ctx.chat.id, order.chat_id_cliente)
		ctx.reply('Cliente eliminado')
		
	})

	bot.command('eliminar_repartidor', async (ctx) => {
		bot.telegram.kickChatMember(ctx.chat.id, order.chat_id_repartidor)
		ctx.reply('repartidor eliminado')
		
	})

	bot.command('eliminar_bot', async (ctx) => {
		ctx.reply('adios, recuerde borrar el grupo')
		bot.telegram.leaveChat(ctx.chat.id)
		
	})
	
}
module.exports = {kick_out}