///////////////////////////////////////
// Send tokens
// BlockchainLab Drenthe IOTA-workshop
// Adri Wischmann 21/2/2019
///////////////////////////////////////

const iotaLibrary = require('@iota/core')

const iota = iotaLibrary.composeAPI({
  provider: 'https://nodes.devnet.thetangle.org:443'    //Fulnode Devnet
  //  provider: 'https://iota.simple-url.com:14267'         // Fullnode Main-net server-Adri
})

// if you are using devnet then you should use devnet.thetangle.org to check the transaction  
// if you are using mainnet then you should use thetangle.org to check the transaction  

// Replace this with the seed you sent tokens from!
const seed =
  'DITISDESUPERGEHEIMESEEDVANDEIOTAWORKSHOPVANBLOCKCHAINLABDRENTHE99999999999999999D'
const toAddress =
  'DITISHETTWEEDEDEMOADRESVANDEBLOCKCHAINMEETUPDRENTHE99999999999999999999999999999D'

// Create a wrapping function so we can use async/await
const main = async () => {
  // Construct a TX to our new address
  const transfers = [
    {
      value: 52,
      address: toAddress,
      tag: 'BCLD'
    }
  ]
  console.log('Sending 52i to ' + toAddress)

  try {
    // Construct bundle and convert to trytes
    const trytes = await iota.prepareTransfers(seed, transfers)
    // Send bundle to node.
    const response = await iota.sendTrytes(trytes, 3, 9) // 9 for devnet, 14 for mainnet

    console.log('Completed TXs')
    response.map(tx => console.log(tx))
  } catch (e) {
    console.log(e)
  }
}

main()
