const { create, Client } = require('@open-wa/wa-automate')
const figlet = require('figlet')
const options = require('./utils/options')
const { color, messageLog } = require('./utils')
const HandleMsg = require('./HandleMsg')

const start = (vinz = new Client()) => {
    console.log(color(figlet.textSync('----------------', { horizontalLayout: 'default' })))
    console.log(color(figlet.textSync('ZEKS BOT', { font: 'Ghost', horizontalLayout: 'default' })))
    console.log(color(figlet.textSync('----------------', { horizontalLayout: 'default' })))
    console.log(color('[DEV]'), color('VinZ', 'yellow'))
    console.log(color('[~>>]'), color('BOT Aktif! Jangan Lupa Istirahat :D', 'green'))

    // Mempertahankan sesi agar tetap nyala
    vinz.onStateChanged((state) => {
        console.log(color('[~>>]', 'red'), state)
        if (state === 'CONFLICT' || state === 'UNLAUNCHED') vinz.forceRefocus()
    })

    // ketika bot diinvite ke dalam group
    vinz.onAddedToGroup(async (chat) => {
	const groups = await vinz.getAllGroups()
	// kondisi ketika batas group bot telah tercapai,ubah di file settings/setting.json
	if (groups.length > groupLimit) {
	await vinz.sendText(chat.id, `Sorry, Sekarang Pay 5k/bulan`).then(() => {
	      vinz.leaveGroup(chat.id)
	      vinz.deleteChat(chat.id)
	  }) 
	} else {
        await vinz.simulateTyping(chat.id, true).then(async () => {
          await vinz.sendText(chat.id, `Hai minna~, Im ZEKS BOT. To find out the commands on this bot type ${prefix}menu`)
        })
	    }
	}
    })

    // ketika seseorang masuk/keluar dari group
    vinz.onGlobalParicipantsChanged(async (event) => {
        const host = await vinz.getHostNumber() + '@c.us'
        // kondisi ketika seseorang diinvite/join group lewat link
        if (event.action === 'add' && event.who !== host) {
            await vinz.sendTextWithMentions(event.chat, `ALLO KAK @${event.who.replace('@c.us', '')} \n\nBeliin Seblak Buat Member Yak AWOKAWOK *[ZEKSBOT]*`)
        }
        // kondisi ketika seseorang dikick/keluar dari group
        if (event.action === 'remove' && event.who !== host) {
            await vinz.sendTextWithMentions(event.chat, `TELAH KELUAR @${event.who.replace('@c.us', '')}, Semoga Tenang Amin AWOKAWOK *[ZEKSBOT]*`)
        }
    })

    vinz.onIncomingCall(async (callData) => {
        // ketika seseorang menelpon nomor bot akan mengirim pesan
        await vinz.sendText(callData.peerJid, 'Maaf VC/TELP AUTO BLOK.')
        .then(async () => {
            // bot akan memblock nomor itu
            await vinz.contactBlock(callData.peerJid)
        })
    })

    // ketika seseorang mengirim pesan
    vinz.onMessage(async (message) => {
        vinz.getAmountOfLoadedMessages() // menghapus pesan cache jika sudah 3000 pesan.
            .then((msg) => {
                if (msg >= 3000) {
                    console.log('[vinz]', color(`Bused Pesan Gw ${msg}, Hapus Dlu Yekan`, 'yellow'))
                    vinz.cutMsgCache()
                }
            })
        HandleMsg(vinz, message)    
    
    })
	
    // Message log for analytic
    vinz.onAnyMessage((anal) => { 
        messageLog(anal.fromMe, anal.type)
    })
}

//create session
create(options(true, start))
    .then((vinz) => start(vinz))
    .catch((err) => new Error(err))
