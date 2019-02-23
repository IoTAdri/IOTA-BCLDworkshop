///////////////////////////////////////
// Send Data
// BlockchainLab Drenthe IOTA-workshop
// Adri Wischmann 21/2/2019
///////////////////////////////////////

const iotaLibrary = require('@iota/core')
const Converter = require('@iota/converter')

const iota = iotaLibrary.composeAPI({
  provider: 'https://nodes.devnet.thetangle.org:443'    //Fulnode Devnet
//  provider: 'https://iota.simple-url.com:14267'         // Fullnode Main-net server-Adri
})

// if you are using devnet then you should use devnet.thetangle.org to check the transaction  
// if you are using mainnet then you should use thetangle.org to check the transaction  

// Use any random seed you like as there is no tokens being sent.
const seed =
  'DITISDESUPERGEHEIMESEEDVANDEIOTAWORKSHOPVANBLOCKCHAINLABDRENTHE99999999999999999D'

// Create a variable for the address we will send too
const address =
  'DITISHETDEMOADRESVANDEBLOCKCHAINMEETUPDRENTHE99999999999999999999999999999999999D'

const message = Converter.asciiToTrytes('This IOTA-Workshop by BlockchainLab Drenhte is top!')

const transfers = [
  {
    value: 0,
    address: address, // Where the data is being sent
    message: message // The message converted into trytes
  }
]

iota
  .prepareTransfers(seed, transfers)
  .then(trytes => iota.sendTrytes(trytes, 3, 9)) //9 for devnet, 14 for mainnet
  .then(bundle => {
    console.log('Transfer successfully sent')
    bundle.map(tx => console.log(tx))
  })
  .catch(err => {
    console.log(err)
  })
