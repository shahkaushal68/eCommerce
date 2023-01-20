import jwt from "jsonwebtoken";

export const authCheck = (req, res, next) => {
  const bearerHeader = req.headers["authorization"];
  if (bearerHeader) {
    //console.log("bearerHeader", bearerHeader);
    const token = bearerHeader.split(" ")[1];
    //console.log("token", token);
    jwt.verify(token, process.env.JWT_PRIVATE_KEY, function (err, decoded) {
      if (err) return res.status(500).json("You have not valid token!");
      if (decoded) {
        req.user = decoded;
        next();
      }
    });
  } else {
    res.status(500).json("You are not Authnticated!");
  }
};

export const verifyTokenAndUser = (req, res, next) => {
  authCheck(req, res, () => {
    //console.log("req", req.user);
    if (req.user.id === req.params.id || req.user.role === "admin") {
      next();
    } else {
      res.status(500).json("You are not Valid User!");
    }
  });
};

export const verifyTokenAndAdmin = (req, res, next) => {
  authCheck(req, res, () => {
    if (req.user.role === "admin") {
      next();
    } else {
      res.status(500).json("Only Admin user can allow");
    }
  });
};

export const verifyRefreshToken = (req, res, next) => {
  const token = req.body.token;
  if (token === null) return res.status(500).json("InValid Req");
  jwt.verify(token, process.env.JWT_REFRESH_KEY, function (err, decoded) {
    if (err) return res.status(500).json("You have not valid token!");
    if (decoded) {
      req.user = decoded;
      next();
    }
  });
};
