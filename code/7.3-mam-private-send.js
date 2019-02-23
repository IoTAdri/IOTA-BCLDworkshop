///////////////////////////////////////
// MAM: Publish messages to Private Stream
// BlockchainLab Drenthe IOTA-workshop
// Adri Wischmann 21/2/2019
///////////////////////////////////////

const Mam = require('@iota/mam')
const { asciiToTrytes } = require('@iota/converter')

let mamState = Mam.init('https://nodes.devnet.thetangle.org:443')

// We are using MAM restricted mode with a shared secret in this example
const mamType = 'restricted'
const mamSecret = 'VERYSECRETKEYFROMBCLD'

mamState = Mam.changeMode(mamState, mamType, mamSecret)

const publish = async data => {
  // Convert the message to trytes and create a MAM message
  const trytes = asciiToTrytes(data)
  const message = Mam.create(mamState, trytes)

  // Update the MAM state to the state of this latest message
  mamState = message.state

  // Attach the message
  await Mam.attach(message.payload, message.address, 3, 9)
  console.log('Sent message to the Tangle!')
  console.log('MAM Root-Address: ' + message.root)
}

publish('First restricted message from BCLD Workshop')
publish('Second restricted message from BCLD Workshop')
publish('Thrid restricted message from BCLD Workshop')
