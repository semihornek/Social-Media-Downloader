export const YouTubeMediaFormats: {
  [key: number]: {
    content: string;
    resolution: string;
    container: string;
    codec: string;
    fps: number;
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
    fps: 30,
  },
  59: {
    content: "videoandaudio",
    resolution: "480p",
    container: "mp4",
    codec: "H.264",
    fps: 30,
  },
  22: {
    content: "videoandaudio",
    resolution: "720p",
    container: "mp4",
    codec: "H.264",
    fps: 30,
  },
  37: {
    content: "videoandaudio",
    resolution: "1080p",
    container: "mp4",
    codec: "H.264",
    fps: 30,
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
    fps: 30,
  },
  133: {
    content: "video",
    resolution: "240p",
    container: "mp4",
    codec: "H.264",
    fps: 30,
  },
  134: {
    content: "video",
    resolution: "360p",
    container: "mp4",
    codec: "H.264",
    fps: 30,
  },
  135: {
    content: "video",
    resolution: "480p",
    container: "mp4",
    codec: "H.264",
    fps: 30,
  },
  136: {
    content: "video",
    resolution: "720p",
    container: "mp4",
    codec: "H.264",
    fps: 30,
  },
  137: {
    content: "video",
    resolution: "1080p",
    container: "mp4",
    codec: "H.264",
    fps: 30,
  },
  264: {
    content: "video",
    resolution: "1440p",
    container: "mp4",
    codec: "H.264",
    fps: 30,
  },
  266: {
    content: "video",
    resolution: "2160p",
    container: "mp4",
    codec: "H.264",
    fps: 30,
  },

  // H.264 HFR/AVC
  298: {
    content: "video",
    resolution: "720p",
    container: "mp4",
    codec: "H.264 HFR",
    fps: 60,
  },
  299: {
    content: "video",
    resolution: "1080p",
    container: "mp4",
    codec: "H.264 HFR",
    fps: 60,
  },
  304: {
    content: "video",
    resolution: "1440p",
    container: "mp4",
    codec: "H.264 HFR",
    fps: 60,
  },
  305: {
    content: "video",
    resolution: "2160p",
    container: "mp4",
    codec: "H.264 HFR",
    fps: 60,
  },

  // VP9
  278: {
    content: "video",
    resolution: "144p",
    container: "webm",
    codec: "VP9",
    fps: 30,
  },
  242: {
    content: "video",
    resolution: "240p",
    container: "webm",
    codec: "VP9",
    fps: 30,
  },
  243: {
    content: "video",
    resolution: "360p",
    container: "webm",
    codec: "VP9",
    fps: 30,
  },
  244: {
    content: "video",
    resolution: "480p",
    container: "webm",
    codec: "VP9",
    fps: 30,
  },
  247: {
    content: "video",
    resolution: "720p",
    container: "webm",
    codec: "VP9",
    fps: 30,
  },
  248: {
    content: "video",
    resolution: "1080p",
    container: "webm",
    codec: "VP9",
    fps: 30,
  },
  271: {
    content: "video",
    resolution: "1440p",
    container: "webm",
    codec: "VP9",
    fps: 30,
  },
  313: {
    content: "video",
    resolution: "2160p",
    container: "webm",
    codec: "VP9",
    fps: 30,
  },

  // VP9 HFR
  302: {
    content: "video",
    resolution: "720p",
    container: "webm",
    codec: "VP9 HFR",
    fps: 60,
  },
  303: {
    content: "video",
    resolution: "1080p",
    container: "webm",
    codec: "VP9 HFR",
    fps: 60,
  },
  308: {
    content: "video",
    resolution: "1440p",
    container: "webm",
    codec: "VP9 HFR",
    fps: 60,
  },
  315: {
    content: "video",
    resolution: "2160p",
    container: "webm",
    codec: "VP9 HFR",
    fps: 60,
  },
  272: {
    content: "video",
    resolution: "4320p",
    container: "webm",
    codec: "VP9 HFR",
    fps: 60,
  },

  // VP9.2 HDR HFR
  330: {
    content: "video",
    resolution: "144p",
    container: "webm",
    codec: "VP9.2 HDR HFR",
    fps: 60,
  },
  331: {
    content: "video",
    resolution: "240p",
    container: "webm",
    codec: "VP9.2 HDR HFR",
    fps: 60,
  },
  332: {
    content: "video",
    resolution: "360p",
    container: "webm",
    codec: "VP9.2 HDR HFR",
    fps: 60,
  },
  333: {
    content: "video",
    resolution: "480p",
    container: "webm",
    codec: "VP9.2 HDR HFR",
    fps: 60,
  },
  334: {
    content: "video",
    resolution: "720p",
    container: "webm",
    codec: "VP9.2 HDR HFR",
    fps: 60,
  },
  335: {
    content: "video",
    resolution: "1080p",
    container: "webm",
    codec: "VP9.2 HDR HFR",
    fps: 60,
  },
  336: {
    content: "video",
    resolution: "1440p",
    container: "webm",
    codec: "VP9.2 HDR HFR",
    fps: 60,
  },
  337: {
    content: "video",
    resolution: "2160p",
    container: "webm",
    codec: "VP9.2 HDR HFR",
    fps: 60,
  },

  // AV1
  394: {
    content: "video",
    resolution: "144p",
    container: "mp4",
    codec: "AV1",
    fps: 30,
  },
  395: {
    content: "video",
    resolution: "240p",
    container: "mp4",
    codec: "AV1",
    fps: 30,
  },
  396: {
    content: "video",
    resolution: "360p",
    container: "mp4",
    codec: "AV1",
    fps: 30,
  },
  397: {
    content: "video",
    resolution: "480p",
    container: "mp4",
    codec: "AV1",
    fps: 30,
  },

  // AV1 HFR
  398: {
    content: "video",
    resolution: "720p",
    container: "mp4",
    codec: "AV1 HFR",
    fps: 60,
  },
  399: {
    content: "video",
    resolution: "1080p",
    container: "mp4",
    codec: "AV1 HFR",
    fps: 60,
  },
  400: {
    content: "video",
    resolution: "1440p",
    container: "mp4",
    codec: "AV1 HFR",
    fps: 60,
  },
  401: {
    content: "video",
    resolution: "2160p",
    container: "mp4",
    codec: "AV1 HFR",
    fps: 60,
  },
  402: {
    content: "video",
    resolution: "4320p",
    container: "mp4",
    codec: "AV1 HFR",
    fps: 60,
  },
  571: {
    content: "video",
    resolution: "4320p",
    container: "mp4",
    codec: "AV1 HFR",
    fps: 60,
  },

  // AV1 HFR High
  694: {
    content: "video",
    resolution: "144p",
    container: "mp4",
    codec: "AV1 HFR High",
    fps: 60,
  },
  695: {
    content: "video",
    resolution: "240p",
    container: "mp4",
    codec: "AV1 HFR High",
    fps: 60,
  },
  696: {
    content: "video",
    resolution: "360p",
    container: "mp4",
    codec: "AV1 HFR High",
    fps: 60,
  },
  697: {
    content: "video",
    resolution: "480p",
    container: "mp4",
    codec: "AV1 HFR High",
    fps: 60,
  },
  698: {
    content: "video",
    resolution: "720p",
    container: "mp4",
    codec: "AV1 HFR High",
    fps: 60,
  },
  699: {
    content: "video",
    resolution: "1080p",
    container: "mp4",
    codec: "AV1 HFR High",
    fps: 60,
  },
  700: {
    content: "video",
    resolution: "1440p",
    container: "mp4",
    codec: "AV1 HFR High",
    fps: 60,
  },
  701: {
    content: "video",
    resolution: "2160p",
    container: "mp4",
    codec: "AV1 HFR High",
    fps: 60,
  },
};
