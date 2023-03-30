export const YouTubeMediaFormats: {
  [key: number]: {
    content: string;
    resolution: string;
    container: string;
    codec: string;
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
  266: {
    content: "video",
    resolution: "2160p",
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

  // VP9
  278: {
    content: "video",
    resolution: "144p",
    container: "webm",
    codec: "VP9",
  },
  242: {
    content: "video",
    resolution: "240p",
    container: "webm",
    codec: "VP9",
  },
  243: {
    content: "video",
    resolution: "360p",
    container: "webm",
    codec: "VP9",
  },
  244: {
    content: "video",
    resolution: "480p",
    container: "webm",
    codec: "VP9",
  },
  247: {
    content: "video",
    resolution: "720p",
    container: "webm",
    codec: "VP9",
  },
  248: {
    content: "video",
    resolution: "1080p",
    container: "webm",
    codec: "VP9",
  },
  271: {
    content: "video",
    resolution: "1440p",
    container: "webm",
    codec: "VP9",
  },
  313: {
    content: "video",
    resolution: "2160p",
    container: "webm",
    codec: "VP9",
  },

  // VP9 HFR
  302: {
    content: "video",
    resolution: "720p",
    container: "webm",
    codec: "VP9 HFR",
  },
  303: {
    content: "video",
    resolution: "1080p",
    container: "webm",
    codec: "VP9 HFR",
  },
  308: {
    content: "video",
    resolution: "1440p",
    container: "webm",
    codec: "VP9 HFR",
  },
  315: {
    content: "video",
    resolution: "2160p",
    container: "webm",
    codec: "VP9 HFR",
  },
  272: {
    content: "video",
    resolution: "4320p",
    container: "webm",
    codec: "VP9 HFR",
  },

  // VP9.2 HDR HFR
  330: {
    content: "video",
    resolution: "144p",
    container: "webm",
    codec: "VP9.2 HDR HFR",
  },
  331: {
    content: "video",
    resolution: "240p",
    container: "webm",
    codec: "VP9.2 HDR HFR",
  },
  332: {
    content: "video",
    resolution: "360p",
    container: "webm",
    codec: "VP9.2 HDR HFR",
  },
  333: {
    content: "video",
    resolution: "480p",
    container: "webm",
    codec: "VP9.2 HDR HFR",
  },
  334: {
    content: "video",
    resolution: "720p",
    container: "webm",
    codec: "VP9.2 HDR HFR",
  },
  335: {
    content: "video",
    resolution: "1080p",
    container: "webm",
    codec: "VP9.2 HDR HFR",
  },
  336: {
    content: "video",
    resolution: "1440p",
    container: "webm",
    codec: "VP9.2 HDR HFR",
  },
  337: {
    content: "video",
    resolution: "2160p",
    container: "webm",
    codec: "VP9.2 HDR HFR",
  },

  // AV1
  394: {
    content: "video",
    resolution: "144p",
    container: "mp4",
    codec: "AV1",
  },
  395: {
    content: "video",
    resolution: "240p",
    container: "mp4",
    codec: "AV1",
  },
  396: {
    content: "video",
    resolution: "360p",
    container: "mp4",
    codec: "AV1",
  },
  397: {
    content: "video",
    resolution: "480p",
    container: "mp4",
    codec: "AV1",
  },

  // AV1 HFR
  398: {
    content: "video",
    resolution: "720p",
    container: "mp4",
    codec: "AV1 HFR",
  },
  399: {
    content: "video",
    resolution: "1080p",
    container: "mp4",
    codec: "AV1 HFR",
  },
  400: {
    content: "video",
    resolution: "1440p",
    container: "mp4",
    codec: "AV1 HFR",
  },
  401: {
    content: "video",
    resolution: "2160p",
    container: "mp4",
    codec: "AV1 HFR",
  },
  402: {
    content: "video",
    resolution: "4320p",
    container: "mp4",
    codec: "AV1 HFR",
  },
  571: {
    content: "video",
    resolution: "4320p",
    container: "mp4",
    codec: "AV1 HFR",
  },

  // AV1 HFR High
  694: {
    content: "video",
    resolution: "144p",
    container: "mp4",
    codec: "AV1 HFR High",
  },
  695: {
    content: "video",
    resolution: "240p",
    container: "mp4",
    codec: "AV1 HFR High",
  },
  696: {
    content: "video",
    resolution: "360p",
    container: "mp4",
    codec: "AV1 HFR High",
  },
  697: {
    content: "video",
    resolution: "480p",
    container: "mp4",
    codec: "AV1 HFR High",
  },
  698: {
    content: "video",
    resolution: "720p",
    container: "mp4",
    codec: "AV1 HFR High",
  },
  699: {
    content: "video",
    resolution: "1080p",
    container: "mp4",
    codec: "AV1 HFR High",
  },
  700: {
    content: "video",
    resolution: "1440p",
    container: "mp4",
    codec: "AV1 HFR High",
  },
  701: {
    content: "video",
    resolution: "2160p",
    container: "mp4",
    codec: "AV1 HFR High",
  },
};
