import Discord from 'discord.js';
import rotwData from "../data/rotw"

interface Fields extends Object {
  name: string;
  value: string;
  inline: boolean;
}


const rotwFields: Array<Fields> = [
  {
    name: "Monday",
    value: rotwData.monday,
    inline: true,
  },
  {
    name: "Tuesday",
    value: rotwData.tuesday,
    inline: true,
  },
  {
    name: "Wednesday",
    value: rotwData.wednesday,
    inline: true,
  },
  {
    name: "Thusday",
    value: rotwData.thursday,
    inline: true,
  },
  {
    name: "Friday",
    value: rotwData.friday,
    inline: true,
  },
  {
    name: "Saturday",
    value: rotwData.saturday,
    inline: true,
  },
  {
    name: "Sunday",
    value: rotwData.sunday,
    inline: true,
  },
];

export function rotw(message): void {
  const embed = new Discord.MessageEmbed()
    .setTitle(rotwData.title)
    .addFields(rotwFields)
    .setColor("#0b1560")
    .setFooter("Made with ❤ by the AYV Staff Team.");

  message.author.send(embed);
  message.reply("Sent you a DM! :e_mail:");
}

export function postRotw(message): void {
  if (!message.member.hasPermission("MANAGE_MESSAGES"))
    return message.reply("Only staff members can do that!");
  const embed = new Discord.MessageEmbed()
    .setTitle(rotwData.title)
    .addFields(rotwFields)
    .setColor("#0b1560")
    .setFooter("Made with ❤ by the AYV Staff Team.");

  message.channel.send(embed);
  message.channel.send("<@&789510308455907419>");
  message.delete();
}
