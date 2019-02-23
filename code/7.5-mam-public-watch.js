///////////////////////////////////////
// MAM: watch Public stream
// BlockchainLab Drenthe IOTA-workshop
// Adri Wischmann 21/2/2019
///////////////////////////////////////

const Mam = require('@iota/mam')
const { asciiToTrytes, trytesToAscii } = require('@iota/converter')

// Fill in the MAM-RootAddress from 7.1
let root = ''
let nextRoot = root

async function initMam() {
  console.log('\r\n\r\n')
  console.log('Listening to MAM stream...')
  console.log('\r\n')
  await Mam.init('https://nodes.devnet.iota.org:443')
}

// Check the MAM stream every 5 seconds for new data on the current root
// If a new root is returned we'll monitor that one from there on.
async function checkMam() {
  if (root !== nextRoot) {
    root = nextRoot
  }

  // The showData callback will be called in order for each message found
  const data = await Mam.fetch(root, 'public', null, showData)
  nextRoot = data.nextRoot

  // Check again in 5 seconds
  setTimeout(checkMam, 5000)
}

// Start the monitoring!
initMam()
checkMam()
