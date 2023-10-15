/*CMD
  command: GIFTCARD
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Admin
  answer: 📥 SEND THE AMOUNT

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

let balance = Libs.ResourcesLib.userRes("balance")
if (balance.value() < data.message){
Bot.sendMessage("NOT ENOUGH BALANCE")
}else{
if (data.message < -100){
Bot.sendMessage("*MINIMUM GIFT CARD AMOUNT IS 1💎*")
}else{
var value = message
function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n)
}
if (!isNumeric(value)) {
  Bot.sendMessage("*📛 Invaild value. Enter only numeric value. Try again*")
}else{
let gift =
User.getProperty("gfit")
User.setProperty("gift" , data.message ,"string")
balance.add(-data.message)
Bot.runCommand("GIFT2")
}
}
}

