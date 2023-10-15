/*CMD
  command: GIFT3
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

let gift =
User.getProperty("gift")
var tt = options.myData
var inl = [[{ text : "Share" , url : "https://t.me/share/url?text=📱Code- "+ tt +"  @"+bot.name+"" }]]
Bot.setProperty(tt, gift,"integer")
var th = "https://lotaroda.sirv.com/20210902_143600_0000.png?text="+tt+"&text.font.weight=extra-bold&text.size=60&text.font.style=italic&text.outline.width=1&text.outline.color=4AE5EE&text.position=center&text.font.family=Bitter&text.color=4AE5EE&text.outline.blur=10"
Api.sendPhoto({
photo: ""+th+"",
caption: " Code : "+tt+"",
parse_mode : "Markdown" , reply_markup: { inline_keyboard: inl},disable_web_page_preview: true
})

