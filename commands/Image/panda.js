const axios = require('axios');
const { MessageEmbed } = require('discord.js');

module.exports = {
    name: "panda",
    category: "animals",
    run: async (client, message, args) => {
        const url = "https://some-random-api.ml/img/panda "
        
        let image, response;
        
        try {
            response = await axios.get(url);
            image = response.data;

            

        } catch (e) {
            return message.channel.send(`An error occured, please try again!`)
        }

        const embed = new MessageEmbed()
            .setTitle(`Random Panda Image 🐼  `)
            .setAuthor(`Requested By: ${message.author.tag}`, message.author.displayAvatarURL())
            .setColor(`#f3f3f3`)
            .setImage(image.link)

        await message.channel.send(embed)
    }
}
