/**
  * @INFO
  * Bot Coded by Asjad#1213 | https://github.com/AsjadOwO
  * @INFO
  * Support server | https://discord.gg/jMtducykRc
  * @INFO
*/


const fs = require('fs');
module.exports = (client, Discord) =>{
    const command_files = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
    
    for(const file of command_files){
        const command = require(`../commands/${file}`);
        if(command.name){
            client.commands.set(command.name, command);
        } else {
            continue;
        }
    }
}
/**
  * @INFO
  * Bot Coded by Asjad#1213 | https://github.com/AsjadOwO
  * @INFO
  * Support server | https://discord.gg/jMtducykRc
  * @INFO
*/