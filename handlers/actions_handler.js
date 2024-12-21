const fs = require("fs")

module.exports = (bot) => {
    fs.readdirSync("./actions").forEach(async file => {
        const commandFile = require(`../actions/${file}`)
        new commandFile(bot)
    })
}