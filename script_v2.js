let request = (e) =>
 {
                        if (e && this._cache) return this._cache;
                        let t;
                        return (
                            "webpackJsonp" in window
                                ? (t = window.webpackJsonp.push([[], { [this.id]: (e, t, r) => (e.exports = r) }, [[this.id]]]))
                                : "webpackChunkdiscord_app" in window && window.webpackChunkdiscord_app.push([[this.id], {}, (e) => (t = e)]),
                            (this._cache = t)
                        );
}

let FindModule = (item)  =>
{
                        const o = request(item),
                            n = [];
                        for (let t in o.c) {
                            var m = o.c[t].exports;
                            if (m && m.__esModule && m.default && m.default[item]) return m.default;
                            if (m && m[item]) return m;
                        }
                        return t ? n : n.shift();
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
