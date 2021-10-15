/**
  * @INFO
  * Bot Coded by Asjad#1213 | https://github.com/AsjadOwO
  * @INFO
  * Support server | https://discord.gg/jMtducykRc
  * @INFO
*/



const fs = require("fs");

module.exports = (client, Discord) =>{
    const load_dir = (dirs) =>{
        const event_files = fs.readdirSync(`./events/${dirs}`).filter(file =>file.endsWith(".js"));

        for(const file of event_files){
            const event = require(`../events/${dirs}/${file}`);
            const event_name = file.split(".")[0]
            client.on(event_name, event.bind(null, Discord, client))
        }
    }

    ["client", "guild"].forEach(e => load_dir(e))
}
/**
  * @INFO
  * Bot Coded by Asjad#1213 | https://github.com/AsjadOwO
  * @INFO
  * Support server | https://discord.gg/jMtducykRc
  * @INFO
*/