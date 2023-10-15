/*CMD
  command: /addadmin
  help: 
  need_reply: true
  auto_retry_time: 
  folder: admin panel
  answer: *Send User Telegram ID🔽*

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

if (user.telegramid == Bot.getProperty("admin")){
Bot.sendMessage("Promoted "+message+" as An Admin")
Bot.sendMessageToChatWithId(""+message+"", "*You are now an Admin*")
Bot.setProperty("botadmin"+message+"",""+message+"","string")
}else{
Bot.sendMessage("You aren't Owner")
}
