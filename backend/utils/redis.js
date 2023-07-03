import Redis from "redis";

const redisClient = Redis.createClient();

await redisClient.connect();

function getOrSetCache(key, cb) {
  return new Promise((resolve, reject) => {
    redisClient.get(key, async (error, data) => {
      if (error) return reject(error);
      if (data != null) return resolve(JSON.parse(data));
      console.log("Cache Data Not Found");
      const freshData = await cb();
      redisClient.setex(key, 3600, JSON.stringify(freshData));
      resolve(freshData);
    });
  });
}

export { getOrSetCache, redisClient };
