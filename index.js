const Discord = require('discord.js');
const bot = new Discord.Client();
const prefix = "/"
var fs = require('fs')
var lineReader = require('line-reader');
var async = require('async');
const firstline = require('firstline')
const generated = new Set();
bot.on('ready', () => {
  console.log(`Logged in as ${bot.user.tag}!`);
});

bot.on('message', message => {
  if (msg.channel.id === 'ChannelID') {
  if(message.author.bot) return;
  var command = message.content.toLowerCase().slice(prefix.length).split(' ')[0];

  if (command === 'test') {
    message.channel.send("Test done, bot's working")
  }

if (command === 'gen'){
  if (generated.has(message.author.id)) {
    message.channel.send("Wait 15 minute before generating another account!. - " + message.author);
} else {
  let messageArray = message.content.split(" ");
  let args = messageArray.slice(1);
  if (!args[0]) return message.reply("Please, specify the service you want!")
  var fs = require('fs');
  const filePath = __dirname+'/'+ args[0] + '.txt'
  

fs.readFile(filePath, function(err, data) { 
    if (!err) {
        data = data.toString(); 
        var position = data.toString().indexOf('\n');
        var firstLine = data.split('\n')[0];
        message.author.send(firstLine) 
        if (position != -1) { 
             data = data.substr(position + 1);
            fs.writeFile(filePath, data, function(err) {
              const embed = {
                "title": "Account Generated!",
                "description": "Check your dm for the account's information!",
                "color": 8519796,
                "timestamp": "2019-04-04T14:16:26.398Z",
                "footer": {
                  "icon_url": "https://cdn.discordapp.com/avatars/530778425540083723/7a05e4dd16825d47b6cdfb02b92d26a5.png",
                  "text": "Buy discord accounts from Mental#1424"
                },
                "thumbnail": {
                  "url": "http://www.compartosanita.it/wp-content/uploads/2019/02/right.png"
                },
                "author": {
                  "name": "Account Generator",
                  "url": "https://discordapp.com",
                  "icon_url": client.displayAvatarURL
                },
                "fields": []
              };
              message.channel.send({ embed });
              generated.add(message.author.id);
              setTimeout(() => {
                // Removes the user from the set after a minute
                generated.delete(message.author.id);
              }, 150000);
                if (err) { 
                   console.log(err);
                }
            });
        } else {
            message.channel.send("Sorry, there isn't any account avaible for that service!");
        }
    } else {
        message.channel.send("Sorry, that service doesen't exists on our database");
    }
});
}

}

if (command === "help"){
  const embed = {
    "title": "Anarchy Account Generator",
    "description": "Informations",
    "color": 8519796,
    "timestamp": "2019-04-04T14:16:26.398Z",
    "footer": {
      "icon_url": "https://cdn.discordapp.com/avatars/530778425540083723/7a05e4dd16825d47b6cdfb02b92d26a5.png",
      "text": "Buy discord accounts from Mental#1424"
    },
    "thumbnail": {
      "url": "http://www.compartosanita.it/wp-content/uploads/2019/02/right.png"
    },
    "author": {
      "name": "Account Generator",
      "url": "https://discordapp.com",
      "icon_url": client.displayAvatarURL
    },
    "fields": [
      {
        "name": "Bot made by",
        "value": "Mental#1424",
      },
      
    ]
  };
  message.channel.send({ embed });
}
if (command === "restock"){
  let messageArray = message.content.split(" ");
  let args = messageArray.slice(1);
  if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply("Sorry, you can't do it, you are not an admin!");
  if (!args[0]) return message.reply("Please, specify the service you want to restock!")
  message.channel.send("@everyone " + "**"+args[0]+"**" +" has been restocked by "+ "<@" + message.author.id + ">")
}
  }
})

bot.login('YOUR TOKEN');
