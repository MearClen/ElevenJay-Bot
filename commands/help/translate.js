const { MessageEmbed } = require("discord.js");
const translate = require("@k3rn31p4nic/google-translate-api");

module.exports = {
  name: "translate",
  category: "main",
  description: "google translate",
  run: async (client, message, args) => {
        const result = await translate(args.slice(1).join(" "), { to: args[0] });
        const embed = new MessageEmbed()
            .setDescription(result.text)
            .setColor("RANDOM")
            .setFooter(message.author.username)
            .setTimestamp()
            .setTitle("Google Translate");

        message.channel.send(embed);
    }
};