const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_11_37_07_11_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICA5NyxcbiAgICAgICAgMjI0LFxuICAgICAgICAxNzksXG4gICAgICAgIDE4MyxcbiAgICAgICAgMzMsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjM4LFxuICAgICAgICAxOTksXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTgzLFxuICAgICAgICA1NSxcbiAgICAgICAgMjEwLFxuICAgICAgICA3MixcbiAgICAgICAgMTA1LFxuICAgICAgICAzMixcbiAgICAgICAgMTAyLFxuICAgICAgICAxOTUsXG4gICAgICAgIDExNSxcbiAgICAgICAgODksXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjU0LFxuICAgICAgICAxODEsXG4gICAgICAgIDc4LFxuICAgICAgICA3NSxcbiAgICAgICAgMTUsXG4gICAgICAgIDcyLFxuICAgICAgICAxMzcsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMzMsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTAwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI1MixcbiAgICAgICAgODIsXG4gICAgICAgIDg2LFxuICAgICAgICA5NixcbiAgICAgICAgNzgsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTQxLFxuICAgICAgICAxMjAsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjM2LFxuICAgICAgICAxNTYsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjMsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjQsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTY0LFxuICAgICAgICAxODgsXG4gICAgICAgIDc5LFxuICAgICAgICAxNDQsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTYyLFxuICAgICAgICAxMzgsXG4gICAgICAgIDIzMixcbiAgICAgICAgNSxcbiAgICAgICAgNzgsXG4gICAgICAgIDgyLFxuICAgICAgICA1OSxcbiAgICAgICAgOSxcbiAgICAgICAgMTAsXG4gICAgICAgIDEwMixcbiAgICAgICAgM1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTMzLFxuICAgICAgICA2NSxcbiAgICAgICAgNDksXG4gICAgICAgIDIxLFxuICAgICAgICAxNyxcbiAgICAgICAgMjAxLFxuICAgICAgICAyNTAsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTE5LFxuICAgICAgICAxNjYsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjMwLFxuICAgICAgICAyNTUsXG4gICAgICAgIDE3MyxcbiAgICAgICAgNDEsXG4gICAgICAgIDc5LFxuICAgICAgICA4LFxuICAgICAgICA1OCxcbiAgICAgICAgMjgsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjIyLFxuICAgICAgICAxODUsXG4gICAgICAgIDE0LFxuICAgICAgICAxMTUsXG4gICAgICAgIDEyNCxcbiAgICAgICAgNjUsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTkwLFxuICAgICAgICAxNDEsXG4gICAgICAgIDc0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTYyLFxuICAgICAgICAxMDUsXG4gICAgICAgIDgyLFxuICAgICAgICAxMzksXG4gICAgICAgIDE4MSxcbiAgICAgICAgMSxcbiAgICAgICAgMTMsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjU0LFxuICAgICAgICAxNzMsXG4gICAgICAgIDI4LFxuICAgICAgICAyMzUsXG4gICAgICAgIDE3NSxcbiAgICAgICAgNzAsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMCxcbiAgICAgICAgMTUxLFxuICAgICAgICAxODcsXG4gICAgICAgIDI0LFxuICAgICAgICAyMTgsXG4gICAgICAgIDc0LFxuICAgICAgICAxNDUsXG4gICAgICAgIDU2LFxuICAgICAgICAyMzAsXG4gICAgICAgIDE4MixcbiAgICAgICAgNjYsXG4gICAgICAgIDAsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTAxLFxuICAgICAgICAxODEsXG4gICAgICAgIDc5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDgsXG4gICAgICAgIDEwOCxcbiAgICAgICAgNDAsXG4gICAgICAgIDkyLFxuICAgICAgICA4MCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxMjcsXG4gICAgICAgIDI4LFxuICAgICAgICA3LFxuICAgICAgICAyMjUsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTI3LFxuICAgICAgICAxNjMsXG4gICAgICAgIDE0MixcbiAgICAgICAgNjgsXG4gICAgICAgIDY2LFxuICAgICAgICAxNTksXG4gICAgICAgIDI3LFxuICAgICAgICA5OCxcbiAgICAgICAgNTIsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMzksXG4gICAgICAgIDEyLFxuICAgICAgICAxMjIsXG4gICAgICAgIDQxLFxuICAgICAgICAxNzQsXG4gICAgICAgIDExNixcbiAgICAgICAgMjQ2LFxuICAgICAgICAxOTUsXG4gICAgICAgIDcyLFxuICAgICAgICAyMDYsXG4gICAgICAgIDEyNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzksXG4gICAgICAgIDM1LFxuICAgICAgICA0NixcbiAgICAgICAgMTMxLFxuICAgICAgICAyMTMsXG4gICAgICAgIDU2LFxuICAgICAgICA1MyxcbiAgICAgICAgMjEsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTQzLFxuICAgICAgICAxMDQsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjM0LFxuICAgICAgICAxMzksXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTI4LFxuICAgICAgICAxNzcsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjE0LFxuICAgICAgICAyNDksXG4gICAgICAgIDU2LFxuICAgICAgICAxOSxcbiAgICAgICAgMTMzLFxuICAgICAgICA4MyxcbiAgICAgICAgNDQsXG4gICAgICAgIDEzMSxcbiAgICAgICAgNTgsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxNzIsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDc1XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDI5LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgNixcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI1NCxcbiAgICAgICAgNjksXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTg0LFxuICAgICAgICAxNDYsXG4gICAgICAgIDgzLFxuICAgICAgICA2NyxcbiAgICAgICAgODMsXG4gICAgICAgIDE0OCxcbiAgICAgICAgNjIsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTYwLFxuICAgICAgICAyNTMsXG4gICAgICAgIDQyLFxuICAgICAgICAxNTIsXG4gICAgICAgIDUxLFxuICAgICAgICA4MixcbiAgICAgICAgMjQsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTAxLFxuICAgICAgICAxMDAsXG4gICAgICAgIDE2LFxuICAgICAgICAxMzIsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTIwLFxuICAgICAgICA4MixcbiAgICAgICAgNjAsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjE1LFxuICAgICAgICAyNDYsXG4gICAgICAgIDk1LFxuICAgICAgICA3MixcbiAgICAgICAgMjM4LFxuICAgICAgICAxMDQsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTIyLFxuICAgICAgICAyMCxcbiAgICAgICAgNzQsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjQyLFxuICAgICAgICAxOTgsXG4gICAgICAgIDEwLFxuICAgICAgICAxNDQsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjQsXG4gICAgICAgIDQ5LFxuICAgICAgICAxNTIsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTA0LFxuICAgICAgICAxMjksXG4gICAgICAgIDUsXG4gICAgICAgIDEyNixcbiAgICAgICAgNzMsXG4gICAgICAgIDc2LFxuICAgICAgICAyMzEsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAzOSxcbiAgICAgICAgMjQzLFxuICAgICAgICAxMDksXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTgsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTM2XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA5OCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJTc2djYk1SMTRYSGRUY0VtZ3ZqS3d5dHBLL3UxdWhYa1lBL1ptdDRxRFFBPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJYZ0xYN3RJd1RaU01DRk1ZVWVOSnB3XCIsXG4gIFwicGhvbmVJZFwiOiBcIjlmMDc0ODcwLTk3NzUtNDBmOC05YWIyLTk3ZjAwODQ3YmEyN1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxODUsXG4gICAgICA0OCxcbiAgICAgIDksXG4gICAgICA1MSxcbiAgICAgIDYwLFxuICAgICAgMjQ4LFxuICAgICAgNDcsXG4gICAgICA2OCxcbiAgICAgIDI0MixcbiAgICAgIDI0OCxcbiAgICAgIDgwLFxuICAgICAgMjQsXG4gICAgICAxMTgsXG4gICAgICAxMDMsXG4gICAgICA0MixcbiAgICAgIDI2LFxuICAgICAgNTksXG4gICAgICAzNSxcbiAgICAgIDM5LFxuICAgICAgMTIwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogZmFsc2UsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyNTIsXG4gICAgICAyMixcbiAgICAgIDI2LFxuICAgICAgMTIwLFxuICAgICAgMjA0LFxuICAgICAgMzYsXG4gICAgICAxMzgsXG4gICAgICAyMSxcbiAgICAgIDE3OSxcbiAgICAgIDIzNixcbiAgICAgIDExNyxcbiAgICAgIDg3LFxuICAgICAgMzMsXG4gICAgICAxNTIsXG4gICAgICAxNSxcbiAgICAgIDE2MSxcbiAgICAgIDEsXG4gICAgICAyMTksXG4gICAgICAyNixcbiAgICAgIDk1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDUEh3eDFRUTZJZS90QVlZQnlBQUtBQT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJ6UVoyUjJXekZSM0FQVWxkdzNQVDhPYWpwVE5DeG5uRWFpOUJoL01vQmhRPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImMzbEwwV1l3WjI0Nm8rN09UTzVlRUs4NGtrSUF5TUFIOTVrNEVSb2R4bEpjOXU5ODVncEMvSWVNejlHcWljU2ZOanJPVnJJYzZDK0ROMnIzS1VSV0N3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImFHcFczM04va1VQQXdySmprZHJyd1AvMXg1T1NFNDhKMFo5cUU4VTh4SWhuaXRjZHk1YjFzNVV5blRyaEJvZE5nWGUxYXQyU2RTNkJLS29URjFRUWlBPT1cIlxuICB9LFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0ODE0NzE5MjE2OTo4MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTc2MjE0MDY5MjMxNzgyOjgxQGxpZFwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0ODE0NzE5MjE2OTo4MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICA2MSxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgNixcbiAgICAgICAgICAyMFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIwNjk3ODM3LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFFMEFBQ1JGXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFDUkQuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJOMGt0d1JCTWZRMGpRUGZwKzVtQkt2QWFPTDZlWXcxTC90dllGZytTSlY4PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE3NzMzODQ4MCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIwXCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBQ1JFLmpzb24iOiAie1wia2V5RGF0YVwiOlwiMXJST0krQlcrQ3gzVjJxWXhqa204cDlLMjZWbUtzZ3NtZFg0V3QrSkVCST1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxNzczMzg0ODEsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUNSRy5qc29uIjogIntcImtleURhdGFcIjpcImhHNEYreGVTNzJybHNCZFB1VGw0M0FNSlVSRnhnd2RBQVBZVVg3RWFadnc9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTc3MzM4NDgxLFwiY3VycmVudEluZGV4XCI6NCxcImRldmljZUluZGV4ZXNcIjpbMCwyLDRdfSxcInRpbWVzdGFtcFwiOlwiMTcyMDE5Mzg4MDQwM1wifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUNSSC5qc29uIjogIntcImtleURhdGFcIjpcIkd1ajdlaXNmVXA4NkFZanpONmtaK3RrUitIK3I1U0tqbTI0STJRb3lXQ009XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTc3MzM4NDgxLFwiY3VycmVudEluZGV4XCI6NixcImRldmljZUluZGV4ZXNcIjpbMCwyLDQsNl19LFwidGltZXN0YW1wXCI6XCIwXCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBQ1JJLmpzb24iOiAie1wia2V5RGF0YVwiOlwiNnJNU2NNU0pTZkk2UXRaUEdDNFhLV1BkdVRKVHR1bm5qdFZWZDNvUjJZaz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxNzczMzg0ODEsXCJjdXJyZW50SW5kZXhcIjo2LFwiZGV2aWNlSW5kZXhlc1wiOlswLDIsNF19LFwidGltZXN0YW1wXCI6XCIwXCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBQ1JKLmpzb24iOiAie1wia2V5RGF0YVwiOlwic0ZkbG9lYWNibW1oQjNINmNqRW14TGFlUnJiZTVZbXlVRkx4Y05Ialg0bz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxNzczMzg0ODEsXCJjdXJyZW50SW5kZXhcIjo2LFwiZGV2aWNlSW5kZXhlc1wiOlswLDJdfSxcInRpbWVzdGFtcFwiOlwiMTcyMDY5Nzc5ODAzMlwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BRTBBQUNSRi5qc29uIjogIntcImtleURhdGFcIjpcIjRWMUgyS1R3VjNjTzRadEtTMkcrcHAyYU9qWnc5Ulo0Qk5ybkNCRGV4L1E9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTc3MzM4NDgxLFwiY3VycmVudEluZGV4XCI6MyxcImRldmljZUluZGV4ZXNcIjpbMCwyLDNdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
