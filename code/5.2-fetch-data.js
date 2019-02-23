///////////////////////////////////////
// Fetch your HELLOWORLD Message
// BlockchainLab Drenthe IOTA-workshop
// Adri Wischmann 21/2/2019
///////////////////////////////////////

const iotaLibrary = require('@iota/core')
const Converter = require('@iota/converter')

const iota = iotaLibrary.composeAPI({
  provider: 'https://nodes.devnet.thetangle.org:443'    //Fulnode Devnet
//  provider: 'https://iota.simple-url.com:14267'         // Fullnode Main-net server-Adri
})

const address =
  'DITISHETDEMOADRESVANDEBLOCKCHAINMEETUPDRENTHE99999999999999999999999999999999999D'

iota
  .findTransactionObjects({ addresses: [address] })
  .then(response => {
    console.log('Encoded message:')
    console.log(response[0].signatureMessageFragment)

    // Modify trytes into a consumable length
    const trytes = response[0].signatureMessageFragment.slice(0, -1)

    //Convert trytes to plan text
    const data = Converter.trytesToAscii(trytes)
    console.log('Decoded message:')
    console.log(data)
  })
  .catch(err => {
    console.error(err)
  })
