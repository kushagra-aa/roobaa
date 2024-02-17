import ApiError from "../helpers/apiError.js";
import ApiResponse from "../helpers/apiResponse.js";
import asyncHandler from "../helpers/asyncHandler.js";
import { User } from "../models/user.models.js";

const generateAccessToken = async (id) => {
  try {
    const user = await User.findById(id);
    const accessToken = user.generateAccessToken();

    return { accessToken };
  } catch (error) {
    throw new ApiError(
      500,
      "Something went wrong while generating access token"
    );
  }
};
const getUserById = async (userId) =>
  User.findById(userId).select("-password -refreshToken");

const getUsers = asyncHandler(async (req, res) => {
  let data = await User.find().select("-password -refreshToken");

  return res
    .status(200)
    .json(new ApiResponse(200, data, "Users found successfully"));
});
const loginUser = asyncHandler(async (req, res) => {
  let { email, password } = req.body;
  console.log("Login Controller-1:>> ");

  if (!password || !email) {
    throw new ApiError(400, "password and email is required");
  }
  console.log("Login Controller-2:>> ");

  const user = await User.findOne({
    email,
  });

  console.log("Login Controller-3:>> ");
  if (!user) {
    throw new ApiError(404, "User does not exist");
  }
  console.log("Login Controller-4:>> ");

  const isPasswordValid = await user.isPasswordCorrect(password);
  console.log("Login Controller-5:>> ");

  if (!isPasswordValid) {
    throw new ApiError(401, "Invalid user credentials");
  }
  console.log("Login Controller-6:>> ");

  const { accessToken } = await generateAccessToken(user._id);
  console.log("Login Controller-7:>> ");

  const loggedInUser = await getUserById(user._id);
  console.log("Login Controller-8:>> ");

  const options = {
    httpOnly: true,
    secure: true,
  };
  console.log("Login Controller-9:>> ");

  return res
    .status(200)
    .cookie("accessToken", accessToken, options)
    .json(
      new ApiResponse(
        200,
        {
          user: loggedInUser,
          accessToken,
        },
        "User logged In Successfully"
      )
    );
});
const addNewUser = asyncHandler(async (req, res) => {
  let { email, password, age, name, country } = req.body;
  console.log("Add Controller-1:>> ");
  if (
    [email, password, name, country].some((field) => field?.trim() === "") ||
    !age
  ) {
    throw new ApiError(400, "All fields are required");
  }

  console.log("Add Controller-2:>> ");
  const existedUser = await User.findOne({
    email,
  });
  if (existedUser) {
    throw new ApiError(409, "User with email or username already exists");
  }

  console.log("Add Controller-3:>> ");
  const user = await User.create({
    email,
    password,
    age,
    name,
    country,
  });

  console.log("Add Controller-4:>> ");
  const createdUser = await getUserById(user._id);

  if (!createdUser) {
    throw new ApiError(500, "Something went wrong while registering the user");
  }

  console.log("Add Controller-5:>> ");
  return res
    .status(201)
    .json(new ApiResponse(200, createdUser, "User added Successfully"));
});
const changePassword = asyncHandler(async (req, res) => {
  const id = req.params.id;
  let { newPassword, oldPassword } = req.body;
  console.log("ChangePassword Controller-1:>> ");
  if (!newPassword || !oldPassword) {
    throw new ApiError(400, "newPassword and oldPassword is required");
  }
  console.log("Login Controller-2:>> ");

  const user = await User.findById(id);

  console.log("Login Controller-3:>> ");
  if (!user) {
    throw new ApiError(404, "User does not exist");
  }
  console.log("Login Controller-4:>> ");

  const isPasswordValid = await user.isPasswordCorrect(oldPassword);
  console.log("Login Controller-5:>> ");

  if (!isPasswordValid) {
    throw new ApiError(401, "Invalid user credentials");
  }
  console.log("Login Controller-6:>> ");
  user.password = newPassword;
  await user.save();

  console.log("Login Controller-6:>> ");
  const updatedUser = await getUserById(user._id);
  console.log("Login Controller-7:>> ");
  return res
    .status(200)
    .json(new ApiResponse(200, updatedUser, "Password changed successfully"));
});
const removeUser = asyncHandler(async (req, res) => {
  const id = req.params.id;
  console.log("Delete Controller-1:>> ");
  const user = await User.findById(id);

  console.log("Delete Controller-2:>> ");
  if (!user) {
    throw new ApiError(404, "User does not exist");
  }
  console.log("Delete Controller-3:>> ");
  const deletedUser = await User.findByIdAndDelete(id);
  console.log("Delete Controller-4:>> ");
  return res
    .status(200)
    .json(new ApiResponse(200, deletedUser, "User Deleted successfully"));
});

export { getUsers, loginUser, addNewUser, changePassword, removeUser };
