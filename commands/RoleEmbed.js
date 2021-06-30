const Discord = require('discord.js')

module.exports = {
    run: message => {
message.channel.send(new Discord.MessageEmbed()
.setTitle('Role Situation🍥')
.setDescription('Rôles Situation :Cliquez sur la réaction du rôle qui vous correspond\n\n@❤️・En couple\n@💔・Célibataire\n@💨・Compliqué')
.setColor('RANDOM'))
    },
    name: 'embed'
}