import { Request, NextFunction } from "express";
import ApiError from "../helpers/apiError.js";

const userAuthMiddleware = (req: Request, _, next: NextFunction) => {
  try {
    console.log("userAuthMiddleware :>> ");
    next();
  } catch (error) {
    throw new ApiError(401, error?.message || "Invalid access token");
  }
};

export default userAuthMiddleware;
