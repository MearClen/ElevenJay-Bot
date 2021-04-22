const {MessageEmbed} = require("discord.js")
module.exports = {
            name: "report",
            aliases: ["bugs", "reportbug"],
            usage: "[command name] (optional)",
            category: "other",
            description: "by bdrxzar",
        run: async (client, message, args) => {
    const channel = client.channels.cache.get("818699524465492018")
    const error = new MessageEmbed()
    .setTitle("Error!")
    .setDescription("What part of the bot is not working?")
    .setThumbnail(message.author.displayAvatarURL({dynamic: true}))
    .setColor("RED")
    if(!args[0]) return message.react(":wrong:") && message.author.send(error)
    const embed1 = new MessageEmbed()
    .setTitle("Bug Report Has Been Sent!")
    .setDescription(":CheckMark: Your report was sucessfully sent!")
    .setThumbnail(message.author.displayAvatarURL({dynamic: true}))
    .setColor("BLACK")
    message.react(":CheckMark:")
    message.author.send(embed1)
    const embed2 = new MessageEmbed()
    .setTitle("New Bug Report!")
    .addField("Bug: ", args[0])
    .setColor("RANDOM")
    .setFooter(`This bug report was created by: ${message.author.tag}`)
    
    channel.send(embed2)


  }
}
