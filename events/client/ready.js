module.exports = (Discord, client) => {
  function presence() {
    let status = ['@AsjadOwO','By Asjad', 'Simple-MusicBot',] 
    let rstatus = Math.floor(Math.random() * status.length); 
    client.user.setPresence({
        status: "idle", 
        activity: {
            name: `${status[rstatus]}`, 
        }
    });
}
console.log(`Welcome to SERVICE HANDLER!`)
console.log(`https://github.com/AsjadOwO`)
console.log(`  /-/ Discord: Asjad#1213 /-/`)
console.log(`  /-/ Discord: Asjad#1213 /-/`)
console.log(`Asjad`)
console.log(`Logged in as ${client.user.tag}!`)

  
  
setInterval(presence, 5000)



/**
  * @INFO
  * Bot Coded by Asjad#1213 | https://github.com/AsjadOwO
  * @INFO
  * Support server | https://discord.gg/jMtducykRc
  * @INFO
*/
};
