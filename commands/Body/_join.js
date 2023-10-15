/*CMD
  command: /join
  help: 
  need_reply: false
  auto_retry_time: 
  folder: Body

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

Api.sendMessage({
  chat_id: user.telegramid,
  text:
    "*🔰 Welcome In Our Premium Account Giveaway Bot\n------------------------------------------------\n➡️ *[Main Channel](https://t.me/sachit_giveaways)*\n➡️ *[Giveaways](https://t.me/kings_premium)*\n➡️* -------------------------------------------------\n🛃 Before Using This Bot, After completing all tasks Click on ✅ Jᴏɪɴᴇᴅ!*",
  parse_mode: "Markdown",
  reply_markup: {
    inline_keyboard: [[{ text: "✅ Jᴏɪɴᴇᴅ", callback_data: "/start" }]]
  },
  disable_web_page_preview: true
})
