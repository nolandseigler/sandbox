const fs = require('fs');
const Discord = require('discord.js');
const { prefix, token, giphyToken } = require('./config.json');
var GphApiClient = require('giphy-js-sdk-core')

const client = new Discord.Client();
client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
giphy = GphApiClient(giphyToken)

for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}

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