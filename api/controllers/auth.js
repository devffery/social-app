import { db } from "../connect.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const register = async (req, res) => {
  try {
    console.log('Received register request:', req.body);

    // CHECK IF USER EXISTS
    const data = await db`SELECT * FROM users WHERE username = ${req.body.username}`;
    console.log('User lookup result:', data);

    if (data.length) return res.status(409).json("User already exists!");

    // CREATE A NEW USER
    // Hash the password
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(req.body.password, salt);

    await db`INSERT INTO users (username, email, password, name) VALUES (${req.body.username}, ${req.body.email}, ${hashedPassword}, ${req.body.name})`;
    console.log('User created successfully.');
    return res.status(200).json("User has been created.");
  } catch (err) {
    console.error("Register Error:", err);
    return res.status(500).json("Internal server error.");
  }
};

export const login = async (req, res) => {
  try {
    console.log('Received login request:', req.body);

    // CHECK IF USER EXISTS
    const data = await db`SELECT * FROM users WHERE username = ${req.body.username}`;
    console.log('User lookup result:', data);

    if (data.length === 0) return res.status(404).json("User not found!");

    const user = data[0];

    // CHECK PASSWORD
    const checkPassword = bcrypt.compareSync(req.body.password, user.password);
    if (!checkPassword) return res.status(400).json("Wrong password or username!");

    // CREATE JWT TOKEN
    const token = jwt.sign({ id: user.id }, "secretkey");
    console.log('JWT Token created:', token);

    const { password, ...others } = user;

    res.cookie("accessToken", token, {
      httpOnly: true,
    }).status(200).json(others);
  } catch (err) {
    console.error("Login Error:", err);
    return res.status(500).json("Internal server error.");
  }
};

export const logout = (req, res) => {
  try {
    res.clearCookie("accessToken", {
      secure: true,
      sameSite: 'none'
    }).status(200).json("User has been logged out.");
  } catch (err) {
    console.error("Logout Error:", err);
    return res.status(500).json("Internal server error.");
  }
};