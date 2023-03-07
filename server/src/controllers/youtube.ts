import { NextFunction, Request, Response } from "express";

export const downloadVideo = (_req: Request, res: Response, _next: NextFunction) => {
  try {
    res.status(200).json({ message: "Successful" });
  } catch (error) {
    res.status(404).json({ message: "Failed" });
  }
};
