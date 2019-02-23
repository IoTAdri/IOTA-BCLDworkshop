///////////////////////////////////////
// MAM: Fetch messages to Public Stream
// BlockchainLab Drenthe IOTA-workshop
// Adri Wischmann 21/2/2019
///////////////////////////////////////

const Mam = require('@iota/mam')
const { trytesToAscii } = require('@iota/converter')

// Initialize MAM State - PUBLIC
Mam.init('https://nodes.devnet.thetangle.org:443')

// Fill in the MAM-RootAddress from 7.1
const root =
  'OXPOYTSZEOGUOITHYBWDYHXNCLRVQHGXMFMEIJLNHNDEWJYWQHGRPTQJ99MUWRDAOVPBIGSW9MSQLMOOA'

// Display coordinate data on our screen when we receive it
const showData = raw => {
  const data = trytesToAscii(raw)
  console.log(data)
}

const readMam = async () => {
  await Mam.fetch(root, 'public', null, showData)
}

readMam()
