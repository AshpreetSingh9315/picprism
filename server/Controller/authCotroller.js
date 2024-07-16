/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const User = require("../Models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const signup = async (req, res) => {
  const { username, password, email, accountType } = req.body;
console.log(username)

if (!username || !password || !email || !accountType) {
    return res.status(400).json({ success: false, message: "All fields are required" });
  }
  
  try {
    const user = await User.findOne({ username });
    if (user) {
      return res
        .status(400)
        .json({ success: false, message: "Username Already Exists" });
    }

    const securePassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      username,
      password: securePassword,
      email,
      accountType,
    });

      await newUser.save();
      return res.status(200).json({ success: true, message: "User Created" });
    
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

const login = async (req, res) => {};

module.exports = { login, signup };
