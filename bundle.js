(function(){function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s}return e})()({1:[function(require,module,exports){
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

    request.open('GET','https://api.etherscan.io/api?module=stats&action=tokensupply&contractaddress=0x7090a6e22c838469c9e67851d6489ba9c933a43f&apikey=W1ICGCDZ4TQBKRM5QKBRSCR3WXG4NZIASK', true)

    request.onload = function () {
      // json parsing
      var data = JSON.parse(this.response)
      console.log(data)
    }
})

window.onload = function(){


  var totalUrl = "https://api.etherscan.io/api?module=proxy&action=eth_call&to=0x7090a6e22c838469c9e67851d6489ba9c933a43f&data=0x18160ddd&tag=latest&apikey=W1ICGCDZ4TQBKRM5QKBRSCR3WXG4NZIASK";
  $.ajax(totalUrl, {
      cache: false,
      dataType: "json"
  }).then(function (data){
    document.getElementById("total").innerHTML = numberWithCommas(parseInt(data.result, 16))
  });

  var circulatingUrl = "https://api.etherscan.io/api?module=account&action=tokenbalance&contractaddress=0x7090a6e22c838469c9e67851d6489ba9c933a43f&address=0x5ff87907d6157f18732ce912153149a3f9362a0b&tag=latest&apikey=W1ICGCDZ4TQBKRM5QKBRSCR3WXG4NZIASK"
  $.ajax(circulatingUrl, {
      cache: false,
      dataType: "json"
  }).then(function (data){
    document.getElementById("circulating").innerHTML = numberWithCommas(1500000 - parseInt(data.result));
  });

  var giveawayUrl = "https://api.etherscan.io/api?module=proxy&action=eth_call&to=0x7090a6e22c838469c9e67851d6489ba9c933a43f&data=0xf1610120&tag=latest&apikey=W1ICGCDZ4TQBKRM5QKBRSCR3WXG4NZIASK";
  $.ajax(giveawayUrl, {
      cache: false,
      dataType: "json"
  }).then(function (data){
    document.getElementById("giveaway").innerHTML = numberWithCommas(parseInt(data.result, 16))
  });


  document.getElementById("click").onclick = startApp;

}

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}



function getBalance(addr) {
  console.log('getting balance for ' + addr)
  token.balanceOf.call(addr, function (err, bal) {
    if (err) { console.error(err) }
    console.log('token balance for account ' + addr + ' is ' + bal.toString(10))
  })
}

},{"../":2}],2:[function(require,module,exports){
module.exports = [
  {
    "constant": true,
    "inputs": [],
    "name": "name",
    "outputs": [
      {
        "name": "",
        "type": "string"
      }
    ],
    "payable": false,
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "_spender",
        "type": "address"
      },
      {
        "name": "_value",
        "type": "uint256"
      }
    ],
    "name": "approve",
    "outputs": [
      {
        "name": "success",
        "type": "bool"
      }
    ],
    "payable": false,
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "totalSupply",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [],
    "name": "circulatingSupply",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "_from",
        "type": "address"
      },
      {
        "name": "_to",
        "type": "address"
      },
      {
        "name": "_value",
        "type": "uint256"
      }
    ],
    "name": "transferFrom",
    "outputs": [
      {
        "name": "success",
        "type": "bool"
      }
    ],
    "payable": false,
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "decimals",
    "outputs": [
      {
        "name": "",
        "type": "uint8"
      }
    ],
    "payable": false,
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "version",
    "outputs": [
      {
        "name": "",
        "type": "string"
      }
    ],
    "payable": false,
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "_owner",
        "type": "address"
      }
    ],
    "name": "balanceOf",
    "outputs": [
      {
        "name": "balance",
        "type": "uint256"
      }
    ],
    "payable": false,
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "symbol",
    "outputs": [
      {
        "name": "",
        "type": "string"
      }
    ],
    "payable": false,
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "_to",
        "type": "address"
      },
      {
        "name": "_value",
        "type": "uint256"
      }
    ],
    "name": "transfer",
    "outputs": [
      {
        "name": "success",
        "type": "bool"
      }
    ],
    "payable": false,
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "_spender",
        "type": "address"
      },
      {
        "name": "_value",
        "type": "uint256"
      },
      {
        "name": "_extraData",
        "type": "bytes"
      }
    ],
    "name": "approveAndCall",
    "outputs": [
      {
        "name": "success",
        "type": "bool"
      }
    ],
    "payable": false,
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "_owner",
        "type": "address"
      },
      {
        "name": "_spender",
        "type": "address"
      }
    ],
    "name": "allowance",
    "outputs": [
      {
        "name": "remaining",
        "type": "uint256"
      }
    ],
    "payable": false,
    "type": "function"
  },
  {
    "inputs": [
      {
        "name": "_initialAmount",
        "type": "uint256"
      },
      {
        "name": "_tokenName",
        "type": "string"
      },
      {
        "name": "_decimalUnits",
        "type": "uint8"
      },
      {
        "name": "_tokenSymbol",
        "type": "string"
      }
    ],
    "type": "constructor"
  },
  {
    "payable": false,
    "type": "fallback"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "name": "_from",
        "type": "address"
      },
      {
        "indexed": true,
        "name": "_to",
        "type": "address"
      },
      {
        "indexed": false,
        "name": "_value",
        "type": "uint256"
      }
    ],
    "name": "Transfer",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "name": "_owner",
        "type": "address"
      },
      {
        "indexed": true,
        "name": "_spender",
        "type": "address"
      },
      {
        "indexed": false,
        "name": "_value",
        "type": "uint256"
      }
    ],
    "name": "Approval",
    "type": "event"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "id_val",
        "type": "string"
      }
    ],
    "name": "getFromFaucet",
    "outputs": [
      {
        "name": "success",
        "type": "bool"
      }
    ],
    "payable": false,
    "type": "function"
  },{
    "constant": false,
    "inputs": [],
    "name": "starting_giveaway",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "type": "function"
  },{
    "constant": false,
    "inputs": [],
    "name": "next_giveaway",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "type": "function"
  }
]

},{}]},{},[1]);
