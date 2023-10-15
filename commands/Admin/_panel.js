/*CMD
  command: /panel
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Admin

  <<ANSWER

  ANSWER
  keyboard: 
  aliases: 
  group: 
CMD*/

if(params == "done"){
Bot.setProperty("pdone",true)
}
if (user.telegramid == Bot.getProperty("admin")) {
  var button = [
    [
      { text: "📊 Statistics", callback_data: "/stats" },
      { text: "🗣️ Broadcast", callback_data: "/broadcast" }
    ]
  ]
  Api.sendMessage({
    text:
      "*@" +
      user.username +
      " __Welcome To The Admin Panel__\n\n✨ Add bal: *`/bal " +
      user.telegramid +
      " 1`\n*✨ Add Account:* `/add email:pass`\n\n_⚠️ You can also Select a Service from Below Buttons_",
    parse_mode: "markdownv2",reply_markup:{inline_keyboard:button}
  })
if(Bot.getProperty("pdone") == undefined){
  Bot.sendMessage(
    "*Kindly Change Below Details Manually*\n\n • `Your Proof channel username in 🤔 PROOFS command` *( Find in Body Folder)*\n• `Add Your Telegram Username in 📞 Support Command`\n• `Edit minimum Withdraw` *(all withdraw commands are in withdraw folder)*\n•`Change You payment Channel Username and secrenshot username in /Netflix2`\n\n *🧿 Once You Done Send* `/panel done`"
  )}
}

