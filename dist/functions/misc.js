"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Discord = require("discord.js");
const pirep = (message) => {
    const embed = new Discord.MessageEmbed()
        .setTitle("Link to the PiRep Filing portal")
        .setURL("http://iffinnairva.rf.gd/index.php/pireps/filepirep")
        .setColor("#0b1560");
    message.channel.send(embed);
};
const crewCenter = (message) => {
    const embed = new Discord.MessageEmbed()
        .setTitle("Link to the Crew Center")
        .setURL("http://iffinnairva.rf.gd/")
        .setColor("#0b1560");
    message.channel.send(embed);
};
const thread = (message) => {
    const embed = new Discord.MessageEmbed()
        .setTitle("Link to the official AYVA Thread")
        .setURL("https://community.infiniteflight.com/t/finnair-virtual-fly-finnish-now-ifvarb-approved-and-recruiting-pilots/475885")
        .setColor("#0b1560");
    message.channel.send(embed);
};
const website = (message) => {
    const embed = new Discord.MessageEmbed()
        .setTitle("Link to the AYVA Website")
        .setURL("http://iffinnairva.weebly.com/")
        .setColor("#0b1560");
    message.channel.send(embed);
};
const instagram = (message) => {
    const embed = new Discord.MessageEmbed()
        .setTitle("Link to the our Instagram account")
        .setURL("https://www.instagram.com/finnair_va/")
        .setColor("#0b1560");
    message.channel.send(embed);
};
module.exports = { pirep, crewCenter, thread, website, instagram };
