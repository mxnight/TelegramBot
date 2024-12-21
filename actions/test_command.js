const Command = require('../classes/commandclass');

class TestCmd extends Command {
    name = "test"
    callback = function(ctx) {
        ctx.reply('working!')
    }
    constructor(bot) {
        super(bot)
        this.name = this.name
        this.callback = this.callback
        this.registerCommand()
        this.registerAction()
    }
}

module.exports = TestCmd