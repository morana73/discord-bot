const { name } = require('./commands/bonjour')

const Discord = require('discord.js'),
client = new Discord.Client({
    fetchAllMembers: true,
    partials: ['MESSAGE', 'REACTION'],
    partials: ['MESSAGE', 'REACTION']
}),
config = require('./config.json'),
fs = require('fs')

client.login(config.token)
client.commands = new Discord.Collection()

fs.readdir('./commands', (err, files) => {
    if (err) throw err
    files.forEach(file => {
        if (!file.endsWith('.js')) return
        const command = require(`./commands/${file}`)
        client.commands.set(command.name, command)
    })
})

client.on('message', message => {
    if (message.type !== 'DEFAULT' || message.author.bot) return

    const args = message.content.trim().split(/ +/g)
    const commandName = args.shift().toLowerCase()
    if (!commandName.startsWith(config.prefix)) return
    const command = client.commands.get(commandName.slice(config.prefix.length))
    if (!command) return
    if (command.guildOnly && !message.guild) return message.channel.send('cette comande ne peut etre utilisé que dans un serveur.')
    command.run(message, args, client)
})

client.on('guildMemberAdd', member => {
    member.guild.channels.cache.get(config.greeting.channel).send(`${member}a rejoin le serveur. Nous sommes maintenant ${member.guild.memberCount} ! 🥴`)
    member.roles.add(config.greeting.role)
})

client.on('guildMemberRemove', member => {
    member.guild.channels.cache.get(config.greeting.channel).send(`${member.user.tag}dommage que ca ne ta pas plus...😢`)
})

client.on('messageReactionAdd', (reaction,user) => {
    if (!reaction.message.guild || user.bot) return
    const reactionRoleElem = config.reactionRole[reaction.message.id]
    if (!reactionRoleElem) return
    const prop = reaction.emoji.id ? 'id' : 'name'
    const emoji = reactionRoleElem.emojis.find(emoji => emoji[prop] === reaction.emoji[prop])
    if (emoji) reaction.message.guild.member(user).roles.add(emoji.roles)
    else reaction.users.remove(user)
})

client.on('messageReactionRemove', (reaction,user) => {
    if (!reaction.message.guild || user.bot) return
    const reactionRoleElem = config.reactionRole[reaction.message.id]
    if (!reactionRoleElem || !reactionRoleElem.removable) return
    const prop = reaction.emoji.id ? 'id' : 'name'
    const emoji = reactionRoleElem.emojis.find(emoji => emoji[prop] === reaction.emoji[prop])
    if (emoji) reaction.message.guild.member(user).roles.remove(emoji.roles)
})

client.on('messageReactionAdd', (reaction,user) => {
    if (!reaction.message.guild || user.bot) return
    const reactionRoleElem = config.reactionRoles[reaction.message.id]
    if (!reactionRoleElem) return
    const prop = reaction.emoji.id ? 'id' : 'name'
    const emoji = reactionRoleElem.emojis.find(emoji => emoji[prop] === reaction.emoji[prop])
    if (emoji) reaction.message.guild.member(user).roles.add(emoji.roles)
    else reaction.users.remove(user)
})

client.on('messageReactionRemove', (reaction,user) => {
    if (!reaction.message.guild || user.bot) return
    const reactionRoleElem = config.reactionRoles[reaction.message.id]
    if (!reactionRoleElem || !reactionRoleElem.removable) return
    const prop = reaction.emoji.id ? 'id' : 'name'
    const emoji = reactionRoleElem.emojis.find(emoji => emoji[prop] === reaction.emoji[prop])
    if (emoji) reaction.message.guild.member(user).roles.remove(emoji.roles)
})

client.on('messageReactionAdd', (reaction,user) => {
    if (!reaction.message.guild || user.bot) return
    const reactionRoleElem = config.RectionRoles[reaction.message.id]
    if (!reactionRoleElem) return
    const prop = reaction.emoji.id ? 'id' : 'name'
    const emoji = reactionRoleElem.emojis.find(emoji => emoji[prop] === reaction.emoji[prop])
    if (emoji) reaction.message.guild.member(user).roles.add(emoji.roles)
    else reaction.users.remove(user)
})

client.on('messageReactionRemove', (reaction,user) => {
    if (!reaction.message.guild || user.bot) return
    const reactionRoleElem = config.RectionRoles[reaction.message.id]
    if (!reactionRoleElem || !reactionRoleElem.removable) return
    const prop = reaction.emoji.id ? 'id' : 'name'
    const emoji = reactionRoleElem.emojis.find(emoji => emoji[prop] === reaction.emoji[prop])
    if (emoji) reaction.message.guild.member(user).roles.remove(emoji.roles)
})

client.on('messageReactionAdd', (reaction,user) => {
    if (!reaction.message.guild || user.bot) return
    const reactionRoleElem = config.RreactionRole[reaction.message.id]
    if (!reactionRoleElem) return
    const prop = reaction.emoji.id ? 'id' : 'name'
    const emoji = reactionRoleElem.emojis.find(emoji => emoji[prop] === reaction.emoji[prop])
    if (emoji) reaction.message.guild.member(user).roles.add(emoji.roles)
    else reaction.users.remove(user)
})

client.on('messageReactionRemove', (reaction,user) => {
    if (!reaction.message.guild || user.bot) return
    const reactionRoleElem = config.RreactionRole[reaction.message.id]
    if (!reactionRoleElem || !reactionRoleElem.removable) return
    const prop = reaction.emoji.id ? 'id' : 'name'
    const emoji = reactionRoleElem.emojis.find(emoji => emoji[prop] === reaction.emoji[prop])
    if (emoji) reaction.message.guild.member(user).roles.remove(emoji.roles)
})

client.on('messageReactionAdd', (reaction,user) => {
    if (!reaction.message.guild || user.bot) return
    const reactionRoleElem = config.ColorsRoles[reaction.message.id]
    if (!reactionRoleElem) return
    const prop = reaction.emoji.id ? 'id' : 'name'
    const emoji = reactionRoleElem.emojis.find(emoji => emoji[prop] === reaction.emoji[prop])
    if (emoji) reaction.message.guild.member(user).roles.add(emoji.roles)
    else reaction.users.remove(user)
})

client.on('messageReactionRemove', (reaction,user) => {
    if (!reaction.message.guild || user.bot) return
    const reactionRoleElem = config.ColorsRoles[reaction.message.id]
    if (!reactionRoleElem || !reactionRoleElem.removable) return
    const prop = reaction.emoji.id ? 'id' : 'name'
    const emoji = reactionRoleElem.emojis.find(emoji => emoji[prop] === reaction.emoji[prop])
    if (emoji) reaction.message.guild.member(user).roles.remove(emoji.roles)
});

client.login(process.env.TOKEN)