const Discord = require('discord.js')

module.exports = {
    run: message => {
message.channel.send(new Discord.MessageEmbed()
.setTitle('Role Pays⭐')
.setDescription('Rôles Pays :Cliquez sur la réaction du rôle qui vous correspond\n\n@🃏・Amerique\n\n@🃏・Portugal\n\n@🃏・Espagne\n\n@🃏・Italie\n\n@🃏・Allemagne\n\n@🃏・Algerie\n\n@🃏・Maroc\n\n@🃏・Turquie\n\n@🃏・France')
.setColor('RANDOM'))
    },
    name: 'embedse'
}