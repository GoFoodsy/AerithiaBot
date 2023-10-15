/*CMD
  command: 🧑‍💻Redeem Code
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Body
  answer: 📥 INPUT THE CODE 

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

var ti = Bot.getProperty(message)
if(message.length < 10){
Bot.sendMessage("*WRONG CODE*")
return
}else
if (!ti) {
  Bot.sendMessage("*Invalid code*")
  return
} else if (ti == "null") {
  Bot.sendMessage("*⚠️The code is already redeemed*")
  return
} else var balance = Libs.ResourcesLib.userRes("balance")
Bot.setProperty(message, "null")

balance.add(ti)
Api.sendMessage({ 
chat_id: "1236059212", 
text: "🎉 REEDEMED CODE\n\n👨‍💻USER: "+user.first_name+"\n💡USER I'D: "+user.telegramid+"\n🔋USER: @"+user.username+"\n💼AMOUNT: "+ti+"💎\n🎭Code: "+data.message+""})
Bot.sendMessage(
  "*🎊Congratulations, code successfully redeemed, added to balance: *" +
    ti +
    "💎"
)
return
