//اذا شلت الحقوق الله لا يحللك و بشهد عليك يوم القيامة
const { Client, Partials, GatewayIntentBits, EmbedBuilder } = require('discord.js');
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildVoiceStates,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
  ],
  partials: [Partials.Channel, Partials.Message, Partials.Channel, Partials.User]
});
const Discord = require("discord.js");
const { registerCommands, registerEvents } = require('./utils/registry');
const config = require('./slappey.json');
const mongoose = require('mongoose');
const { QuickDB } = require("quick.db");
const token = 'MTEwNDQyNzM1NTE5NzQyNzc2Mg.GeJBmJ.tZjE4zbTRbo5mnQp6jhy3z7ummz5R9xgWdeP00';
const db1 = new QuickDB();

(async () => {
  client.commands = new Map();
  client.events = new Map();
  client.prefix = config.prefix || '-';
  client.n38th = db1;

  await registerCommands(client, '../commands');
  await mongoose.connect("mongodb+srv://hamada:12345Wageh@hamada.6tnetak.mongodb.net/data").then(() => {
    console.log('Database Connected');
  });
  await registerEvents(client, '../events');
})();

const ejs = require('ejs');
const express = require('express');
const path = require('path');
const app = express();
const PORT = 9024;

// Serve static files from the "public" directory
app.use(express.static('public'));
app.set('view engine', 'ejs');
app.set("views", path.join(__dirname, "views"));

app.get(`/`, (req, res) => {
  res.render(`index`, {});
});

// Start the server
app.listen(9024, () => {
  console.log(`Server is listening on port ${PORT}`);
});

process.on('unhandledRejection', (reason, p) => {
  console.log(reason);
});

process.on('uncaughtException', (err, origin) => {
  console.log(err);
});

const { joinVoiceChannel } = require('@discordjs/voice');
client.on('ready', () => {
  setInterval(async () => {
    client.channels.fetch("1273007413511065665") // ايدي الفويس
    .then((channel) => {
      const VoiceConnection = joinVoiceChannel({        channelId: channel.id,
        guildId: channel.guild.id,
        adapterCreator: channel.guild.voiceAdapterCreator
      });
    }).catch((error) => { return; });
  }, 1000);
});

// إضافة حدث messageCreate للاستماع إلى الرسائل
client.on('messageCreate', message => {
  if (!message.guild || message.author.bot) return;

  if (message.content === `${client.prefix}help`) {
    // إعداد Embed
    const helpEmbed = new EmbedBuilder()
      .setColor('#0099ff')
      .setTitle('قائمة الأوامر')
      .setDescription('الاوامر المتاحة في البوت')
      .addFields(
        { name: `${client.prefix}خصم`, value: 'خصم للخصم نقاط الاداري' },
        { name: `${client.prefix}اضافة`, value: 'اضافة للضافة نقاط للداري' },
        { name: `${client.prefix}نقاطي`, value: 'نقاطي للكشف نقاط الاداري' },
        { name: `${client.prefix}قيم`, value: 'قيم للنشاء قيم' },
        { name: `${client.prefix}اقلاع`, value: 'اقلاع للتأكد القيم' },
        { name: `${client.prefix}نداء`, value: 'نداء للنداء العضو' },
      )
      // تشفير النصّ
      .setFooter({ text: 'شكراً لكم كان معكم البرمج محمد في سيرفر Support Social Media' });
//اذا شلت الحقوق الله لا يحللك و بشهد عليك يوم القيامة 

    message.channel.send({ embeds: [helpEmbed] });
  }
});

// Example of adding commands to the command map
client.commands.set("ping", {
  description: "Replies with Pong!",
  execute: (message) => {
    message.channel.send("Pong!");
  }
});

client.commands.set("beep", {
  description: "Replies with Boop!",
  execute: (message) => {
    message.channel.send("Boop!");
  }
});

client.login("MTI2NjE1NjY1MzgwNDI1NzMyMA.GR6Sfz.JbHgJ-FEz8MTK5cIQ3hFteiU7KzM5V57MYPWqw");