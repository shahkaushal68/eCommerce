import User from "../models/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import nodemailer from "nodemailer";
import { generateAccessToken, generteRefreshToken } from "../config/token.js";

export const register = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (user) return res.status(500).json("Email already exit");
    const hashPassword = await bcrypt.hash(req.body.password, 10);

    //console.log({ ...req.body, password: hashPassword });
    const newUser = await new User({
      ...req.body,
      password: hashPassword,
    }).save();
    res.status(200).json(newUser);
  } catch (error) {
    res.status(500).json(error);
    //console.log(error);
  }
};

export const login = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) return res.status(500).json("Email is not register");
    const confirmPass = await bcrypt.compare(req.body.password, user.password);
    if (!confirmPass) return res.status(500).json("Password is not match");
    if (user && confirmPass) {
      const { _id, email, role } = user;
      let accessToken = generateAccessToken(user);
      let refreshToken = generteRefreshToken(user);
      const updateUser = await User.findByIdAndUpdate(
        _id,
        { refreshToken },
        { new: true }
      );
      res.cookie("refreshToken", refreshToken, {
        maxAge: 24 * 60 * 60 * 1000,
        httpOnly: true,
      });
      res.status(200).json({ _id, email, role, accessToken, refreshToken });
    }
  } catch (error) {
    res.status(500).json(error);
    console.log(error);
  }
};

export const handleRefreshToken = async (req, res) => {
  //take the refresh token from the user
  const token = req.cookies?.refreshToken;
  //console.log("refreshtoken", token);
  //if No token and invalid token (error)
  if (!token) return res.status(403).json("No Refresh token in cookies");
  const user = await User.findOne({ refreshToken: token });
  //console.log("user", user);
  if (!user) return res.status(500).json("No Refresh token in db or not match");
  jwt.verify(token, process.env.JWT_REFRESH_KEY, function (err, decoded) {
    //console.log(decoded); // bar
    if (err || user.email !== decoded.email) {
      res.status(500).json("Something is wrong into refresh Token");
    }
    if (decoded) {
      const accessToken = generateAccessToken(user);
      res.json(accessToken);
    }
  });
};

export const logout = async (req, res) => {
  try {
    const token = req.cookies?.refreshToken;
    if (!token) return res.status(403).json("No Refresh token in cookies");
    const user = await User.findOne({ refreshToken: token });
    if (!user) {
      res.clearCookie("refreshToken");
      return res.status(204).json("No User"); //forbidden
    }
    res.clearCookie("refreshToken");
    res.status(204).json("user Logout"); //forbidden
  } catch (error) {
    res.status(500).json(error);
    console.log("logouterror", error);
  }
};

export const sendPassLink = async (req, res) => {
  try {
    if (!req.body.email)
      return res.status(500).json("Please enter your Email id");
    const user = await User.findOne({ email: req.body.email });
    if (!user) return res.status(500).json("Please Enter register email");
    const token = generateAccessToken(user);
    //console.log(token);
    const link = `http://localhost:3000/user/reset/${user._id}/${token}`;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      host: "smtp.gmail.email",
      port: 465,
      auth: {
        user: process.env.NODE_EMAIL, // generated ethereal user
        pass: process.env.NODE_PASS, // generated ethereal password
      },
    });

    let info = await transporter.sendMail({
      from: process.env.NODE_EMAIL,
      to: req.body.email,
      subject: "Password Reset Request", // Subject line
      html: `This link is valid for 5 mintues ${link}`,
    });

    transporter.sendMail(info, (err, result) => {
      if (err) {
        //console.log("error", err);
        res.status(401).json(err);
      }
      res.status(200).json("email Send");
    });
  } catch (error) {
    res.status(500).json(error);
  }
};
