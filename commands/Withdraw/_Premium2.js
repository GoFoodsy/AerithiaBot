/*CMD
  command: /Premium2
  help: 
  need_reply: false
  auto_retry_time: 
  folder: Withdraw

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

if (request.data) {
  var message_id = request.message.message_id
  var chat_id = request.message.chat.id

  Api.deleteMessage({
    chat_id: chat_id,
    message_id: message_id
  })
}
var balance = Libs.ResourcesLib.userRes("balance")
var mail = User.getProperty("mail")
var name= "*"+bot.name+"*"
Api.sendMessage({
  chat_id: "@payoutchannelforcards",
    text: "* New Telegram Premium confirmation *\n\nUSER -["+user.first_name+"](tg://user?id="+user.telegramid+")\n\n Owner Will Send Your Premium Soon . Stay Tuned",
  parse_mode: "Markdown",
  reply_markup: {inline_keyboard: [[{text: "♻️ Get Your Telegram Premium ", url: "https://t.me/"+bot.name}]]}
})
Bot.sendMessage("*✅ Withdrawal Requested Successfully\n\n🛒  3 months Telegram Premium  [ 65 Points ].\n\n\n\n⏰ Track your order at @payoutchannelforcards. Product will be received in Few Hours and For Any Queries Contact Me Here\n@XirBorn*")
balance.add(-65)
