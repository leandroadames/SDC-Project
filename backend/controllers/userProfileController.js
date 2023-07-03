import { sql } from "../server.js";
import jwt from "jsonwebtoken";

export const addUserProfile = async (req, res) => {
  try {
    // Get token from header
    const token = req.headers.authorization.split(" ")[1];

    // If token doesn't exist, return error
    if (!token) throw new Error("No Session Found");

    // Get user ID from token
    const userId = jwt.verify(token, process.env.JWT_SECRET).id;

    console.log(userId);

    // If user ID doesn't exist, return error
    if (!userId) throw new Error("No User Found");

    // Get data from body
    const { name, icon } = req.body;

    // Check to see if they already have 5 profiles
    const userProfiles =
      await sql`SELECT * FROM user_profiles WHERE user_id = ${userId};`;

    console.log(userProfiles);

    // Parse the profiles string into a JSON array
    let profilesArray;
    if (userProfiles[0].profiles === null) {
      profilesArray = [];
    } else {
      profilesArray = JSON.parse(userProfiles[0].profiles);
      if (!Array.isArray(profilesArray)) {
        profilesArray = [];
      }
    }

    if (profilesArray.length >= 5)
      throw new Error("You already have 5 profiles");

    // Append the new profile to the array
    profilesArray.push({ name, icon });

    // Convert the array back to JSON string
    const profilesString = JSON.stringify(profilesArray);

    // Update the profiles string in the database
    const addingUserProfile = await sql`
UPDATE user_profiles
SET profiles = ${profilesString}
WHERE user_id = ${userId}
RETURNING *;
`;

    console.log(addingUserProfile);

    res.status(201).json({ addingUserProfile });

    // If token exists, add user profile to database
  } catch (err) {
    console.error(err);
    res.status(500).json({ err: err.message });
  }
};

export const getUsersProfiles = async (req, res) => {
  try {
    const token = req.headers.authorization.split(" ")[1];

    // If token doesn't exist, return error
    if (!token) throw new Error("No Session Found");

    // Get user ID from token
    const userId = jwt.verify(token, process.env.JWT_SECRET).id;

    console.log(userId);

    // If user ID doesn't exist, return error
    if (!userId) throw new Error("No User Found");

    const userProfiles =
      await sql`SELECT profiles FROM user_profiles WHERE user_id = ${userId};`;

    console.log(userProfiles);

    res.json({ userProfiles });
  } catch (err) {
    res.status(500).json({ err: err.message });
  }
};
