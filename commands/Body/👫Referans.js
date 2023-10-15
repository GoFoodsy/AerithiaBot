/*CMD
  command: 👫Referans
  help: 
  need_reply: false
  auto_retry_time: 
  folder: Body

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 👫referral
  group: 
CMD*/

var total_ref = Bot.getProperty("total_ref"+user.telegramid) == undefined ?0:Bot.getProperty("total_ref"+user.telegramid)
Bot.sendMessage(
  "*💰 Kullanıcıları Davet Edin ve 1 PUAN Kazanın\n\n💹 Bağlantınız : https://t.me/" +
    bot.name +
    "?start=" +
    user.telegramid +
    "\n\n🎯 Davet Ettiğiniz : "+total_ref+" Kullanıcı*"
)

