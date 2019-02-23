///////////////////////////////
// Create an address from a new seed
// BlockchainLab Drenthe IOTA-workshop
// Adri Wischmann 21/2/2019
///////////////////////////////////////
// First: run this code in a unix based terminal to generate an 81 Tryte seed.
// 'cat /dev/urandom |LC_ALL=C tr -dc 'A-Z9' | fold -w 81 | head -n 1'
// Paste the output of the above code into the 'seed' section below.
///////////////////////////////////////

const iotaLibrary = require('@iota/core')

const iota = iotaLibrary.composeAPI({
  provider: 'https://nodes.devnet.thetangle.org:443'
})

const seed =
  'DITISDESUPERGEHEIMESEEDVANDEIOTAWORKSHOPVANBLOCKCHAINLABDRENTHE99999999999999999D'

iota
  .getNewAddress(seed, { index: 0, total: 1 }) //generate the very first address -and only the first-
  .then(address => {
    console.log('Your address is: ' + address)
    console.log('Paste this address into https://faucet.devnet.iota.org -only works on the devnet!')
  })
  .catch(err => {
    console.log(err)
  })
