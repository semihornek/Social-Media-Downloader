import ytdl from "ytdl-core";
import fs from "fs";

import { NextFunction, Request, Response } from "express";

export const getMessage = (_req: Request, res: Response, _next: NextFunction) => {
  try {
    res.status(200).send("<p>Youtube Media Downloader</p>");
  } catch (error: any) {
    res.status(404).send(`Error: ${error.message}`);
  }
};

export const downloadVideo = (req: Request, res: Response, _next: NextFunction) => {
  try {
    const { url } = req.body;
    ytdl(url).pipe(fs.createWriteStream("video.mp4"));
    res.status(200).json({ message: "Video is downloading!", url });
  } catch (error: any) {
    res.status(404).json({ message: error.message });
  }
};
