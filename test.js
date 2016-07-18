var Cache = require('./index');
var cache = new Cache();

// TODO TESTs
cache.multiSet([{"San Luis": "Merlo", Cordoba: "Cordoba", Brasil: "Sao Paulo"}], "cities");

cache.all('cities', function(e, v) {
   if(!e) console.log(v);
});
