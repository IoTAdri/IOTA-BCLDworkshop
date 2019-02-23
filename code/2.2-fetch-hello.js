///////////////////////////////////////
// Fetch your HELLOWORLD Message
// BlockchainLab Drenthe IOTA-workshop
// Adri Wischmann 21/2/2019
///////////////////////////////////////

const iotaLibrary = require('@iota/core')

const iota = iotaLibrary.composeAPI({
  provider: 'https://nodes.devnet.thetangle.org:443'    //Fulnode Devnet
//  provider: 'https://iota.simple-url.com:14267'         // Fullnode Main-net server-Adri
})

const address =
  'DITISHETDEMOADRESVANDEBLOCKCHAINMEETUPDRENTHE99999999999999999999999999999999999D'

iota
  .findTransactionObjects({ addresses: [address] })
  .then(response => {
    console.log(response)
  })
  .catch(err => {
    console.error(err)
  })
