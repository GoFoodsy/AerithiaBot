/*CMD
  command: /admin
  help: 
  need_reply: false
  auto_retry_time: 
  folder: admin panel
  answer: enter password 

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


var password = Bot.getProperty("panelpass")

if (message == "Sachit@1807"){
Bot.sendMessage("🔐Access Granted")

