const Discord = require("discord.js");
require('dotenv').config()

const client = new Discord.Client();

const prefix = "#";

const ping = require("./commands/ping");

client.on("message", function(message) {
    if (message.author.bot) return;
    if (!message.content.startsWith(prefix)) return;
  
    const commandBody = message.content.slice(prefix.length);
    const args = commandBody.split(' ');
    const command = args.shift().toLowerCase();
    switch(command) {
        
        case "ping": 
        ping.run(message);
        break;

    }
  });
module.exports.client = client;
client.login(process.env.TOKEN);