var Discord = require("discord.js");
var client = new Discord.Client();
var MessageEmbed = Discord.MessageEmbed;
require("dotenv").config();
var PRIMARY_BLUE = "#0b1560";
var TOKEN = process.env.TOKEN;
client.on("ready", function () {
    console.log("Bot is up!");
});
client.on("message", function (message) {
    var content = message.content, channel = message.channel;
    content = content.toLowerCase();
    if (content.startsWith("@ping")) {
        var ping = require("./functions/ping");
        ping(client, message);
    }
    if (content.startsWith("@rotw")) {
        var rotw_1 = require("./functions/rotw");
        rotw_1.rotw(message);
    }
    if (content.startsWith("@post-rotw")) {
        var rotw_2 = require("./functions/rotw");
        rotw_2.postRotw(message);
    }
    if (content.startsWith("@fnf")) {
        var fnf_1 = require("./functions/fnf");
        fnf_1.fnf(message);
    }
    if (content.startsWith("@post-fnf")) {
        var fnf_2 = require("./functions/fnf");
        fnf_2.postFnf(message);
    }
    if (content.startsWith("@pirep")) {
        require("./functions/misc").pirep(message);
    }
});
client.login(TOKEN);
