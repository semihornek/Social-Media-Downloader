import ytdl from "ytdl-core";

import { YouTubeMediaFormats } from "../constants/youtubeConstants";
import { YouTubeMediaFormatsInterface } from "../interfaces/youtubeMediaFormats";

export const getYoutubeMediaFormats = async (url: string): Promise<YouTubeMediaFormatsInterface[]> => {
  const mediaFormats: YouTubeMediaFormatsInterface[] = [];
  const info = await ytdl.getInfo(url);

  info.formats.forEach((format) => {
    if (format.itag in YouTubeMediaFormats) {
      mediaFormats.push({ url, googleVideoUrl: format.url, itag: format.itag, ...YouTubeMediaFormats[format.itag] });
    }
  });

  return mediaFormats;
};
