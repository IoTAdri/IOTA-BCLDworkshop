///////////////////////////////////////
// Send HELLOWORLD
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

const address =
  'DITISHETDEMOADRESVANDEBLOCKCHAINMEETUPDRENTHE99999999999999999999999999999999999D'
const seed =
  'DITISDESUPERGEHEIMESEEDVANDEIOTAWORKSHOPVANBLOCKCHAINLABDRENTHE99999999999999999D'
    
const boodschap = Converter.asciiToTrytes('Dit is je eerste boodschap vanuit de IOTA-workshop bij de Blockchain-meetup Drenthe (of misschien heb je het wel vaker gedaan)')
  
const transfers = [
  {
    value: 0,
    address: address,
    message: boodschap  //message in trytes
  }
]

iota
  .prepareTransfers(seed, transfers)
  .then(trytes => iota.sendTrytes(trytes, (depth = 3), (mwm = 9))) //9 for devnet, 14 for mainnet
  .then(bundle => {
    console.log(bundle)
  })
  .catch(err => {
    console.error(err)
  })
