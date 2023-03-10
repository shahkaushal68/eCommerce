import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
dotenv.config();

//import path from "path";
//const __dirname = path.resolve();
import authRouter from "./routes/authRoute.js";
import userRouter from "./routes/userRoute.js";
import productRouter from "./routes/productRoute.js";
import blogRouter from "./routes/blogRoute.js";
import productCategoryRouter from "./routes/prodCategoryRoute.js";
import blogCategoryRouter from "./routes/blogCategoryRoute.js";
import cartRouter from "./routes/cartRoute.js";

const app = express();
app.use(express.json({ extended: true })); // for postman //Used to parse JSON bodies
app.use(cors()); //Middleware for connect server and react (used for server connection with unknown url)
app.use(express.urlencoded({ extended: true })); //for send the data via form //Parse URL-encoded bodies
app.use(cookieParser());

//app.use("/my-upload", express.static(path.join(__dirname, "my-upload")));

const port = process.env.PORT || 4000;

mongoose.set("strictQuery", true);
mongoose
  .connect(process.env.DB_URI)
  .then(console.log("Connection Successfully"))
  .catch((error) => console.log(error));

app.use("/api/auth", authRouter);
app.use("/api/users", userRouter);
app.use("/api/products", productRouter);
app.use("/api/blogs", blogRouter);
app.use("/api/productCategories", productCategoryRouter);
app.use("/api/blogCategories", blogCategoryRouter);
app.use("/api/cart", cartRouter);

// Error Handler Middleware in express
//app.use(errorHandlar);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
