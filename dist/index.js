"use strict";
let Discord = require("discord.js");
const client = new Discord.Client();
const { MessageEmbed } = Discord;
require("dotenv").config();
const PRIMARY_BLUE = "#0b1560";
const { TOKEN } = process.env;
client.on("ready", () => {
    console.log("Bot is up!");
});
client.on("message", (message) => {
    let { content, channel } = message;
    content = content.toLowerCase();
    if (content.startsWith("@ping")) {
        const ping = require("./functions/ping");
        ping(client, message);
    }
    if (content.startsWith("@rotw")) {
        require("./functions/rotw").rotw(message);
    }
    if (content.startsWith("@post-rotw")) {
        const rotw = require("./functions/rotw");
        rotw.postRotw(message);
    }
    if (content.startsWith("@fnf")) {
        const fnf = require("./functions/fnf");
        fnf.fnf(message);
    }
    if (content.startsWith("@post-fnf")) {
        const fnf = require("./functions/fnf");
        fnf.postFnf(message);
    }
    if (content.startsWith("@pirep")) {
        require("./functions/misc").pirep(message);
    }
    if (content.startsWith("@website") || content.startsWith("@web")) {
        require("./functions/misc").website(message);
    }
    if (content.startsWith("@instagram") || content.startsWith("@ig")) {
        require("./functions/misc").instagram(message);
    }
    if (content.startsWith("@crewcenter") || content.startsWith("@cc")) {
        require("./functions/misc").crewCenter(message);
    }
});
client.login(TOKEN);
