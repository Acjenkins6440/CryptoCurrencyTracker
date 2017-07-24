var cointypelist;
var stuff = [];
function ass(){
  $.getJSON("https://www.cryptocompare.com/api/data/coinlist/", function(data){

    coindata = data.Data
    var keys = Object.keys(coindata);
    keys = keys.slice(8);
    for (var x in keys){
      stuff.push(coindata[keys[x]].Name + ', ');
    }

    $("body").html(stuff);

  });

}
