const Discord = require("discord.js");

const client = new Discord.Client({

  partials: ["MESSAGE", "USER", "REACTION"]
});
const enmap = require("enmap");
const settings = new enmap({
  name: "settings",
  autoFetch: true,
  cloneLevel: "deep",
  fetchAll: true
});

module.exports = {
  name: "ticket-setup",
  description: "setup the ticketing system",
  run: async (client, message, args) => {
    let channel = message.mentions.channels.first();
    if (!channel) return message.reply("Usage: `>ticket-setup #channel`");

    let sent = await channel.send(
      new Discord.MessageEmbed()
        .setTitle(message.guild)
        .setDescription("React 🎫 to open a ticket!")
        .setFooter(`Ticketing without clutter`, client.user.displayAvatarURL())

        .setColor("00ff00")
    );

    sent.react("🎫");
    settings.set(`${message.guild.id}-ticket`, sent.id);

    message.channel.send("Ticket System Setup Done!");

    client.on("messageReactionAdd", async (reaction, user) => {
      if (user.partial) await user.fetch();
      if (reaction.partial) await reaction.fetch();
      if (reaction.message.partial) await reaction.message.fetch();

      if (user.bot) return;

      let ticketid = await settings.get(`${reaction.message.guild.id}-ticket`);

      if (!ticketid) return;

      if (reaction.message.id == ticketid && reaction.emoji.name == "🎫") {
        reaction.users.remove(user);

        reaction.message.guild.channels
          .create(`ticket-${user.username}`, {
            permissionOverwrites: [
              {
                id: user.id,
                allow: ["SEND_MESSAGES", "VIEW_CHANNEL"]
              },
              {
                id: reaction.message.guild.roles.everyone,
                deny: ["VIEW_CHANNEL"]
              }
            ],
            type: "text"
          })
          .then(async channel => {
            channel.send(
              `<@${user.id}>`,
              new Discord.MessageEmbed()
                .setTitle("Welcome to your ticket!")
                .setDescription("We will be with you shortly")
              .setFooter("`>close` to close the ticket")
                .setColor("00ff00")
            );
          });
      }
    });
  }
};
