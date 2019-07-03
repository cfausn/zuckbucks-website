window.onload = function(){
  var circulatingUrl = "https://api.etherscan.io/api?module=account&action=tokenbalance&contractaddress=0x7090a6e22c838469c9e67851d6489ba9c933a43f&address=0x5ff87907d6157f18732ce912153149a3f9362a0b&tag=latest&apikey=W1ICGCDZ4TQBKRM5QKBRSCR3WXG4NZIASK"
  $.ajax(circulatingUrl, {
      cache: false,
      dataType: "json"
  }).then(function (data){
    document.getElementById("circulating").innerHTML = 1500000 - parseInt(data.result);
  });
}
