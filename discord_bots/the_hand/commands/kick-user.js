//this was in the main fail and started with an if not else if
// this command is from a tutorial on youtube and the fact it begins with the .hasPermission confuses me. why no begin with the .startsWith.
// else if (message.member.hasPermission['KICK_MEMBERS', 'BAN_MEMBERS']) {
// the above line was commented out and replaced with the one below .startsWith
else if (message.content.startsWith(`${prefix}kick`)) {
    if (!message.mentions.users.size) {
        return message.reply('Are you really trying to kick someone that you can not even properly tag? ....Really...?');
    } else if (message.member.hasPermission['KICK_MEMBERS', 'BAN_MEMBERS']) {
        let member = message.mentions.members.first();
        member.kick().then((member) => {
            giphy.search('gifs', {'q': kicked})
                .then((response) => {
                    var totalResponses = response.data.length;
                    var responseIndex = Math.floor((math.random() * 10) + 1) % totalResponses;
                    var responseFinal = response.data[responseIndex];
                    message.channel.send(`:wave: ${member.displayName} has been kicked.`, {
                        files: [responseFinal.images.fixed_height.url]
                    })
                }).catch(() => {
                message.channel.send('Error. Something went wrong')
            })

        })
    }
}