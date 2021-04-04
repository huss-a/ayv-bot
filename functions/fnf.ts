import Discord from 'discord.js';
const fnfData = require("../data/fnf");

export function fnf(message): void {
  const embed = new Discord.MessageEmbed()
    .setTitle(fnfData.title)
    .setDescription(fnfData.value)
    .setFooter("Have an awesome Friday!")
    .setColor("#0b1560");
  message.author.send(embed);
  message.reply("Sent you a DM! :e_mail:");
}

export function postFnf(message): void {
  if (!message.member.hasPermission("MANAGE_MESSAGES"))
    return message.reply("Only staff members can do that!");
  const embed = new Discord.MessageEmbed()
    .setTitle(fnfData.title)
    .setDescription(fnfData.value)
    .setFooter("Have an awesome Friday!")
    .setColor("#0b1560");
  message.channel.send(embed);
  message.channel.send("<@&789510308455907419>");
  message.delete();
}
