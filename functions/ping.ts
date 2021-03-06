import Discord from "discord.js";

export default function ping(client, message): void {
  const embed = new Discord.MessageEmbed()
    .setTitle("Pong! 🏓")
    .setDescription(`**Client Latency**: ${client.ws.ping}ms`)
    .setColor("#0b1560");

  message.channel.send(embed);
}
