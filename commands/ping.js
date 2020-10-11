const Discord = require("discord.js");

const ping = (message) => {
    return new Promise((resolve, reject) => {
        const timeTaken = Date.now() - message.createdTimestamp;
        message.channel.send(`Pong! This message had a latency of ${timeTaken}ms.`);
    }
)};

module.exports.run = async(message) => {
     await ping(message);
}
