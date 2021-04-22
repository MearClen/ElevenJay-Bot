const { Client, Message, MessageEmbed } = require("discord.js");

module.exports = {
  name: "say",
  category: "fun",
  description: "Make the bot say something",
  usage: "say <anything>",
  /**
   * @param {Client} client
   * @param {Message} message
   * @param {String[]} args
   */
  run: async (client, message, args) => {
    const sayEmbed = new MessageEmbed()
        .setAuthor(message.author.tag, message.author.displayAvatarURL({ dyanmic: true }))
        .setDescription(args.join(" "))
        .setTimestamp()
        .setColor("#ff0000")
        let msg;
        let textChannel = message.mentions.channels.first()
        message.delete()

    message.channel.send(sayEmbed)
  },
};
