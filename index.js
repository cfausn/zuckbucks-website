var abi = require('../')
var contractAddress = '0xfac9F8f5F995C768a1d2d8a63a255a066307bA10' // Pluton mainnet address


var ownerAddress = '0x18C59adBF99BE137B3EEAFFd84b083FD623A4c36'
var toAddress = '0xfdbfbdbe2ea6131f886c0cde629a64d7eff4d380'
var transaction
var is_rit_field
var token
var addr

window.addEventListener('load', function() {

  var request = new XMLHttpRequest()

  request.open('GET','https://api.etherscan.io/api?module=stats&action=tokensupply&contractaddress=0x045129cba354a107eceb686300dabe2bdee6e453&apikey=W1ICGCDZ4TQBKRM5QKBRSCR3WXG4NZIASK', true)

  request.onload = function () {
    // json parsing
    var data = JSON.parse(this.response)
    console.log(data.result)
  }

})

window.onload = function(){

  token.totalSupply.call(function(err, supply){

    document.getElementById("total").innerHTML = numberWithCommas(supply)
  })

  token.circulatingSupply.call(function(err, supply){
    document.getElementById("circulating").innerHTML = numberWithCommas(supply)
  })

  token.next_giveaway.call(function(err, supply){
    document.getElementById("giveaway").innerHTML = numberWithCommas(supply)
  })

  is_rit_field = document.getElementById("is_RIT");
  document.getElementById("click").onclick = startApp;

}

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}


function startApp(){
  addr = web3.eth.accounts[0]

  // Now to write a tx to the blockchain:
  token.getFromFaucet(function (err, hash) {
    if (err){
      is_rit_field.innerHTML = "Problem sending tokens."
      return console.error('Problem sending tokens', err)
    }
    console.log('tokens transferred in tx with hash', hash)
    is_rit_field.innerHTML = '<a color="#fff" href="https://etherscan.io/tx/' + hash + '">Doubloons sent, click here to see transaction!</a>'

    // Now we poll for tx inclusion:
    var interval = setInterval(function() {
      web3.eth.getTransactionReceipt(hash, function (err, receipt) {
        if (err) return console.error('error getting receipt', err)

        console.log('tx receipt is:')
        console.dir(receipt)

        //getBalance(addr)
        //getBalance(toAddress)
        clearInterval(interval)
      })
    }, 1000)

  })
}

function getBalance(addr) {
  console.log('getting balance for ' + addr)
  token.balanceOf.call(addr, function (err, bal) {
    if (err) { console.error(err) }
    console.log('token balance for account ' + addr + ' is ' + bal.toString(10))
  })
}
