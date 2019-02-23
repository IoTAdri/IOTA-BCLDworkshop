///////////////////////////////////////
// Fetch balance of an address
// BlockchainLab Drenthe IOTA-workshop
// Adri Wischmann 21/2/2019
///////////////////////////////////////

const iotaLibrary = require('@iota/core')

const iota = iotaLibrary.composeAPI({
  provider: 'https://nodes.devnet.thetangle.org:443'    //Fulnode Devnet
  //  provider: 'https://iota.simple-url.com:14267'         // Fullnode Main-net server-Adri
})

const address =
  'YGDSMMYVKOEKPEUKFNYZAWNDONESGMWDALDGCSHKUAIAARMGYBXGMSBREVHALNEACIXUMSCMJEJTJ9DPC'  //first address generated in 3.1 on devnet

iota
  .getBalances([address], 100)  //100 means confirmation 100%
  .then(({ balances }) => {
    console.log(balances)
  })
  .catch(err => {
    console.error(err)
  })
