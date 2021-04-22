const { MessageEmbed } = require("discord.js");
const { readdirSync } = require("fs");

module.exports = {
            name: "help",
            aliases: ["h"],
            usage: "[command name] (optional)",
            category: "info",
            description: "help command",
        run: async (client, message, args) => {
      const embed = new MessageEmbed()
      embed.setColor("RED")
      embed.setThumbnail(client.user.displayAvatarURL({format: 'png', dynamic: true})+"?size=2048")
          
embed.setAuthor(`${message.guild.me.displayName}`, message.guild.iconURL())

      embed.setAuthor(`${client.user.username}`, client.user.displayAvatarURL({ dyanmic: true }))
      embed.setDescription(`**This Command List is Bot Prefix Defalut \`e?\` \n
      [Invite Bot](https://discord.com/oauth2/authorize?client_id=787916187610644510&scope=bot&permissions=474172478) | [Website](https://Discord-bot-website-template-2.alvinjumz.repl.co) | [Donate](https://saweria.co/AlvinJumz)**\n`)
          
embed.addField('<:modx:819415976348483614> | Moderation', "`ban`, `unban`, `kick`, `addrole`, `warn`, `lock`, `clear`, `slowmode`, `removerole`, `nuke`")
embed.addField('<a:blob:791494628423368704> | Fun', "`advice`, `fact`, `math`, `meme`, `say`, `dm`")
embed.addField('📸 | Image', "`speed`, `stonks`, `changemymind`, `gay`, `meeting`, `shame`, `smartcat`, `smug`, `tickle`, `slap`, `wasted`, `triggered`")
embed.addField('<a:Cash:806464985831440405> | Economy', "`addmoney`, `balance`, `daily`, `fish`, `beg`, `work`, `deposit`, `pay`, `leaderboard`, `sell`, `roulette`")
embed.addField('<a:ENX_Pin:791289722797686791> | Giveaway', "`start`, `rerroll`, `end`,")
embed.addField('<a:warning:789385238471376927> | Info', "`help`, `emoji`, `invite`, `avatar`, `whois`, `botinfo`, `discord`, `github`, `serverinfo`, `servericon`, `uptime`")
embed.addField('<:singmus:819181212681240676> | Music', "`play`, `stop`, `loop`, `np`, `pause`, `playlist`, `queue`, `remove`, `resume`, `search`, `skip`, `volume`") 
embed.addField('🐶 | Animals', "`Cat`, `Dog`, `panda`, `fox`, `koala`")
embed.addField('<a:nekyu:819537932007243796> | Anime', "`Pat`, `cry`, `hug`, `neko`, `kiss`")
embed.addField('<a:star:789719987844546560> | Main', "`suggest`, `afk`, `translate`")
embed.addField('📌 | Ticket', "`ticket-setup`, `close`")
embed.addField('💾 | Backup', "`set-backup`, `info`, `load`")
embed.addField('<a:ntrb:820484238998241300> | Others', "`invite`, `Vote`, `report`, `Support`, `addemoji`, `emojiinfo`")
embed.setImage("https://cdn.discordapp.com/attachments/833706962066997248/834007812296015872/standard.gif")


embed.setFooter("© ElevenJay", client.user.displayAvatarURL({ dyanmic: true }))
      embed.setTimestamp()
      message.react("<a:mark:819181046741991434>")
      message.channel.send(embed)
        }
};