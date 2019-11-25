module.exports = {
    name: 'arg-info',
    description: 'provides info submitted about user input args',
    execute(message, args) {
        if (!args.length) {
            return message.channel.send(`You didn't provide any arguments, ${message.author}!`);
        } else if (args[0] === 'foo') {
            return message.channel.send('bar');
        } message.channel.send(`First argument: ${args[0]}`);
    },
};



// else if (command === 'args-info') {
//     if (!args.length) {
//         return message.channel.send(`You didn't provide any arguments, ${message.author}!`);
//     } else if (args[0] === 'foo') {
//         return message.channel.send('bar');
//     } message.channel.send(`First argument: ${args[0]}`);
// }