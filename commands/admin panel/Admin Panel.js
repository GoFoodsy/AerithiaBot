/*CMD
  command: Admin Panel
  help: 
  need_reply: true
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
var buttons = [
    [{title: "📣 Broadcast", command: "/broad" }],
    [{title: "🔒 Ban User ", command: "ban user" },{title: "🔓 Unban User", command: "unban user" }],[{title:"📤 Send Message to User", command:"MessageUser"}],
    [{title: "Add Admin", command: "/addadmin"},{title: "Remove Admin", command: "/RemoveAdmin"}],
    [{title: "Add account", command: "account" }],
    [{title: "Gift Card", command: "GIFTCARD"}],
    [{title: "🚧Log Out", command:"main_menu"}]
]

Bot.sendInlineKeyboard(buttons, "*Hey* " +user.first_name+ " \n*Welcome To the admin panel*" + "\n*💢Warning when using this panel please don't send any other command it may spoil your work*\n\n🌐 _Coded_ _by  @Sachit_99", {disable_web_page_preview: true});

}else {
Bot.sendMessage("🚫Wrong Password\n💢Access Denied")
}
