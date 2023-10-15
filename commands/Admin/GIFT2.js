/*CMD
  command: GIFT2
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Admin
  answer: 
  keyboard: 
  aliases: 
  group: 
CMD*/

var characters = "1234567890ABCDEFGHIJKLUVWXYZ12345678901234567890123456789012345678901234567890"

function generateString(length) {
    let result = '';
    const charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
}

Bot.setProperty("b",generateString(15), "string")
let b = Bot.getProperty("b")
var options = { myData: b }
Bot.run({ command: "GIFT3", options })
