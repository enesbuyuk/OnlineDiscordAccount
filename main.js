const Discord = require('discord.js');
const client = new Discord.Client();
const {Client, MessageEmbed} = require('discord.js');


//SAHTE KULLANICI
function ktoken(client) {
    client.rest.getAuth = function () {
        const token = this.client.token || this.client.accessToken;
        if (token) return `${token}`;
        throw new Error('TOKEN_MISSING');
    }
}

function kgiris(token) {
  const client = new Discord.Client();
  ktoken(client);
  client.on('ready', () => {
    console.log(`${client.user.tag} olarak giriş yapıldı!`);
    client.user.setPresence({
          status: 'dnd',
       //   activity: {
             // name: ".help",
            // type: "PLAYING"
         //}
      });
    }
  });
  client.login(token);
}

kgiris("UserAccountToken-1"); //token of account-1
kgiris("UserAccountToken-2"); //token of account-2
kgiris("UserAccountToken-3"); //token of account-3
kgiris("UserAccountToken-4"); //token of account-4
