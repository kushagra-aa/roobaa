import { Request, Response, NextFunction } from "express";

const asyncHandler =
  <T extends (req: Request, res: Response, next: NextFunction) => void>(
    requestHandler: T
  ) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      await requestHandler(req, res, next);
    } catch (error) {
      res.status(error.statusCode || 500).json(error);
    }
  };

export default asyncHandler;
