/*CMD
  command: Messageuser
  help: 
  need_reply: true
  auto_retry_time: 
  folder: admin panel
  answer: *🛠Enter User id?*

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

var admin = Bot.getProperty("botadmin"+user.telegramid)
if (user.telegramid == admin){
let msg = message
User.setProperty("id", msg, "integer")
Bot.sendMessage(" Now Type Your Message For User ")
Bot.runCommand("/send")
} else {
Bot.sendMessage("*You're not an Admin*")
}


