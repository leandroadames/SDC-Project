import { sql } from "../server.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import sendEmail from "../nodemailer/nodeMailer.js";

// Get environment variables
dotenv.config({ path: "../.env" });

export const createUser = async (req, res) => {
  try {
    // destrcture name, email, password from req.body
    const { email, password } = req.body;
    console.log(email, password);

    // query database to check if user exists
    const userExists = await sql`SELECT * FROM users WHERE email = ${email}`;

    console.log(userExists);
    // if user exists, return error
    if (userExists.length > 0) throw new Error("User already exists");

    // Insert user into database
    const [newUser] =
      await sql`INSERT INTO users ( email, password) VALUES ( ${email}, ${password}) RETURNING *;`;

    console.log(newUser);
    
    // Create users mylist
    await sql`INSERT INTO my_list (created, user_id) VALUES (${Date.now()},${
      newUser.id
    })`;

    // Create users profile
    await sql`INSERT INTO user_profiles (user_id) VALUES (${newUser.id})`;

    // give token to user on signup
    const token = jwt.sign({ id: newUser.id }, process.env.JWT_SECRET);

    // send email to user on signup
    await sendEmail(email);

    // return user and token
    res.status(201).json({
      status: "success",
      newUser,
      token,
    });
  } catch (err) {
    // Catches and returns error
    res.status(500).json({ err: err.message });
  }
};
