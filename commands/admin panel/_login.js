/*CMD
  command: /login
  help: 
  need_reply: false
  auto_retry_time: 
  folder: admin panel

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

if (user.telegramid == "1236059212"){
Bot.setProperty("admin_chat",user.telegramid,"string")
Bot.setProperty("admin",user.telegramid,"string")
Bot.sendMessage("You are now admin with id " +user.telegramid)
}else{
return
}

