/*CMD
  command: /bal
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Admin
  answer: 
  keyboard: 
  aliases: 
  group: 
CMD*/

if (user.telegramid == Bot.getProperty("admin")) {
  if (params) {
    var spi = params.split(" ")
    var k1 = spi[0]
    var k2 = spi[1]

    let bal = Libs.ResourcesLib.anotherUserRes("balance", k1)
    bal.add(parseFloat(k2))
    Bot.sendMessage("💰Amount Added Successfully.\n\nDetails Below")
    Bot.sendMessage(
      "*🆔 User Id :-* " +
        k1 +
        "\n\n*💰Amount Added:- *" +
        k2 +
        "\n\n💰 Balance   :- " +
        bal.value()
    )
    Bot.sendMessageToChatWithId(
      k1,
      "*🆔 User Id :-* " +
        k1 +
        "\n\n*💰Amount Added:- *" +
        k2 +
        "\n\n💰 Balance   :- " +
        bal.value()
    )
  }else{
Bot.sendMessage("*Kindly add like:*\n\n`/bal user_id amount`")
}}

