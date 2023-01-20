import Cart from "../models/cartModel.js";
import Product from "../models/productModel.js";
import User from "../models/userModel.js";

export const addToCart = async (req, res) => {
  const userId = req.user.id;
  const { cart } = req.body;
  const user = await User.findById(userId);
  //console.log(user);
  try {
    //User Already exist in cart
    const isUserExist = await Cart.findOne({ orderBy: user._id });
    if (isUserExist) {
      isUserExist.remove();
    }
    let products = [];
    for (let i = 0; i < cart.length; i++) {
      let cartObject = {};
      cartObject.product = cart[i].product;
      cartObject.color = cart[i].color;
      cartObject.quantity = cart[i].quantity;
      let getPrice = await Product.findById(cart[i].product)
        .select("price")
        .exec();
      cartObject.price = getPrice.price;
      products.push(cartObject);
    }

    let totalPrice = 0;
    for (let i = 0; i < products.length; i++) {
      totalPrice = totalPrice + products[i].price * products[i].quantity;
    }

    const newCart = {
      products,
      cartTotal: totalPrice,
      orderBy: userId,
    };
    console.log("products", newCart);
    const saveCart = await new Cart(newCart).save();
    res.status(200).json(saveCart);
  } catch (error) {
    res.status(500).json(error);
    console.log("createProductError", error);
  }
};
