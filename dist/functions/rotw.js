"use strict";
exports.__esModule = true;
var Discord = require("discord.js");
var rotwData = require("../data/rotw");
var rotwFields = [
    {
        name: "Monday",
        value: rotwData.monday,
        inline: true
    },
    {
        name: "Tuesday",
        value: rotwData.tuesday,
        inline: true
    },
    {
        name: "Wednesday",
        value: rotwData.wednesday,
        inline: true
    },
    {
        name: "Thusday",
        value: rotwData.thusday,
        inline: true
    },
    {
        name: "Friday",
        value: rotwData.friday,
        inline: true
    },
    {
        name: "Saturday",
        value: rotwData.saturday,
        inline: true
    },
    {
        name: "Sunday",
        value: rotwData.sunday,
        inline: true
    },
];
function rotw(message) {
    var embed = new Discord.MessageEmbed()
        .setTitle(rotwData.title)
        .addFields(rotwFields)
        .setColor("#0b1560")
        .setFooter("Made with ❤ by the AYV Staff Team.");
    message.author.send(embed);
    message.reply("Sent you a DM! :e_mail:");
}
function postRotw(message) {
    if (!message.member.hasPermission("MANAGE_MESSAGES"))
        return message.reply("Only staff members can do that!");
    var embed = new Discord.MessageEmbed()
        .setTitle(rotwData.title)
        .addFields(rotwFields)
        .setColor("#0b1560")
        .setFooter("Made with ❤ by the AYV Staff Team.");
    message.channel.send(embed);
    message.channel.send("<@&789510308455907419>");
    message["delete"]();
}
module.exports = { rotw: rotw, postRotw: postRotw };
