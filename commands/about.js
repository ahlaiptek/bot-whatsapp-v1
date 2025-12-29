require("dotenv").config()

module.exports = {
    response: async ({message}, next) => {
        return `DEV: @${process.env.dev_id}\n@${process.env.owner_id}`
    },
    options: {
        aliases: ["owner"],
        description: "get information about devoloper and owner"
    }
}