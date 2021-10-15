/**
  * @INFO
  * Bot Coded by Asjad#1213 | https://github.com/AsjadOwO
  * @INFO
  * Support server | https://discord.gg/jMtducykRc
  * @INFO
*/





// Discord
const Discord = require("discord.js");
require('dotenv').config();
const client = new Discord.Client();

// Command Handler
client.commands = new Discord.Collection();
client.events = new Discord.Collection();

["event", "command"].forEach(handler =>{
    require(`./handlers/${handler}`)(client, Discord);
});
/**
  * @INFO
  * Bot Coded by Asjad#1213 | https://github.com/AsjadOwO
  * @INFO
  * Support server | https://discord.gg/jMtducykRc
  * @INFO
*/
















client.login(process.env.DISCORD_TOKEN);
/**
  * @INFO
  * Bot Coded by Asjad#1213 | https://github.com/AsjadOwO
  * @INFO
  * Support server | https://discord.gg/jMtducykRc
 
*/