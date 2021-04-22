const Discord = require('discord.js')

const moment = require('moment')//npm i moment

module.exports = {

            name: "emojiinfo",

            aliases: ["emoteid"],

            usage: "[command name] (optional)",

            category: "info",

            description: "Displays all commands that the karma has.",

        run: async (client, message, args) => {

        let emojiName = args.join(" ");

        let emoji = message.guild.emojis.cache.get(args[0]) || message.guild.emojis.cache.find(emoji => emoji.name === `${emojiName}`) 

        if (!args[0]) return message.channel.send("Please provide an emoji name or id!")

        if (!emoji) return message.channel.send("Please provide a **valid** emoji name or id!")

        let xd;

        if(emoji.animated) xd = "Yes"

        if(!emoji.animated) xd = 'No'

        let embed = new Discord.MessageEmbed()

            .addField("Name", `${emoji.name}`)

            .addField("Emoji id", `${emoji.id}`)

            .addField("Outlook", `${emoji}`)

            .addField("Created at", `${moment(emoji.createdTimestamp).format('LT')} ${moment(emoji.createdTimestamp).format('LL')} ${moment(emoji.createdTimestamp).fromNow()}`)

            .addField("Guild", message.guild.name)

            .addField("animated?", xd)

            .setThumbnail(emoji.url)

            .setColor("RANDOM")

            .addField("Format", `\`<:${emoji.name}:${emoji.id}>\``)

            .addField("URL", `[click here](${emoji.url})`)

        message.channel.send(embed)

    }

}

