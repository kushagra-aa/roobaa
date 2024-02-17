import { Request, NextFunction } from "express";
import ApiError from "../helpers/apiError.js";
import { User } from "../models/user.models.js";
import jwt from "jsonwebtoken";
import asyncHandler from "../helpers/asyncHandler.js";

const bypassAuthPaths = [/.*\/login\/.*$/, /.\/public\/.*$/]; // Example regexp

const userAuthMiddleware = asyncHandler(
  async (req: Request, _, next: NextFunction) => {
    try {
      console.log("AUTH MIddleware-1:>> ");
      const isBypassed = bypassAuthPaths.some((regex) =>
        regex.test(req.originalUrl)
      );
      if (isBypassed) next();
      else {
        console.log("AUTH MIddleware-2:>> ");
        const token =
          req.cookies?.accessToken ||
          req.header("Authorization")?.replace("Bearer ", "");
        console.log("AUTH MIddleware-3:>> ");

        // console.log(token);
        if (!token) {
          throw new ApiError(401, "Unauthorized request");
        }
        console.log("AUTH MIddleware-4:>> ");

        const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);

        console.log("AUTH MIddleware-5:>> ");
        const user = await User.findById(
          (decodedToken as jwt.JwtPayload)?._id
        ).select("-password -refreshToken");

        console.log("AUTH MIddleware-6:>> ");
        if (!user) {
          throw new ApiError(401, "Invalid Access Token");
        }
        console.log("AUTH MIddleware-7:>> ");

        req.body._authenticatedUser = user;
        console.log("AUTH MIddleware-8:>> ");
        next();
      }
    } catch (error) {
      throw new ApiError(401, error?.message || "Invalid access token");
    }
  }
);

export default userAuthMiddleware;
