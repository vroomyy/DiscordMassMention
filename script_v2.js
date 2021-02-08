function FindModule(item)
{
            var req = window.webpackJsonp.push([[], {'__extra_id__': (module, exports, req) => module.exports = req}, [['__extra_id__']]]);

            for (const in1 in req.c) {
                if (req.c.hasOwnProperty(in1)) {
                    const m = req.c[in1].exports;
                    if (m && m.__esModule && m.default && m.default[item]) return m.default;
                    if (m && m[item]) return m;
                }
            }
}

let amount = 60;
let guildid = "801215578420412457";
let channelid = "808123576560517143";
let interval = 1000;
let message = "message here";
var memberList = FindModule("getMembers").getMembers(guildid);

var loop = setInterval(function()
 {
      var users = "";
      for(var index = memberList.length - 1; index > 0; index--)
      {
       var rndIndex = Math.floor(Math.random() * (index + 1));
       var temp = memberList[rndIndex];
       memberList[rndIndex] = memberList[index];
       memberList[index] = temp;
      }

    memberList.slice(0, amount).forEach(member => {
                users += `<@${member.userId}>`
    });

    FindModule("sendMessage").sendMessage(channelid, {content: `${users} ${message}`}).then(resp => { 
        console.log("Message sent");   
    }).catch(err => {
        console.warn("Stopped spamming!");
        clearInterval(loop); 
    });

}, interval)
