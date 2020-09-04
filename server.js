const discord = require('discord.js')
const client = new discord.Client();
//____________Const Log_______________\\
client.login(process.env.TOKEN)
//__________Bot login__________________\\
client.on('ready', () => {
    client.user.setActivity(`𝕀'𝕞 𝕋𝕠𝕞 𝔹𝕠𝕞𝕓𝕒𝕕𝕚𝕝 𝔸𝕟𝕕 𝕀'𝕞 𝕎𝕒𝕥𝕔𝕙𝕚𝕟𝕘 ${client.users.size} 𝕌𝕤𝕖𝕣𝕤`, { type: 'PLAYING' });
    console.log('Tom Bombadil Is Up!')
});
//____________________________________________________Bot Playing___________________________________________________________\\
client.on('message', message => {
  if (message.content === '!invite') {
    message.channel.send(`My Invite Link Is: `).catch();
  }
})
//_____________________________commands________________________________\\