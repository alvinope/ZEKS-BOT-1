const fs = require('fs-extra')
const { 
    prefix
} = JSON.parse(fs.readFileSync('./settings/setting.json'))

/*

Dimohon untuk tidak menghapus link github saya, butuh support dari kalian! makasih.

*/

exports.textTnC = () => {
    return `
Source code / bot ini merupakan program open-source (gratis) yang ditulis menggunakan Javascript, kamu dapat menggunakan, menyalin, memodifikasi, menggabungkan, menerbitkan, mendistribusikan, mensublisensikan, dan atau menjual salinan dengan tanpa menghapus author utama dari source code / bot ini.

Dengan menggunakan source code / bot ini maka anda setuju dengan Syarat dan Kondisi sebagai berikut:
- Source code / bot tidak menyimpan data anda di server kami.
- Source code / bot tidak bertanggung jawab atas perintah anda kepada bot ini.
- Source code / bot anda bisa lihat di https://github.com/ArugaZ

Instagram: https://instagram.com/ini.arga/

Best regards, ArugaZ.`
}

/*

Dimohon untuk tidak menghapus link github saya, butuh support dari kalian! makasih.

*/

exports.textMenu = (pushname) => {
    return `
*ZEKS BOT*

*DONATE*
TRI 089630152417
DANA 081285040318

*Maker*
. *${prefix}sticker*
. *${prefix}stickergif*
. *${prefix}stickergiphy*
. *${prefix}meme*
. *${prefix}quotemaker*
. *${prefix}nulis*
. *${prefix}toimg*

*Islam*
. *${prefix}infosurah*
. *${prefix}surah*
. *${prefix}tafsir*
. *${prefix}ALaudio*
. *${prefix}jsolat*

*Download*
. *${prefix}instagram*
. *${prefix}ytmp3*
. *${prefix}ytmp4*

*Kerang Ajaib*
. *${prefix}artinama*
. *${prefix}cekjodoh*

*Search Any*
. *${prefix}images*
. *${prefix}sreddit*
. *${prefix}resep*
. *${prefix}stalkig*
. *${prefix}wiki*
. *${prefix}cuaca*
. *${prefix}chord*
. *${prefix}lirik*
. *${prefix}ss*
. *${prefix}play*
. *${prefix}whatanime*
. *${prefix}nekopoi*

*Random Teks*
. *${prefix}fakta*
. *${prefix}pantun*
. *${prefix}katabijak*
. *${prefix}quote*

*Random Images*
. *${prefix}anime*
. *${prefix}kpop*
. *${prefix}memes*

Lain-lain:
. *${prefix}tts*
. *${prefix}translate*
. *${prefix}resi*
. *${prefix}covidindo*
. *${prefix}ceklokasi*
. *${prefix}shortlink*
. *${prefix}bapakfont*
. *${prefix}groupinfo*

*Tentang Bot*
. *${prefix}tnc*
. *${prefix}donasi*
. *${prefix}ownerbot*
. *${prefix}join*
. *${prefix}getpic*
. *${prefix}speed*
. *${prefix}server*

_-_-_-_-_-_-_-_-_-_-_-_-_-_

*Owner Bot*
. *${prefix}ban* - banned
. *${prefix}bc* - promosi
. *${prefix}leaveall* - keluar semua grup
. *${prefix}clearall* - hapus semua chat

*ZEKS BOT*`
}

/*

Dimohon untuk tidak menghapus link github saya, butuh support dari kalian! makasih.

*/

exports.textAdmin = () => {
    return `
⚠ [ *Owner Group Only* ] ⚠
Berikut adalah fitur owner grup yang ada pada bot ini!
. *${prefix}kickall*
-owner adalah pembuat grup.

⚠ [ *Admin Group Only* ] ⚠ 
Berikut adalah fitur admin grup yang ada pada bot ini!

. *${prefix}add*
. *${prefix}kick* @tag
. *${prefix}promote* @tag
. *${prefix}demote* @tag
. *${prefix}tagall*
. *${prefix}del*
`
}

/*

Dimohon untuk tidak menghapus link github saya, butuh support dari kalian! makasih.

*/

exports.textDonasi = () => {
    return `
DONASI

TRI 089630152417
DANA 081285040318

*SEWA BOT 5K*

Terimakasih.`
}
