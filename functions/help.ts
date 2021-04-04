import Discord from "discord.js";
import { Fields } from "./rotw";

const helpFields: Array<Fields> = [
  {
    name: "**ping**",
    value: "Shows bot latency.",
    inline: true,
  },
  {
    name: "**rotw**",
    value: "DMs you the ROTW for that week.",
    inline: true,
  },
  {
    name: "**fnf**",
    value: "DMs you the FNF.",
    inline: true,
  },
  {
    name: "**pirep**",
    value: "Gives a link to the PiRep filing portal.",
    inline: true,
  },
  {
    name: "**crewcenter**",
    value: "Gives a link to the Crew Center.",
    inline: true,
  },
  {
    name: "**thread**",
    value: "Gives a link to the Thread.",
    inline: true,
  },
  {
    name: "**website**",
    value: "Gives a link to the Website.",
    inline: true,
  },
  {
    name: "**instagram**",
    value: "Gives a link to our Instagram account.",
    inline: true,
  },
];
export default function help(message): void {
  const embed = new Discord.MessageEmbed()
    .setTitle("**AYVA Bot Commands!**")
    .setDescription(
      `Please Make sure to add the "\`ayv \`" prefix before the commands.
    Example : \`ayv ping\``
    )
    .setColor("#0b1560")
    .addFields(helpFields);

  message.channel.send(embed);
}
