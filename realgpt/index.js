(function(i,N,d){"use strict";var t;(function(e){e[e.BUILT_IN=0]="BUILT_IN",e[e.BUILT_IN_TEXT=1]="BUILT_IN_TEXT",e[e.BUILT_IN_INTEGRATION=2]="BUILT_IN_INTEGRATION",e[e.BOT=3]="BOT",e[e.PLACEHOLDER=4]="PLACEHOLDER"})(t||(t={}));var n;(function(e){e[e.SUB_COMMAND=1]="SUB_COMMAND",e[e.SUB_COMMAND_GROUP=2]="SUB_COMMAND_GROUP",e[e.STRING=3]="STRING",e[e.INTEGER=4]="INTEGER",e[e.BOOLEAN=5]="BOOLEAN",e[e.USER=6]="USER",e[e.CHANNEL=7]="CHANNEL",e[e.ROLE=8]="ROLE",e[e.MENTIONABLE=9]="MENTIONABLE",e[e.NUMBER=10]="NUMBER",e[e.ATTACHMENT=11]="ATTACHMENT"})(n||(n={}));var o;(function(e){e[e.CHAT=1]="CHAT",e[e.USER=2]="USER",e[e.MESSAGE=3]="MESSAGE"})(o||(o={}));const{sendBotMessage:a}=d.findByProps("sendBotMessage"),s="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Safari/537.36",m=N.registerCommand({name:"realgpt",displayName:"realgpt",description:"why",displayDescription:"why",options:[{name:"prompt",displayName:"prompt",description:"self explantory",displayDescription:"self explantory",type:n.STRING,required:!0}],type:o.CHAT,inputType:t.BUILT_IN_TEXT,applicationId:"-1",async execute(e,p){const r=await fetch("https://free.churchless.tech/v1/chat/completions",{method:"POST",body:JSON.stringify({frequency_penalty:0,max_tokens:null,model:"gpt-3.5-turbo",presence_penalty:0,stream:!1,temperature:1,top_p:1,messages:[{content:e[0].value,role:"user"}]}),headers:{"content-type":"application/json","user-agent":s}});if(!r.ok){const l=await fetch("https://chatbot.theb.ai/api/chat-process",{method:"POST",body:JSON.stringify({prompt:e[0].value}),headers:{"content-type":"application/json","user-agent":s}});if(!l.ok)return a(p.channel.id,"Failed to fetch data");const A=await l.text(),T=JSON.parse(A.split(`
`).pop());return a(p.channel.id,`> prompt: ${e[0].value}
> model: \`${T.detail.model}\`

${T.text}`)}const c=await r.json();return a(p.channel.id,`> prompt: ${e[0].value}
> model: \`${c.model}\`

${c.choices[0].message.content}`)}}),u=function(){return m()};return i.onUnload=u,i})({},vendetta.commands,vendetta.metro);
