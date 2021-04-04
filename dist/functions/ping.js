"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let Discord = require("discord.js");
function ping(client, message) {
    const embed = new Discord.MessageEmbed()
        .setTitle("Pong! 🏓")
        .setDescription(`**Client Latency**: ${client.ws.ping}ms`)
        .setColor("#0b1560");
    message.channel.send(embed);
}
module.exports = ping;
