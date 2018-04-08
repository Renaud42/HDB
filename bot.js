Discord = require('discord.js');
const client = new Discord.Client();

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.channel.send('PONG!');
  	}
});

client.on('message', message => {
    if (message.content === 'bing') {
    	message.reply('BONG!');
  	}
});

client.on('message', message => {
    if (message.content === 'test') {
    	message.reply('NTM!');
  	}
});

client.on('message', message => {
    if (message.content === 't2') {
    	message.reply('t3 mdr');
  	}
});

client.on('message', message => {
    if (message.content === '!Hporn') {
     var nombre_de_phrases = 4; // le nombre de phrases que tu vas mettre (PS : on compte à partir de 1)
     switch (getRandomInt(nombre_de_phrases)) {
       // Toutes les phrases en fonction des cas (PS : on compte à partir de 0)
      case 0:
       message.reply('Vive les moules !');
       break;
      case 1:
       message.reply('RUSHB');
       break;
      case 2:
       message.reply('Ruban le slave');
       break;
      case 3:
       message.reply('YEAH BOYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYY !!!!!!!!!!!!!!!!!');
       break;
      // Au cas  où rien (on sait jamais)
      default:
       message.reply('lol');
       break;
     }
    	message.reply('t3 mdr');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
