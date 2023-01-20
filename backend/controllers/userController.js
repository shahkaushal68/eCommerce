import User from "../models/userModel.js";

//Fetch All Users
export const getAllUsers = async (req, res) => {
  try {
    const allUsers = await User.find();
    res.status(200).json(allUsers);
  } catch (error) {
    res.status(500).json(error);
    console.log(error);
  }
};

//Fetch Single User
export const getSingleUser = async (req, res) => {
  try {
    const singleUser = await User.findById(req.params.id);
    res.status(200).json(singleUser);
  } catch (error) {
    res.status(500).json(error);
    console.log(error);
  }
};

// Update User
export const updateUser = async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      {
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        mobile: req.body.mobile,
        role: req.body.role,
      },
      { new: true }
    );
    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(500).json(error);
    console.log(error);
  }
};

//Delete User
export const deleteUser = async (req, res) => {
  try {
    await User.findOneAndDelete(req.params.id);
    res.status(200).json("User deleted Successfully");
  } catch (error) {
    res.status(500).json(error);
    //console.log(error);
  }
};

//Get wishlists

export const fetchWishlists = async (req, res) => {
  try {
    const userId = req.user.id;
    const WishLists = await User.findById(userId).populate("wishList");
    res.status(200).json(WishLists);
  } catch (error) {
    res.status(500).json(error);
    console.log(error);
  }
};
