"use strict";
exports.__esModule = true;
var Discord = require("discord.js");
function pirep(message) {
    var embed = new Discord.MessageEmbed()
        .setAuthor("Link to the PiRep Filing portal", null, "http://iffinnairva.rf.gd/index.php/pireps/filepirep")
        .setColor("#0b1560");
    message.channel.send(embed);
}
module.exports = { pirep: pirep };
