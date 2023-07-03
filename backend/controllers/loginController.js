import { sql } from "../server.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

// Get environment variables
dotenv.config();

export const loginUser = async (req, res) => {
  try {
    // get the email or phone number and password from the request body
    const { email, password } = req.body;
    console.log(email, password);

    // query the database for the user to get the password
    const [user] = await sql`SELECT * FROM users WHERE email = ${email}`;
    // if compare the password with the password in the database
    console.log(user.password, password);
    const isValid = bcrypt.compareSync(password, user.password);
    // if the password doesn't match return an error
    console.log(isValid);
    if (!isValid) throw new Error("Invalid password");
    // if the password matches, return the user and a token
    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET);

    res.status(200).json({ status: "success", user, token });
  } catch (err) {
    // Catches and returns error
    res.status(500).json({ err: err.message });
  }
};
