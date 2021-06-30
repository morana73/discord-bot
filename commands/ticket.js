const config = require('../config.json')
fs = require('fs'),
Discord = require('discord.js')

module.exports = {
    run: async (message, args, client) => {
        if  ( Object . values ( client. db . tickets ) . some ( ticket => ticket. author  === message. author . id ) )  return message.channel.send('vous avez deja un ticket ouvert')
        const channel = await message.guild.channels.create(`OUVERT ${message.author.username}`,{
            type: 'test',
            parent: config.ticket.category,
            permissionOverwrites: [{
                id: message.guild.id,
                deny: 'VIEW_CHANNEL'
            }, {
                id: message.author.id,
                allow: 'VIEW_CHANNEL'
            }, ...config.ticket.roles.map(id => ({
                id,
                allow: 'VIEW_CHANNEL'
            }))]
        })
        client.db.tickets[channel.id] = {
            author: message.author.id
        }
        fs.writeFileSync('./db.json', JSON.stringify(client.db))
        channel.send(new Discord.MessageEmbed()
            .setDescription(`Bonjour ${message.member}, bienvenue dans votre ticket. Nous allons nous occuper de vous.`))
        message.channel.send(`Votre ticket ${channel} a été créé !`)
    },
    name: 'ticket',
    guildOnly: true
}