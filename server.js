const discord = require('discord.js')
const client = new discord.Client();
//____________Const Log_______________\\
client.login(process.env.TOKEN)
//__________Bot login__________________\\
client.on('ready', () => {
    client.user.setActivity(`I'm Tom Bombadil`, { type: 'PLAYING' });
    console.log('The Bot Is Online Im In Minecraft-Israel')
});
//____________________________________________________Bot Playing___________________________________________________________\\