export const YouTubeMediaFormats: {
  [key: number]: {
    content: string;
    resolution: string;
    container: string;
    codec?: string; // optional now
  };
} = {
  /**
   * Legacy (non-DASH) videos
   */

  // H.264/AVC
  18: {
    content: "videoandaudio",
    resolution: "360p",
    container: "mp4",
    codec: "H.264",
  },
  59: {
    content: "videoandaudio",
    resolution: "480p",
    container: "mp4",
    codec: "H.264",
  },
  22: {
    content: "videoandaudio",
    resolution: "720p",
    container: "mp4",
    codec: "H.264",
  },
  37: {
    content: "videoandaudio",
    resolution: "1080p",
    container: "mp4",
    codec: "H.264",
  },

  /**
   * DASH videos
   */

  // H.264/AVC
  160: {
    content: "video",
    resolution: "144p",
    container: "mp4",
    codec: "H.264",
  },
  133: {
    content: "video",
    resolution: "240p",
    container: "mp4",
    codec: "H.264",
  },
  134: {
    content: "video",
    resolution: "360p",
    container: "mp4",
    codec: "H.264",
  },
  135: {
    content: "video",
    resolution: "480p",
    container: "mp4",
    codec: "H.264",
  },
  136: {
    content: "video",
    resolution: "720p",
    container: "mp4",
    codec: "H.264",
  },
  137: {
    content: "video",
    resolution: "1080p",
    container: "mp4",
    codec: "H.264",
  },
  264: {
    content: "video",
    resolution: "1440p",
    container: "mp4",
    codec: "H.264",
  },

  // H.264 HFR/AVC
  298: {
    content: "video",
    resolution: "720p",
    container: "mp4",
    codec: "H.264 HFR",
  },
  299: {
    content: "video",
    resolution: "1080p",
    container: "mp4",
    codec: "H.264 HFR",
  },
  304: {
    content: "video",
    resolution: "1440p",
    container: "mp4",
    codec: "H.264 HFR",
  },
  305: {
    content: "video",
    resolution: "2160p",
    container: "mp4",
    codec: "H.264 HFR",
  },

  // TODO: Add codec for other videos
  266: {
    content: "video",
    resolution: "2160p",
    container: "mp4",
    codec: "H.264",
  },
  242: {
    content: "video",
    resolution: "240p",
    container: "webm",
  },
  243: {
    content: "video",
    resolution: "360p",
    container: "webm",
  },
  244: {
    content: "video",
    resolution: "480p",
    container: "webm",
  },
  278: {
    content: "video",
    resolution: "144p",
    container: "webm",
  },
  394: {
    content: "video",
    resolution: "144p",
    container: "mp4",
  },
  395: {
    content: "video",
    resolution: "240p",
    container: "mp4",
  },
  396: {
    content: "video",
    resolution: "360p",
    container: "mp4",
  },
  397: {
    content: "video",
    resolution: "480p",
    container: "mp4",
  },
  398: {
    content: "video",
    resolution: "720p",
    container: "mp4",
  },
  399: {
    content: "video",
    resolution: "1080p",
    container: "mp4",
  },
};
