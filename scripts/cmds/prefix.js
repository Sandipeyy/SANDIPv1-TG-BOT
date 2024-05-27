const config = require('../../config.json');

module.exports = {
    config: {
        name: "prefix",
        author: "Sandip Gurung",
        description: "bot prefix",
        category: "utility",
        usage: "prefix",
        usePrefix: false
    },
    onStart: async function ({ bot, chatId }) {
        bot.sendMessage(chatId, `🌐 System prefix: ${config.prefix}`);
    }
};
