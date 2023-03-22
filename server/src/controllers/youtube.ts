import ytdl from "ytdl-core";
import fs from "fs";
import { NextFunction, Request, Response } from "express";

import { YouTubeMediaFormatsInterface } from "../interfaces/youtubeMediaFormats";
import { YouTubeMediaFormats } from "../constants/youtubeConstants";

export const getMessage = (_req: Request, res: Response, _next: NextFunction) => {
  try {
    res.status(200).send("<p>Youtube Media Downloader</p>");
  } catch (error: any) {
    res.status(404).send(`Error: ${error.message}`);
  }
};

export const getMediaFormats = async (req: Request, res: Response, _next: NextFunction) => {
  try {
    const { url } = req.body;
    // get media formats
    const mediaFormats: YouTubeMediaFormatsInterface[] = [];
    const info = await ytdl.getInfo(url);

    info.formats.forEach((format) => {
      if (format.itag in YouTubeMediaFormats) {
        mediaFormats.push({ url, googleVideoUrl: format.url, itag: format.itag, ...YouTubeMediaFormats[format.itag] });
      }
    });

    res.status(200).json({ mediaFormats });
  } catch (error: any) {
    res.status(404).json({ message: error.message });
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
