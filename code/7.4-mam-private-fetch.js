///////////////////////////////////////
// MAM: Publish messages to Private Stream
// BlockchainLab Drenthe IOTA-workshop
// Adri Wischmann 21/2/2019
///////////////////////////////////////

const Mam = require('@iota/mam')
const { trytesToAscii } = require('@iota/converter')

// Init State
// Fill in the MAM-RootAddress from 7.3
let root =
  'QQUTOYQDKWGEOSNDERIUTLNFJLKXKPGMZVDJJJNPMSXSIYHJDUUMZUEI9GGQSFQJD9GRVGCMNDDATPWDN'
const mamType = 'restricted'
const mamSecret = 'VERYSECRETKEYFROMBCLD'

// Initialise MAM State
let mamState = Mam.init('https://nodes.devnet.iota.org:443')

// Callback used to pass data out of the fetch
const logData = data => console.log(trytesToAscii(data))

const execute = async () => {
  // Callback used to pass data + returns next_root
  const resp = await Mam.fetch(root, mamType, mamSecret, logData)
}
execute()
