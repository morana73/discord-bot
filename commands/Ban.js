module.exports = {
    run: async (message, args) => {
        if (!message.member.hasPermission('BAN_MEMBERS')) return message.channel.send('vous n\'avez pas la permission dn\'utiliser cette commande.')
        const member = message.mentions.members.first()
        if (!member) return message.channel.send('Mentionnez le membre a bannir')
        if (member.id === message.guild.ownerID) return message.channel.send('vous ne pouvez pas Bannir le créateur du serveur')
        if (message.member.roles.highest.comparePositionTo(member.roles.highest) < 1 && message.author.id !== message.guild.ownerID) return message.channel.send('Vous ne pouvez pas exclure ce membre')
        if (!member.banable) return message.channel.send('Le bot ne peut pas bannir ce membre')
        const reason = args.slice(1).join('  ') || 'Aucune raison fournie'
        await member.ban({reason})
        message.channel.send(`${member.user.tag} a été banni !`)
    },
    name: 'ban',
    guildOnly: true
}