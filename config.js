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
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://d.uguu.se/ryNPRjBx.jpg";
global.devs = "917085345102";
global.sudo = process.env.SUDO || "917085345102";
global.owner = process.env.OWNER_NUMBER || "917085345102";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://d.uguu.se/ryNPRjBx.jpg,https://files.catbox.moe/48xcot.mp4";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "true";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "1";
global.read_status = process.env.AUTO_READ_STATUS || "false";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://rhodespair-1303049c463e.herokuapp.com";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiR0lTbkJONVpOMEFXb2dIQXJGV2orL3FERHZ3d1FXbXNoN1k4NXRzQ21sQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibi8yT1RFdEVmSTZpak5QOWs1bElQVVFmSUtiazJvQTV6SjFleXAzUGVtZz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJHRDFpc1NDZ3N4M1oycHViM1hBa3Jwc1BoSVBwTlpYZzk2dG10KzRMMFZVPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJwK1dqZ2V4cEowTDZXa2NPelFDT09lVnA0TkdPVGZrb041ZUQyby9Uc0NvPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImdEaDl4MDJ6L1k2MmErYUJZK3pUMDl3bUpwYlFnTUtOVmtpdTdETGY0a1E9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlpSSFlxUEZaNm9CdkdiVUFrVUVPczlWNWR5Mk9Fb1BKM0p0S0NJTDJqbFU9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaUd5ZW43eDFGOTgzOWJKV1FuUGtadTBpLzVkZnBjRzJaMkJRQkZhM0xrRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWDJFd3Rsem93SWo0OG5ZQmR6NmF1Z1l6NkFYVFlGVVVLN0ZRSVFIL0p6ST0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImVEVXlwQzdLR0wvV2ZwMWJSb0hIc2NUOTcwTzZHQm1OVWdQdFUrNkROZjRpMkRnUnZ1eDFOamZWVlFHejF0OFVKWTlSU254TlNHdHkvcDdrejh2RGhnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTAzLCJhZHZTZWNyZXRLZXkiOiJ3NHZDR0YyVlZkTWxBUjZXY0k3VlZZa0NoQkQvQmxOSEY1K0dvczdQNkZBPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjkxNzA4NTM0NTEwMkBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiIyNDVFODM5RTYwQ0YzODdDMDNBNzE5QUFGRTMxQTU2MCJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzM3OTU1ODM3fSx7ImtleSI6eyJyZW1vdGVKaWQiOiI5MTcwODUzNDUxMDJAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiMEZFM0EwNTIwMTZCRjdDQjZGQkVGQ0U0MUM4NkI1NjYifSwibWVzc2FnZVRpbWVzdGFtcCI6MTczNzk1NTgzOX1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiZ2pKNWllZHFScjJzOFpTZ0pyME5EUSIsInBob25lSWQiOiI1Y2M0Y2VkZi01MDYyLTQxZTktYmJhMC03NzJmOTBhYmZjZmYiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoid0ljaVRKTnlDeTB1R3A4ZzNQYXVBeUlOQkNZPSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjRXKzRJVnFBUVN2Z2V2bzlTT1htNjZ5MlgzTT0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiI3N1FDTEJBOCIsIm1lIjp7ImlkIjoiOTE3MDg1MzQ1MTAyOjQzQHMud2hhdHNhcHAubmV0IiwibmFtZSI6IuqngdudQXN0ck/bneqngiJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTmIvcGFvQ0VPK3ozTHdHR0F3Z0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiQ1p2VHpjR0pGVW85ZTNZMHE3bFR2Ri8vREZ3aytJTVJmc3IwWXk4eW1TWT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiWkd5OW5OZlhueFkvWFBGNWpRQ1NTZ0E4SE85MnRUOG5xaFdlbEVkVjY1Mmx3QmcrT2xoanBOM2lDeXQrY2doZGRGd2ZwMUJ5MWlhSTFjWll4SDZkQVE9PSIsImRldmljZVNpZ25hdHVyZSI6ImJZRllNME91anhQQi9kKzI3ZXQzdzBORnQyZkFhMjBHUitFOHRsNzlEb1R4L0lEWUtBbTlDRjlpT0hST2dBTzlyVzRlNzVTT3VYVVNrSkhBb291cml3PT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTE3MDg1MzQ1MTAyOjQzQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlFtYjA4M0JpUlZLUFh0Mk5LdTVVN3hmL3d4Y0pQaURFWDdLOUdNdk1wa20ifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3Mzc5NTU4MzUsIm15QXBwU3RhdGVLZXlJZCI6IkFDa0FBSjFyIn0=" // session id here
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || "™",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "꧁۝AstrO۝꧂™`",
  author: process.env.PACK_AUTHER || "꧁۝AstrO۝꧂",
  packname: process.env.PACK_NAME || "꧁۝AstrO۝꧂",
  botname: process.env.BOT_NAME || "`꧁۝AstrO۝꧂`",
  ownername: process.env.OWNER_NAME || "꧁۝AstrO۝꧂",
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
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
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
