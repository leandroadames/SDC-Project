import { sql } from "../server.js";
import { createClient } from "redis";

const redisClient = createClient({url: process.env.REDIS_URL});

await redisClient.connect();

// function getOrSetCache(key, cb) {
//   return new Promise((resolve, reject) => {
//     redisClient.get(key, async (error, data) => {
//       if (error) return reject(error);
//       if (data != null) return resolve(JSON.parse(data));
//       console.log("Cache Data Not Found");
//       const freshData = await cb();
//       redisClient.set(key, JSON.stringify(freshData));
//       resolve(freshData);
//     });
//   });
// }

export const getMovies = async (req, res) => {
  try {
    if ((await redisClient.exists("movies")) === 1) {
      console.log("fetching movies from cache");

      const movies = await redisClient.get("movies");

      return res
        .status(200)
        .json({ status: "success", movies: JSON.parse(movies) });
    } else {
      const freshMovies = await sql`SELECT * FROM api_data;`;
      redisClient.set("movies", JSON.stringify(freshMovies));
      redisClient.expire("movies", 86_400);
    }
    return res.status(200).json({ status: "success", movies: freshMovies });
  } catch (err) {
    res.status(404).json({ status: "fail", message: err });
  }
};
