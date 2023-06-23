(function(v,g,t,p,d,h,x,z,G,F,$){"use strict";var A={string:function(e,n){return e.split(n?/(?=[A-Z])/:"_").map(function(a){return a[0].toUpperCase()+a.slice(1)}).join(" ")}};async function H(e,n){let{fromLanguage:a,toLanguage:o}=n;const l="https://translate.googleapis.com/translate_a/single?"+new URLSearchParams({client:"gtx",sl:a,tl:o,dt:"t",dj:"1",source:"input",q:e}),s=await fetch(l);if(!s.ok)throw new Error("Failed to translate");const{src:i,sentences:f}=await s.json();return{src:i,text:f.map(function(k){return k?.trans}).filter(Boolean).join("")}}async function q(e,n,a,o){let{fromLanguage:l="detect",toLanguage:s="english"}=n;const i=await H(e,{fromLanguage:a[l],toLanguage:a[s]});return o?e:i.text}var C={translate:q};d.storage.DislateLangFrom??="detect",d.storage.DislateLangTo??="english",d.storage.DislateLangAbbr??=!1;let r=d.storage;var V=g.findByProps("sendBotMessage"),y=["detect","amharic","arabic","aymara","assamese","akan","azerbaijani","belarusian","bulgarian","bambara","bengali","corsican","czech","bosnian","danish","catalan","valencian","german","ewe","divehi","dhivehi","maldivian","english","greek","estonian","esperanto","basque","spanish","castilian","finnish","french","persian","irish","galician","guarani","western_frisian","gujarati","gaelic","scottish_gaelic","hausa","croatian","hebrew","hindi","haitian","haitian_creole","armenian","indonesian","hungarian","igbo","icelandic","italian","georgian","javanese","japanese","korean","kazakh","kannada","afrikaans","central_khmer","welsh","kurdish","kirghiz","kyrgyz","latin","luxembourgish","letzeburgesch","ganda","lao","latvian","lingala","lithuanian","malagasy","macedonian","malayalam","maori","marathi","norwegian_bokm\xE5l","mongolian","burmese","maltese","nepali","malay","dutch","flemish","chichewa","chewa","nyanja","norwegian","oromo","oriya","panjabi","punjabi","polish","quechua","pushto","pashto","russian","sanskrit","romanian","moldavian","moldovan","slovenian","kinyarwanda","slovak","sinhala","sinhalese","samoan","shona","somali","serbian","albanian","swahili","southern_sotho","swedish","sundanese","tamil","tajik","telugu","tagalog","turkmen","tigrinya","thai","tsonga","sindhi","portuguese","twi","turkish","tatar","urdu","ukrainian","uighur","uyghur","uzbek","vietnamese","yiddish","xhosa","chinese_traditional","chinese_simplified","zulu","yoruba"],O=["auto","am","ar","ay","as","ak","az","be","bg","bm","bn","co","cs","bs","da","ca","ca","de","ee","dv","dv","dv","en","el","et","eo","eu","es","es","fi","fr","fa","ga","gl","gn","fy","gu","gd","gd","ha","hr","he","hi","ht","ht","hy","id","hu","ig","is","it","ka","jv","ja","ko","kk","kn","af","km","cy","ku","ky","ky","la","lb","lb","lg","lo","lv","ln","lt","mg","mk","ml","mi","mr","nb","mn","my","mt","ne","ms","nl","nl","ny","ny","ny","no","om","or","pa","pa","pl","qu","ps","ps","ru","sa","ro","ro","ro","sl","rw","sk","si","si","sm","sn","so","sr","sq","sw","st","sv","su","ta","tg","te","tl","tk","ti","th","ts","sd","pt","tw","tr","tt","ur","uk","ug","ug","uz","vi","yi","xh","zh-tw","zh-cn","zu","yo"];const{FormRow:M}=h.Forms,{ScrollView:X}=t.ReactNative;function Y(){const[e,n]=t.React.useState("");return t.React.createElement(X,{style:{flex:1}},t.React.createElement(h.Search,{style:{padding:15},placeholder:"Search Language",onChangeText:function(a){n(a)}}),Object.values(y).filter(function(a){return a!=="detect"}).filter(function(a){return a.includes(e)}).map(function(a,o){return t.React.createElement(M,{label:a,trailing:function(){return t.React.createElement(M.Arrow,null)},onPress:function(){r.DislateLangTo!=a&&(r.DislateLangTo=a,G.showToast(`Saved ToLang to ${r.DislateLangTo}`,p.getAssetIDByName("check")))}})}))}const{ScrollView:K,Text:J}=t.ReactNative,{FormRow:L}=h.Forms,Q=t.stylesheet.createThemedStyleSheet({subheaderText:{color:z.semanticColors.HEADER_SECONDARY,textAlign:"center",margin:10,marginBottom:50,letterSpacing:.25,fontFamily:t.constants.Fonts.PRIMARY_BOLD,fontSize:14}});function Z(){const e=t.NavigationNative.useNavigation();return t.React.createElement(K,null,t.React.createElement(L,{label:"Translate to",subLabel:r.DislateLangTo,leading:t.React.createElement(L.Icon,{source:p.getAssetIDByName("ic_activity_24px")}),trailing:function(){return t.React.createElement(L.Arrow,null)},onPress:function(){return e.push("VendettaCustomPage",{title:"Translate to",render:Y})}}),t.React.createElement(J,{style:Q.subheaderText,onPress:function(){return t.url.openURL("https://github.com/aeongdesu/vdplugins")}},`Build: (${d.manifest.hash.substring(0,7)})`))}var R;(function(e){e[e.BUILT_IN=0]="BUILT_IN",e[e.BUILT_IN_TEXT=1]="BUILT_IN_TEXT",e[e.BUILT_IN_INTEGRATION=2]="BUILT_IN_INTEGRATION",e[e.BOT=3]="BOT",e[e.PLACEHOLDER=4]="PLACEHOLDER"})(R||(R={}));var T;(function(e){e[e.SUB_COMMAND=1]="SUB_COMMAND",e[e.SUB_COMMAND_GROUP=2]="SUB_COMMAND_GROUP",e[e.STRING=3]="STRING",e[e.INTEGER=4]="INTEGER",e[e.BOOLEAN=5]="BOOLEAN",e[e.USER=6]="USER",e[e.CHANNEL=7]="CHANNEL",e[e.ROLE=8]="ROLE",e[e.MENTIONABLE=9]="MENTIONABLE",e[e.NUMBER=10]="NUMBER",e[e.ATTACHMENT=11]="ATTACHMENT"})(T||(T={}));var _;(function(e){e[e.CHAT=1]="CHAT",e[e.USER=2]="USER",e[e.MESSAGE=3]="MESSAGE"})(_||(_={}));const W=y.filter(function(e){return e!=="detect"}).map(function(e){return{name:A.string(e),displayName:A.string(e),value:e}});var ee=F.registerCommand({id:"translate",name:"translate",displayName:"translate",description:"Send a message using Dislate in any language chosen, using the Google Translate API.",displayDescription:"Send a message using Dislate in any language chosen, using the Google Translate API.",type:_.CHAT,inputType:R.BUILT_IN_TEXT,options:[{name:"text",displayName:"text",description:"The text/message for Dislate to translate. Please note some formatting of mentions and emojis may break due to the API.",displayDescription:"The text/message for Dislate to translate. Please note some formatting of mentions and emojis may break due to the API.",type:T.STRING,required:!0},{name:"language",displayName:"language",description:'The language that Dislate will translate the text into. This can be any language from the list, except "Detect".',displayDescription:'The language that Dislate will translate the text into. This can be any language from the list, except "Detect".',type:T.STRING,choices:[...W],required:!0}],async execute(e,n){const a=e.find(function(i){return i.name==="text"}).value,o=e.find(function(i){return i.name==="language"}).value,l=Object.assign({},...y.map(function(i,f){return{[i]:O[f]}})),s=await C.string(a,{fromLanguage:r.DislateLangFrom,toLanguage:o},l);return s?await new Promise(function(i){return $.showConfirmationAlert({title:"Are you sure you want to send it?",content:React.createElement(React.Fragment,null,React.createElement(h.Codeblock,null,s)),confirmText:"Yep, send it!",onConfirm:function(){return i({content:s})},cancelText:"Nope, don't send it"})}):V.sendBotMessage(n.channel.id,`Failed to translate: ${a}`)}});const ae=[ee],U=g.findByProps("openLazy","hideActionSheet"),te=g.findByName("Icon"),ne=g.findByStoreName("MessageStore"),ie=g.findByStoreName("ChannelStore"),{FormRow:se}=h.Forms,E=Object.assign({},...y.map(function(e,n){return{[e]:O[n]}}));let N=[{invalid_id:"rosie and sapphire sucks"}],P=[];var re={onLoad:function(){P.push(x.before("openLazy",U,function(e){const[n,a,o]=e;a==="MessageLongPressActionSheet"&&n.then(function(l){const s=x.after("default",l,function(i,f){t.React.useEffect(function(){return function(){s()}},[]);let[k,D]=f.props?.children?.props?.children?.props?.children;const c=k?.props?.message??o?.message,j=D?.findIndex(function(m){return m.props?.message===t.i18n.Messages.MARK_UNREAD});if(!D||!c||j===-1)return;const u=ne.getMessage(c.channel_id,c.id);if(!u?.content&&!c.content)return;const I=u.id??c.id,oe=u.content??c.content,S=N.find(function(m){return Object.keys(m)[0]===I},"cache object");let w=S?"Revert":"Translate";const le=async function(m){const ce=m??r.DislateLangFrom,B=r.DislateLangTo,b=w==="Translate",ue=await C.translate(u.content,{fromLanguage:ce,toLanguage:B},E,!b);t.FluxDispatcher.dispatch({type:"MESSAGE_UPDATE",message:{...u,content:`${b?ue:S[I]} ${b?`\`[${r.DislateLangAbbr?E[B].toUpperCase():A.string(B)}]\``:""}`,guild_id:ie.getChannel(u.channel_id).guild_id},log_edit:!1}),b?N.unshift({[I]:oe}):N=N.filter(function(ge){return ge!==S},"cached data override")};D.splice(j,0,t.React.createElement(se,{label:`${w} Message`,leading:t.React.createElement(te,{source:w==="Translate"?p.getAssetIDByName("ic_locale_24px"):p.getAssetIDByName("ic_highlight")}),onPress:async function(){await le(),U.hideActionSheet()}}))})})}))},onUnload:function(){for(const e of ae)e();for(const e of P)e()},settings:Z};return v.default=re,Object.defineProperty(v,"__esModule",{value:!0}),v})({},vendetta.metro,vendetta.metro.common,vendetta.ui.assets,vendetta.plugin,vendetta.ui.components,vendetta.patcher,vendetta.ui,vendetta.ui.toasts,vendetta.commands,vendetta.ui.alerts);
