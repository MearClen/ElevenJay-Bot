const db = require("quick.db")
const { default_prefix } = require("../../config.json")

module.exports = {
  name: "prefix",
  category: "moderation",
  usage: "prefix <-prefix>",
  description: "Change Guild's Prefix to What u Want.",
  authorPermission: ["ADMINISTRATOR"],
  run: async (client, message, args) => {
    
    if(!args[0]) {
      return message.channel.send("Please give the prefix that you want to set")
    } 
    
    if(args[1]) {
      return message.channel.send("You can't set Prefix a Double Argument")
    }
    
    if(args[0].length > 3) {
      return message.channel.send("You can't set Prefix which is Having more than 3 Characters.")
    }
    
    if(args.join("") === default_prefix) {
      db.delete(`prefix_${message.guild.id}`)
     return await message.channel.send("Reseted Prefix ✅")
    }
    
    db.set(`prefix_${message.guild.id}`, args[0])
  await message.channel.send(`Prefix has been Setted to \`${args[0]}\``)
    
  }
}