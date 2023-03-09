import { NextFunction, Request, Response } from "express";

export const getMessage = (_req: Request, res: Response, _next: NextFunction) => {
  try {
    res.status(200).send("<p>Instagram Media Downloader</p>");
  } catch (error: any) {
    res.status(404).send(`Error: ${error.message}`);
  }
};
