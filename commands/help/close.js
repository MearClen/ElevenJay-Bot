const Discord = require("discord.js");

module.exports = {
  name: "close",
  aliases: ["close"],
run: async (bot, message, args) => { 
if(!message.channel.name.includes("ticket-")) return message.channel.send("You cannot use that here!")
        message.channel.delete();
}
}