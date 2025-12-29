const {dev, owners} = require("../bot")

module.exports = {
    response: async ({message, captures}, next) => {
        return `@${dev.split("@")[0]} - DEV\n@${owenrs[0].split("@")[0]} - OWNER`
    }
}