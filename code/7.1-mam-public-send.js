///////////////////////////////////////
// MAM: Publish messages to Public Stream
// BlockchainLab Drenthe IOTA-workshop
// Adri Wischmann 21/2/2019
///////////////////////////////////////

const Mam = require('@iota/mam')
const { asciiToTrytes } = require('@iota/converter')

let mamState = Mam.init('https://nodes.devnet.thetangle.org:443')
mamState = Mam.changeMode(mamState, 'public')

const publish = async data => {
  // Convert the JSON to trytes and create a MAM message
  const trytes = asciiToTrytes(data)
  const message = Mam.create(mamState, trytes)

  // Update the MAM state to the state of this latest message
  // We need this so the next publish action knows it's state
  mamState = message.state

  // Attach the message
  await Mam.attach(message.payload, message.address, 3, 9) // 9 for devnet, 14 for mainnet
  console.log('Sent message to the Tangle!')
  console.log('MAM-RootAddress: ' + message.root)
}

publish('First Super public message from BCLD Workshop')
publish('Second Super public message from BCLD Workshop')
