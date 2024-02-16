import ApiResponse from "../helpers/apiResponse.js";
import asyncHandler from "../helpers/asyncHandler.js";

const getUsers = asyncHandler(async (req, res) => {
  let data = {};

  return res
    .status(200)
    .json(new ApiResponse(200, data, "Users found successfully"));
});
const addNewUser = asyncHandler(async (req, res) => {
  let data = {};

  return res
    .status(200)
    .json(new ApiResponse(200, data, "User added successfully"));
});
const changePassword = asyncHandler(async (req, res) => {
  let data = {};

  return res
    .status(200)
    .json(new ApiResponse(200, data, "Password changed successfully"));
});
const removeUser = asyncHandler(async (req, res) => {
  let data = {};

  return res
    .status(200)
    .json(new ApiResponse(200, data, "User Deleted successfully"));
});

export { getUsers, addNewUser, changePassword, removeUser };
