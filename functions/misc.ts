const Discord = require("discord.js");

function pirep(message) {
  const embed = new Discord.MessageEmbed()
    .setAuthor(
      "Link to the PiRep Filing portal",
      null,
      "http://iffinnairva.rf.gd/index.php/pireps/filepirep"
    )
    .setColor("#0b1560");
  message.channel.send(embed);
}

export {};

module.exports = { pirep };
