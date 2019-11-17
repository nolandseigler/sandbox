const Discord = require('discord.js');
const { prefix, token } = require('./config.json');
const client = new Discord.Client();

client.once('ready', () => {
    console.log('Ready to serve!');
})

client.on('message', message => {
   if (message.member.hasPermission['KICK_MEMBERS', 'BAN_MEMBERS']) {
       if(message.content.startsWith(`${prefix}kick`)) {
           let member = message.mentions.members.first();
           member.kick().then((member) => {
               message.channel.send(`:wave: ${member.displayName} has been kicked.`)
           })
       }
   }
})

client.login(token);