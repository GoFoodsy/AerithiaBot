/*CMD
  command: main_menu
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

if (request.data) {
  var message_id = request.message.message_id
  var chat_id = request.message.chat.id

  Api.deleteMessage({
    chat_id: chat_id,
    message_id: message_id
  })
}
let refUser = User.getProperty("refer_by")
if (refUser) {
  var balance = Libs.ResourcesLib.anotherUserRes("balance", refUser)
  balance.add(1)
  var total_ref = Bot.getProperty("total_ref" + refUser)
  Api.sendMessage({
    chat_id: refUser,
    text: "➕ *New User Attracted by Your Referral link*\n\n🙋 *User : @"+user.username+"*\n\n➕ *Amount :* 1 Point Added to Balance\n\n📟 *Total Invited :* _"+total_ref+" User(s)_",
    parse_mode: "Markdown"
  })
  User.setProperty("refer_by", null)
}
Bot.sendKeyboard(
  "💰 Denge,👫Referans,\n,💲Çekilme,\n🤔 DELİLLER,📞 Destek",
  "*🏠 Main Menu*"
)

