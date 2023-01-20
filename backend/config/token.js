import jwt from "jsonwebtoken";

export const generateAccessToken = (user) => {
  //console.log("token1", user);
  return jwt.sign(
    { id: user._id, role: user.role, email: user.email },
    process.env.JWT_PRIVATE_KEY,
    { expiresIn: "1d" }
  );
};

export const generteRefreshToken = (user) => {
  //console.log("token2", user);
  return jwt.sign(
    { id: user._id, role: user.role, email: user.email },
    process.env.JWT_REFRESH_KEY,
    { expiresIn: "1d" }
  );
};
