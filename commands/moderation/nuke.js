module.exports = {
  name: "nuke",
  description: "Nuke the current channel, delete all messages of the channel",
  category: "moderation",
  run: async (client, message) => {
    if (!message.guild.me.hasPermission("MANAGE_CHANNELS"))
      return message.channel.send(
        `I dont have the correct permissions for this!`
      );

    const user = message.member;
    if (!user.hasPermission("MANAGE_CHANNELS"))
      return message.channel.send(
        "You don't have the correct permissions for that!"
      );

    let channel = client.channels.cache.get(message.channel.id);
    const position = channel.position;
    const topic = channel.topic;

    const channel2 = await channel.clone();

    channel2.setPosition(position);
    channel2.setTopic(topic);
    channel.delete();
    channel2.send(`**Channel has been nuked!**\nhttps://imgur.com/LIyGeCR`);
  },
};