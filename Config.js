// 👈 You Can change this your choice
// 👈 You Can change this your choice 
const fs = require('fs')
const chalk = require('chalk')

//Api Website\\
global.APIs = {
	zenz: 'https://zenzapis.xyz',
}

//Api Key\\
global.APIKeys = {
	'https://zenzapis.xyz': 'sanzychan01', //credit goes to sanzy yt, if api key expire, buy it and put it here?\\
}
// 👈 You Can change this your choice
global.emoji01 = ['🐼'] // 👈 Enter your Emoji 
global.emoji02 = ['🦋'] //👈 Enter your Emoji
global.notice = ``  // 👈 Enter Your details and Social Media Links and Anything
global.owner =  ['+94762511600'] //👈  Enter Your number
global.premium =  ['+94762511600'] //👈  Enter Your number
global.ownernomer = '+94762511600' //👈  Enter Your number
global.ownername = '💆‍♂️#𝚆𝚑𝚊𝚝𝚜𝚊𝚙𝚙_𝚋𝚘𝚝 24/7💆‍♂️' //👈 Enter Your name
global.botname = '𝘔𝘪𝘴𝘴 𝘘𝘦𝘦𝘯 𝘞𝘈 𝘣𝘰𝘵' //👈 Enter Your Bot name
global.footer = '© 𝖯𝗈𝗐𝖾𝗋𝖾𝖽 𝖡𝗒 𝘔𝘪𝘴𝘴 𝘘𝘦𝘦𝘯' //👈 Enter Your Name
global.ig = '' // 👈 You Can change this your choice
global.region = 'Sri lanka' // 👈 You Can change this your choice
global.sc = ''
global.fbt = '' // 👈 Enter (Subscribe/Follow/Like now) 
global.myweb = '' // 👈 Enter your Social media link to follow now button
global.packname = '💆‍♂️#𝚆𝚑𝚊𝚝𝚜𝚊𝚙𝚙_𝚋𝚘𝚝 24/7💆‍♂️'  // 👈 You Can change this your choice 
global.author = '𝖡𝗒 𝘔𝘪𝘴𝘴 𝘘𝘦𝘦𝘯' // 👈 You Can change this your choice 
global.sessionName = 'session' // 👈 You Can change this your choice
global.prefa = ['','!','.','🛰️','⚓','🍎'] // 👈 You Can change this your choice
//Go to https://imgbb.com/, upload a photo of your choice and put its link here
global.thumb =  'https://a-static.besthdwallpaper.com/hot-wonder-woman-wallpaper-1024x576-32269_44.jpg' 
//Go to https://imgbb.com/, upload a photo of your choice and put its link here
global.sp = '⭔'
global.mess = {
    success: 'Done 🦋', // 👈 You Can change this your choice
    admin: 'This Feature Is Only For Admin!', // 👈 You Can change this your choice
    botAdmin: 'Bot Must Be Admin First!', // 👈 You Can change this your choice
    owner: 'This Feature Is Only For Owner!', // 👈 You Can change this your choice
    group: 'Feature Used Only For Groups!', // 👈 You Can change this your choice
    private: 'Features Used Only For Private Chat!', // 👈 You Can change this your choice
    bot: 'This Feature Is Only For Bot', // 👈 You Can change this your choice
    wait: '```Please Wait...```', // 👈 You Can change this your choice
    error: 'Error! Maybe Api Key Is Expired🤔!', // 👈 You Can change this your choice
    endLimit: 'Your Daily Limit Has Expired, The Limit Will Be Reset Every 12 Hours',
} // 👈 You Can change this your choice
// Do Not Change 👇 
    global.limitawal = {
    premium: "Infinity",
    free: 12,
    monayawal: 1000
}
   global.rpg = {
   darahawal: 100,
   besiawal: 15,
   goldawal: 10,
   emeraldawal: 5,
   umpanawal: 5,
   potionawal: 1
}
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
