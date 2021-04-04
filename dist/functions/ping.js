"use strict";
exports.__esModule = true;
var Discord = require("discord.js");
function ping(client, message) {
    var embed = new Discord.MessageEmbed()
        .setTitle("Pong! 🏓")
        .setDescription("**Client Latency**: " + client.ws.ping + "ms")
        .setColor("#0b1560");
    message.channel.send(embed);
}
module.exports = ping;
