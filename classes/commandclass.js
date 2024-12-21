'use strict';
class Command {    
    constructor(bot) {
        this.bot = bot
    }
   registerCommand() {
        this.bot.command(this.name, this.callback)
   }
   registerAction() {
        this.bot.action(this.name, (ctx) => {ctx.answerCbQuery(); this.callback(ctx)})
   }
}
module.exports = Command