import { NextFunction, Request, Response } from "express";

import { downloadYoutubeVideoAndAudioInStream, downloadYoutubeVideoWithAudio, getYoutubeMediaFormats } from "../services";
import { YouTubeMediaFormats } from "../constants/youtubeConstants";
import { YouTubeMediaFormatsInterface } from "../interfaces/youtubeMediaFormats";

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
    const mediaFormats: YouTubeMediaFormatsInterface[] = await getYoutubeMediaFormats(url);

    res.status(200).json({ mediaFormats });
  } catch (error: any) {
    res.status(404).json({ message: error.message });
  }
};

export const downloadVideo = (req: Request, res: Response, _next: NextFunction) => {
  try {
    const { url, itag, container } = req.body;
    // download video and audio together
    if (YouTubeMediaFormats[itag].content === "videoandaudio") {
      downloadYoutubeVideoWithAudio(url, +itag, container);
    }
    // download video and audio seperately in a stream
    else {
      downloadYoutubeVideoAndAudioInStream(url, +itag, container);
    }

    res.status(200).json({ message: "Video is downloading!", url });
  } catch (error: any) {
    res.status(404).json({ message: error.message });
  }
};
