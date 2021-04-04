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
  interface Message {
    content: string;
    channel: any;
  }
  let { content, channel }: Message = message;
  content = content.toLowerCase();

  if (content.startsWith("@ping")) {
    const ping = require("./functions/ping");
    ping(client, message);
  }

  if (content.startsWith("@rotw")) {
    const rotw = require("./functions/rotw");
    rotw.rotw(message);
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
});

client.login(TOKEN);
