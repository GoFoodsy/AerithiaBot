/*CMD
  command: /live
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

if(request.data){
var message_id = request.message.message_id
var chat_id = request.message.chat.id

Api.deleteMessage({
chat_id :  chat_id,
message_id : message_id
})
}
var but = [
  [
    { text: "Confirm", callback_data: "/live2" },    { text: "Cancel", callback_data: "main_menu" }]]
var balance = Libs.ResourcesLib.userRes("balance")
if (balance.value() < 40) {
  
  Bot.sendMessage(
    "🚫 You Need 40 Points For Exchanging .\n👬 Refer More to Earn .")
  return
}
Api.sendMessage({
  text:
    "*🎁 Take LIVE TR CC for 40 points ..\n\n👉For Exchange Click On Confirm*",
  parse_mode: "Markdown",
  reply_markup: {
    inline_keyboard:  but
  },
  disable_web_page_preview: true
})

