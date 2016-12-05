var Cache = require('./index');
var cache = new Cache();

// TODO TESTs
cache.multiSet([{"San Luis": JSON.stringify({cactus: 1})}, {Cordoba: JSON.stringify({cactus: 2})}, {Brasil: JSON.stringify({cactus: 3})}], "cities");

//cache.get('Brasil', (e, v) => {
//   if(!e) console.log(v);
//}, 'cities');

cache.getPools('*', console.log);

cache.del('cities', "San Luis", function(par, par2, par3) {
   console.log("PAR: ", par);
   console.log("PAR2: ", par2);
   console.log("PAR3: ", par3);
});

cache.get('San Luis', (e, v) => {
   if(!e) console.log(v);
}, 'cities');

cache.get('Brasil', (e, v) => {
   if(!e) console.log(v);
}, 'cities');