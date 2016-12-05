var redis = require("redis");
module.exports = function(options) {
   options = options || {host: "127.0.0.1", port: 6379};
   var defaultPool = "commons";
   var client = redis.createClient(options);

   function close() {
      client.quit();
   }

   function hset(key, value, pool, callback) {
      pool = pool || defaultPool;
      client.hset(pool, key, value, callback);
   }

   function hmset(arr, pool, callback) {
      pool = pool || defaultPool;
      var obj = {};
      arr.forEach(function(a) {
         for(var k in a) {
            obj[k] = a[k];
         }
      });
      client.hmset(pool, obj, callback);
   }

   function hget(key, callback, pool) {
      pool = pool || defaultPool;
      client.hget(pool, key, callback);
   }

   function hmget(arr, callback, pool) {
      pool = pool || defaultPool;
      client.hmget(pool, arr, callback);
   }

   function hgetAll(pool, callback) {
      client.hgetall(pool, callback);
   }

   function flushAll() {
      client.flushall();
   }

   function getPools(pattern, callback) {
      client.keys(pattern, callback);
   }

   function hdel(pool, keys, callback) {
      pool = pool || defaultPool;
      client.hdel(pool, keys, callback);
   }

   return {
      close: close,
      get: hget,
      multiGet: hmget,
      set: hset,
      multiSet: hmset,
      all: hgetAll,
      flushAll: flushAll,
      getPools: getPools,
      del: hdel
   };
};
