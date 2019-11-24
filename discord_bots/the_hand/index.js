const Discord = require('discord.js');
const { prefix, token, giphyToken } = require('./config.json');
const client = new Discord.Client();

var GphApiClient = require('giphy-js-sdk-core')
giphy = GphApiClient(giphyToken)

client.once('ready', () => {
    console.log('Ready to serve!');
})

client.on('message', message => {
   if (message.member.hasPermission['KICK_MEMBERS', 'BAN_MEMBERS']) {
       if(message.content.startsWith(`${prefix}kick`)) {
           let member = message.mentions.members.first();
           member.kick().then((member) => {
               giphy.search('gifs', {'q':kicked})
                   .then((response) => {
                       var totalResponses = response.data.length;
                       var responseIndex = Math.floor((math.random() *10) + 1) % totalResponses;
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
})

client.login(token);