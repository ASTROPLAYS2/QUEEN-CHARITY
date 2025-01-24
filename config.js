//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "www.youtube.com";
global.video = "www.youtube.com";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "caseyrhodes46@gmail.com";
global.location = "Eiyenkorin, Nigeria";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://astrofx0011:astro@cluster0.lmwnxdt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "true";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/caseyweb/QUEEN-CHARITY";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VakUEfb4o7qVdkwPk83E";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VakUEfb4o7qVdkwPk83E";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://files.catbox.moe/o4f1bs.jpg";
global.devs = "254112192119";
global.sudo = process.env.SUDO || "919366928699";
global.owner = process.env.OWNER_NUMBER || "919366928699";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://files.catbox.moe/ex03qs.jpg,https://files.catbox.moe/48xcot.mp4,https://files.catbox.moe/o4f1bs.jpg,https://files.catbox.moe/4gu7ep.jpg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "false";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://rhodespair-1303049c463e.herokuapp.com";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRUJIWDRTVnhtcnRtb0IwclN1aTR2WTdUNGtJTFVMZ2x6QmZoeHlUSlptVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWTIwcUFmVmlyaHRiQ3E3RkM2dDlSNFpKM2tNcXpkSkd3c3FaUnBNTktVOD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJTQUVZM1NTYzB3eCs3eWxEMTU2emZZZ0ZwaUpoU2dDVVdtbzdsQjNvQ1hNPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJGbC9TcWpEZ29QNVpsa2NOZTNPeHkzVmwvblVRVEZ1SHI3MitHYndhREZZPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNHaEpOOHFndVo1VXdtaEQ5K29RWUEzM0piM0p1em5hZTdRbmU3dGMvVUE9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ikl2bTBXVnZpMTFETVdjK21HWTVTcEE2aitOZStQWlZ5K0ZiUTJUMU8wa1U9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicUdhTGhtVXpXMVNnUkM1M0pRWHhUYWNGV041S1pKNExoQmFvcVBlakUydz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVTZzcGRsR1dVV0oyWDNvZDhTMTJYcExLejROVnpVYVNkT2t2alJrYjZ3ND0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjlUQjJySHEySHl2M3NCaHE2Mms0ZWxBTVo4QnFLTndDWml5aUNOTmd6KzFycDdPdGNCM1JUbEl2L1lOcktxYnF3RThlUThOcE4rOW03ZzJrb3FhTkRnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTAyLCJhZHZTZWNyZXRLZXkiOiJPRmtSTjdzYTFnUWI0WGlXaFpQT01EY3ZuU2xpUXFkdnVjaVhvTmkvcmdvPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJnb2l2SVROQlJOYTJyN01ncVByRUZRIiwicGhvbmVJZCI6ImQxZmZhMTY1LWY4YzQtNGQ2YS1hYWVkLWMzYjgwMzk3YTE2NyIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJmWFp1ZUZpaWNjZEdOd29hZGNkbmhNU2xQbTQ9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidmlDNVQyb1dtUnJjSWViUUoyNGN1TkdUcTNNPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6Ilk3QlJFNEpYIiwibWUiOnsiaWQiOiI5MTkzNjY5Mjg2OTk6MTVAcy53aGF0c2FwcC5uZXQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ05IUzA1c0hFSXVGejd3R0dBUWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IkFmMUpWM0hMYnF6Nzg3c0tNUFlmUXIzM0dHSEtKdE9GTlcvWFVyb0dVMmM9IiwiYWNjb3VudFNpZ25hdHVyZSI6Ildid0E0V0xUZUc2VjNTYU9DUXFmZlFHT3J5a05iWGtjbFpaZmY2ZFdsem1ucStVYVQ3eHdzWjFIWmI2a2FwZEVjbFdxSEZhVm5lRGt6QUxzVUtLYkJnPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJ0QkJaNXl6dEhXUEhjRmN0UjArcWsvTEI3djZmSjhDZFFGR0Y4ZHE2dVVjWWtuREMxZUlheUpvOG80U1QxL0tKZERLYmc3REhSc2JGODNNS2NYWmNBZz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjkxOTM2NjkyODY5OToxNUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJRSDlTVmR4eTI2cysvTzdDakQySDBLOTl4aGh5aWJUaFRWdjExSzZCbE5uIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzM3NzM2ODU3fQ==" // session id here
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || "#",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "Baby Monster 👻`",
  author: process.env.PACK_AUTHER || "Baby Monster 👻",
  packname: process.env.PACK_NAME || "Baby Monster 👻",
  botname: process.env.BOT_NAME || "`Baby Monster👻`",
  ownername: process.env.OWNER_NAME || "Baby Monster👻",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "N I K K A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = true;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
