const  user_message = (bot, order) => {
    bot.telegram.sendMessage(order.chat_id_cliente,
        `Hola! \nCompro la order : ${order.order_id}. \npronto servicio al cliente contactara con usted para estar al tanto de la compra.`)
    bot.telegram.sendMessage(order.chat_id_repartidor,
        `Hola! \nrepartira la order : ${order.order_id}. \npronto servicio al cliente contactara con usted para estar al tanto de la compra.`)
    
    bot.telegram.sendMessage(order.chat_id_customerService,
        `Se compro la order : ${order.order_id}.` +
        `\nSe necesita que cree un grupo, luego de esto agregue al bot.`+
        `\nEscriba el comando /ayuda para saber las acciones que puede realizar el bot en el grupo.` +
        `\nPara que los comandos funcionen en el grupo el bot debe ser administrador.`)
}

module.exports = {user_message}