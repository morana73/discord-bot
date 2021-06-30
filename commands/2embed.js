const Discord = require('discord.js')

module.exports = {
    run: message => {
message.channel.send(new Discord.MessageEmbed()
.setTitle('Role Activité 🏆')
.setDescription('Voici les roles qui vous seront attribué suivant vos heure de jeu')
.setColor('RANDOM')
.addField('Premier role', 'Le 🗺️・Voyageur 👉 Niveau 5h/10h ')
.addField('Deuxieme role','Le 🕠・Nouveaux 👉 niveau 10/20h')
.addField('Troisieme role','L\'⛩️・Habitué 👉 niveau 20/30h')
.addField('Quatrieme role', 'L\'☄️・Integré 👉 niveau 30/40h')
.addField('Et le cinquieme et dernier role', 'Le 🏷️・Vip 👉 niveau 40/55h')
.setAuthor('𝕲𝕬𝖂l ℳ𝓸𝓻𝓪𝓷𝓪','https://discord.com/assets/652f40427e1f5186ad54836074898279.png','https://discord.com/guidelines')
.setFooter('Mon bot perso','https://discord.com/assets/652f40427e1f5186ad54836074898279.png')
.setTimestamp()
.setURL('https://discord.com/guidelines'))
    },
    name: 'embedd2'
}