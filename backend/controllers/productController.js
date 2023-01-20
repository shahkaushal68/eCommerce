import Product from "../models/productModel.js";
import slugify from "slugify";
import mongoose from "mongoose";
import User from "../models/userModel.js";
import cloudinary from "../utils/cloudinary.js";
import formatBytes from "../utils/formatSize.js";

export const createProduct = async (req, res) => {
  try {
    //console.log(req.files);
    let fileData = [];
    for (let i = 0; i < req.files.length; i++) {
      const result = await cloudinary.uploader.upload(req.files[i].path, {
        folder: "products",
      });
      fileData.push({
        public_id: result.public_id,
        url: result.secure_url,
      });
    }
    //console.log("filedata", fileData);
    if (req.body.title) {
      req.body.slug = slugify(req.body.title);
    }
    const addProduct = await Product.create({ ...req.body, image: fileData });
    res.status(200).json(addProduct);
  } catch (error) {
    console.log("error", error);
  }
};

export const fetchAllProducts = async (req, res) => {
  try {
    let query;
    //console.log(req.query.keyword);
    //----------------Searching--------------------------
    if (req.query.keyword) {
      query.$or = [
        { title: { $regex: req.query.keyword, $options: "i" } },
        { description: { $regex: req.query.keyword, $options: "i" } },
      ];
    }
    //--------------Sorting----------------
    if (req.query.sort) {
      const sortBy = req.query.sort.split(",").join(" ");
      query = query.$sort(sortBy);
      console.log("sort", query);
    }

    //---------------pagination----------------
    const page = req.query.page;
    const limit = req.query.limit;
    const stratIndex = (page - 1) * limit;
    const endIndex = page * limit;
    //console.log(page, limit, stratIndex, endIndex);

    //query.slice(stratIndex, endIndex);

    const getAllProducts = await Product.find();
    res.status(200).json(getAllProducts);
  } catch (error) {
    res.status(500).json(error);
    console.log("createProductError", error);
  }
};

export const fetchSingleProduct = async (req, res) => {
  try {
    const getSingleProducts = await Product.findById(req.params.id);

    res.status(200).json(getSingleProducts);
  } catch (error) {
    res.status(500).json(error);
    //console.log("createProductError", error);
  }
};

export const updateProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (req.body.title) {
      req.body.slug = slugify(req.body.title);
    }
    //console.log("product", product);
    //console.log("req.files", req.files.length);
    if (req.files.length !== 0) {
      //console.log(req.files);
      let fileData = [];
      if (product) {
        product.image.forEach(async (item) => {
          await cloudinary.uploader.destroy(item.public_id);
        });
      }

      for (let index = 0; index < req.files.length; index++) {
        //console.log(req.files.path);
        const result = await cloudinary.uploader.upload(req.files[index].path, {
          folder: "products",
        });
        fileData.push({
          public_id: result.public_id,
          url: result.secure_url,
        });
      }
      //console.log("foleda", fileData);
      const updateProduct = await Product.findByIdAndUpdate(
        req.params.id,
        { ...req.body, image: fileData },
        { new: true }
      );
      res.status(200).json(updateProduct);
    } else {
      //console.log(product.image);
      const updateProduct = await Product.findByIdAndUpdate(
        req.params.id,
        { ...req.body, image: product.image },
        { new: true }
      );
      res.status(200).json(updateProduct);
    }
  } catch (error) {
    res.status(500).json(error);
    //console.log("updateProductError", error);
  }
};

export const deleteProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    //console.log(product.image);
    if (product) {
      product.image.forEach(async (item) => {
        //console.log("item", item.public_id);
        await cloudinary.uploader.destroy(item.public_id);
      });
    }
    await Product.findByIdAndDelete(req.params.id);
    res.status(200).json("Product deleted Successfully");
  } catch (error) {
    res.status(500).json(error);
    //console.log("deleteProductError", error);
  }
};

//Wishlist Prodcut

export const wishListProduct = async (req, res) => {
  const { productId } = req.body;
  var isValid = mongoose.Types.ObjectId.isValid(productId);
  if (!isValid) return res.status(500).json("Id isn't Valid");
  const userId = req.user.id;
  let updateWishList;
  try {
    const user = await User.findById(userId);

    const productAlreadyPresent = user?.wishList?.find(
      (item) => item?.toString() === productId?.toString()
    );

    if (productAlreadyPresent) {
      updateWishList = await User.findByIdAndUpdate(
        userId,
        {
          $pull: { wishList: productId },
        },
        { new: true }
      );
      res.json(updateWishList);
    } else {
      updateWishList = await User.findByIdAndUpdate(
        userId,
        {
          $push: { wishList: productId },
        },
        { new: true }
      );
      res.json(updateWishList);
    }
  } catch (error) {
    res.status(500).json(error);
    //console.log("error", error);
  }
};

// Rating Products

export const ratingProducts = async (req, res) => {
  const { productId, star, comment } = req.body;
  const userId = req.user.id;
  try {
    const product = await Product.findById(productId);

    const alreadyRated = product?.ratings.find(
      (item) => item.postedBy.toString() === userId.toString()
    );

    if (alreadyRated) {
      await Product.updateOne(
        { ratings: { $elemMatch: alreadyRated } },
        { $set: { "ratings.$.star": star, "ratings.$.comment": comment } },
        { new: true }
      );
    } else {
      await Product.findByIdAndUpdate(
        productId,
        {
          $push: {
            ratings: {
              star: star,
              comment: comment,
              postedBy: userId,
            },
          },
        },
        { new: true }
      );
    }

    let totalRatings = product.ratings.length;
    let allRatings = product.ratings.map((item) => item.star);
    let ratingSum = allRatings.reduce((a, b) => a + b, 0);
    let avarageRating = Math.round(ratingSum / totalRatings);
    const finalProduct = await Product.findByIdAndUpdate(
      productId,
      { avarageRatings: avarageRating },
      { new: true }
    );
    res.status(200).json(finalProduct);
  } catch (error) {
    res.status(500).json(error);
    console.log("error", error);
  }
};
