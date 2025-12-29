const bot = require("../bot.js")

module.exports = {
    response: async ({message}, next) => {
        console.log(bot)
        return "Fixing"
    },
    options: {
        aliases: ["owner"],
        description: "get information about devoloper and owner"
    }
}