const commands = require("wachan/commands")

module.exports = {
    response: async ({message, captures}, next) => {
        const menu = commands.generateMenu(
            options = {
                prefix: captures.prefix
            }
        )

        return menu
    },
    options: {
        description: "To see the menu",
        sectionName: "General Menu"
    }
}