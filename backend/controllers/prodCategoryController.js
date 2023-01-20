import ProdCategory from "../models/prodCategoryModel.js";
import slugify from "slugify";

export const createProdCategory = async (req, res) => {
  try {
    if (req.body.title) {
      req.body.slug = slugify(req.body.title);
    }
    const addProduct = await new ProdCategory(req.body).save();
    res.status(200).json(addProduct);
  } catch (error) {
    res.status(500).json(error);
    console.log("createProductError", error);
  }
};

export const fetchAllProdCategory = async (req, res) => {
  try {
    const fetchProduct = await ProdCategory.find();
    res.status(200).json(fetchProduct);
  } catch (error) {
    res.status(500).json(error);
    console.log("createProductError", error);
  }
};

export const singleProdCategory = async (req, res) => {
  try {
    const getsingleProdCategory = await ProdCategory.findById(req.params.id);

    res.status(200).json(getsingleProdCategory);
  } catch (error) {
    res.status(500).json(error);
    //console.log("createProductError", error);
  }
};

export const updateProdCategory = async (req, res) => {
  try {
    if (req.body.title) {
      req.body.slug = slugify(req.body.title);
    }
    const updateProdCategory = await ProdCategory.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.status(200).json(updateProdCategory);
  } catch (error) {
    res.status(500).json(error);
    //console.log("updateProductError", error);
  }
};

export const deleteProdCategory = async (req, res) => {
  try {
    await ProdCategory.findByIdAndDelete(req.params.id);
    res.status(200).json("ProdCategory deleted Successfully");
  } catch (error) {
    res.status(500).json(error);
    //console.log("deleteProductError", error);
  }
};
