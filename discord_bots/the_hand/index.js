const Discord = require('discord.js');
const { prefix, token, giphyToken } = require('./config.json');
const client = new Discord.Client();

var GphApiClient = require('giphy-js-sdk-core')
giphy = GphApiClient(giphyToken)

client.once('ready', () => {
    console.log('Ready to serve!');
})

client.on('message', message => {
    // client.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/  +/);
    const command = args.shift().toLowerCase();
// the rest of your code
//         command to kick users moved to its own file. created other commands based on the guide.

   }
})

client.login(token);