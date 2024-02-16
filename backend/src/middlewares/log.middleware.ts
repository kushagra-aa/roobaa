import { Request, NextFunction } from "express";
import ApiError from "../helpers/apiError.js";
import LogType from "../types/LogType.js";

const logMiddleware = (req: Request, _, next: NextFunction) => {
  try {
    const log: LogType = {
      accessToken: req.headers.authorization,
      timestamp: new Date().toISOString(),
      url: req.url,
      method: req.method,
    };
    console.log(
      `[${log.timestamp}] ${log.method}: ${log.url}, AccessToken:${log.accessToken}`
    );
    next();
  } catch (error) {
    throw new ApiError(401, error?.message || "Invalid access token");
  }
};

export default logMiddleware;
