/*CMD
  command: 💲Çekilme
  help: 
  need_reply: false
  auto_retry_time: 
  folder: Withdraw

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 💲çekilme
  group: 
CMD*/


var balance = Libs.ResourcesLib.userRes("balance")

var but = [
  [
    { text: "3 Months Telegram Premium", callback_data: "/Premium" }],[{ text: "🔥PUBG MOBILE 1000 UC ", callback_data: "/Primemail" }],[{ text: "🔥 LIVE TR CC", callback_data: "/live" }]
]
if (request.data) {
  var message_id = request.message.message_id
  var chat_id = request.message.chat.id
  Api.editMessageText({
  message_id: message_id,
  text:
    "*📨Puanlarınızı Birok Premium Hesaba Takas Edebilirsiniz.\n\n💰Bakiyeniz " +
    balance.value() +
    " Puan.\n\n🔄Exchange Point to ~\n👉3 Months Telegram premium [ 65 Points ].\n👉PUBG MOBILE 1000 UC [ 40 Points ].\n👉Live TR CC [ 40 Points ].*",
  parse_mode: "Markdown",
  reply_markup: {
    inline_keyboard: but
  },
  disable_web_page_preview: true
})
return
}




Api.sendMessage({
  message_id: message_id,
  text:
   "*📨You Can Exchange Your Point to Many Premium Accounts.\n\n💰Your Balance " +
    balance.value() +
    " Points.\n\n🔄Exchange Point to ~\n👉3 Months Telegram premium [ 65 Points ].\n👉PUBG MOBILE 1000 UC [ 40 Points ].\n👉Live TR CC [ 40 Points ].*",
  parse_mode: "Markdown",
  reply_markup: {
    inline_keyboard: but
  },
  disable_web_page_preview: true
})

