/**
  * @INFO
  * Bot Coded by Asjad#1213 | https://github.com/AsjadOwO
  * @INFO
  * Support server | https://discord.gg/jMtducykRc
  * @INFO
*/

require('dotenv').config();
module.exports =(Discord, client, message) => {
    const prefix = process.env.PREFIX;
    if(!message.content.startsWith(prefix) || message.author.bot) return;
 
    const args = message.content.slice(prefix.length).split(/ +/);
    const cmd = args.shift().toLowerCase();


    const command = client.commands.get(cmd) || client.commands.find(a => a.aliases && a.aliases.includes(cmd));


    if(command) command.execute(client, message, args, cmd, Discord);

}

/**
  * @INFO
  * Bot Coded by Asjad#1213 | https://github.com/AsjadOwO
  * @INFO
  * Support server | https://discord.gg/jMtducykRc
  * @INFO
*/