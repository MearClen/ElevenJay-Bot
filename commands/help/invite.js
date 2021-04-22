const discord = require("discord.js");

module.exports = {
  name: "invite",
  category: "info",
  description: "INVITE ElevenJay BOT",
  run: async (client, message, args) => {
    
    let embed = new discord.MessageEmbed()
    .setTitle(`HERE INVITE LINK OF BOT`)
    .setDescription(`[CLICK HERE](https://discord.com/oauth2/authorize?client_id=787916187610644510&scope=bot&permissions=474172478) OR [support server ](https://discord.gg/kSqAdDCvag)`)
    .setColor("#ff0000")
    .setFooter(`BOT MADE BY 𝕵𝖀𝕸𝖅𝕯𝕰𝕬𝕯#9000`)
    .setTimestamp(message.timestamp = Date.now())
    
    message.channel .send(embed)
    
  
  }
}