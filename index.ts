import Discord from "discord.js";
const client = new Discord.Client();
import dotenv from "dotenv";
dotenv.config();
import { fnf, postFnf } from "./functions/fnf";
import help from "./functions/help";
import {
  website,
  thread,
  crewCenter,
  instagram,
  pirep,
} from "./functions/misc";
import { postRotw, rotw } from "./functions/rotw";

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
    rotw(message);
  }
  if (content.startsWith("@post-rotw")) {
    postRotw(message);
  }

  if (content.startsWith("@fnf")) {
    fnf(message);
  }

  if (content.startsWith("@post-fnf")) {
    postFnf(message);
  }

  if (content.startsWith("@pirep")) {
    pirep(message);
  }

  if (content.startsWith("@website") || content.startsWith("@web")) {
    website(message);
  }
  if (content.startsWith("@instagram") || content.startsWith("@ig")) {
    instagram(message);
  }
  if (content.startsWith("@crewcenter") || content.startsWith("@cc")) {
    crewCenter(message);
  }
  if (content.startsWith("@thread")) {
    thread(message);
  }

  if (content.startsWith("@help")) {
    help(message);
  }
});

client.login(TOKEN);
