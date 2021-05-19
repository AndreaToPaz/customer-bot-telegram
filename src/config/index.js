require('dotenv').config();

const config = {
    dev: process.env.NODE_ENV !=='production',
    port: process.env.PORT || 3000,
    bot: process.env.BOT || "954756061:AAFZk9bC75peZy5NgttburlCCYdYtPquF34"
}

module.exports = { config }