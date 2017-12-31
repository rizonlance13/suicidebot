const Discord = require('discord.js');
const client = new Discord.Client();
const token = require('./settings.json').token;

client.on('ready',() => {
	console.log('I\'m Online\nI\'m Online');
});

var prefix = "^"
client.on('message', message => {
	  if (!message.content.startsWith(prefix)) return;
		if (message.author.bot) return;

		if (message.content.startsWith(prefix + 'How-To-Buy')) {
			  message.channel.sendMessage(`If you want to buy just do this\n\n^Buy_[ Access ]Access[ How Long ]\n\nEx :\n\n^Buy_Bc_Access_Lifetime`);
		} else

		if (message.content.startsWith(prefix + 'Prices')) {
			  message.channel.sendMessage('`[ BC ] Access\n          Weekly : 100 R$ / 1.00 $ / 50 Php\n          Monthly : 250 R$ / 2.50 $ / 125 Php\n          Lifetime : 400 R$ / 4.00 $ / 200 Php\n\n[ Tbc ] Access \n\n          Weekly : 150 R$ / 1.50 $ / 75 Php\n          Monthly : 300 R$ / 3.00 $ / 150 Php\n          Lifetime :  450 R$ / 4.50 $ / 225 Php\n\n[ Obc ] Access \n\n          Weekly : 200R$ / 2.00 $ / 100 Php\n          Monthly : 350 R$ / 3.50 $ / 175 Php\n          Lifetime : 500 R$ / 5.00 $ / 250 Php\n\n[ All ] Access \n\n          Weekly : 400 R$ / 4.00 $ / 200 Php\n          Monthly : 600 R$ / 6.00 $ / 300 Php\n          Lifetime : 900 R$ / 9.00 $ / 450 Php\n\nAdded!! Group Dumps!!\n\nLifetime : 500 R$ / 5.00 $ / 250 Php`');
		} else

		if (message.content.startsWith(prefix + 'Buy_Bc_Access_Week')) {
				client.channels.get('396941678059192323').sendMessage('Wants To Purchase BC For a Week' + message.author);
				message.channel.sendMessage('Your request has been sent to the Founder Of LCRB, So be patient [Trolls Get Banned]')
		}
});

client.login(token);
