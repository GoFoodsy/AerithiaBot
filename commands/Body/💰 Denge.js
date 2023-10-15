/*CMD
  command: 💰 Denge
  help: 
  need_reply: false
  auto_retry_time: 
  folder: Body

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

let stat = Bot.getProperty(""+user.telegramid+"");

if (stat=="ban"){
Bot.sendMessage("*You're Ban*");
}else{

var balance = Libs.ResourcesLib.userRes("balance")
var lib = Libs.ReferralLib
var refList = lib.currentUser.refList.get();
let cur = Bot.getProperty("cur")
Bot.sendMessage("*💰 Bakiye : "+balance.value().toFixed(2)+" Puan\n\n⚜️ Tavsiye Edin ve Daha Fazla Kazanın !!!*")
} 


