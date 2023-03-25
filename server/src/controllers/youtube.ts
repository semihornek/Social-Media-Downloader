import fs from "fs";
import { spawn } from "child_process";
import * as readline from "readline";
import { Writable } from "stream";

import ytdl from "ytdl-core";
import ffmpeg from "ffmpeg-static";
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
    const { url, itag, container } = req.body;
    // download video and audio together
    if (YouTubeMediaFormats[itag].content === "videoandaudio") {
      ytdl(url, { filter: (format) => format.itag === +itag }).pipe(fs.createWriteStream(`video.${container}`));
    }
    // download video and audio seperately in a stream
    else {
      const tracker = {
        start: Date.now(),
        audio: { downloaded: 0, total: Infinity },
        video: { downloaded: 0, total: Infinity },
        merged: { frame: 0, speed: "0x", fps: 0 },
      };

      // Get audio and video streams
      let resolution = YouTubeMediaFormats[itag].resolution;
      resolution = resolution.slice(0, resolution.indexOf("p"));

      const audio = ytdl(url, { quality: +resolution > 480 ? "highestaudio" : "lowestaudio" }).on("progress", (_, downloaded, total) => {
        tracker.audio = { downloaded, total };
      });
      const video = ytdl(url, { quality: itag }).on("progress", (_, downloaded, total) => {
        tracker.video = { downloaded, total };
      });

      // Prepare the progress bar
      let progressbarHandle: NodeJS.Timer;
      const progressbarInterval = 1000;
      const showProgress = () => {
        readline.cursorTo(process.stdout, 0);
        const toMB = (i: number) => (i / 1024 / 1024).toFixed(2);

        process.stdout.write(`Audio  | ${((tracker.audio.downloaded / tracker.audio.total) * 100).toFixed(2)}% processed `);
        process.stdout.write(`(${toMB(tracker.audio.downloaded)}MB of ${toMB(tracker.audio.total)}MB).${" ".repeat(10)}\n`);

        process.stdout.write(`Video  | ${((tracker.video.downloaded / tracker.video.total) * 100).toFixed(2)}% processed `);
        process.stdout.write(`(${toMB(tracker.video.downloaded)}MB of ${toMB(tracker.video.total)}MB).${" ".repeat(10)}\n`);

        process.stdout.write(`Merged | processing frame ${tracker.merged.frame} `);
        process.stdout.write(`(at ${tracker.merged.fps} fps => ${tracker.merged.speed}).${" ".repeat(10)}\n`);

        process.stdout.write(`running for: ${((Date.now() - tracker.start) / 1000 / 60).toFixed(2)} Minutes.`);
        readline.moveCursor(process.stdout, 0, -3);
      };

      // Start the ffmpeg child process
      const ffmpegProcess = spawn(
        ffmpeg!,
        [
          // Remove ffmpeg's console spamming
          "-loglevel",
          "8",
          "-hide_banner",
          // Redirect/Enable progress messages
          "-progress",
          "pipe:2",
          // Input audio and video by pipe
          "-i",
          "pipe:3",
          "-i",
          "pipe:4",
          // Map audio & video from streams
          "-map",
          "0:a",
          "-map",
          "1:v",
          // Keep encoding
          "-c:v",
          "copy",
          // Define output file
          `out.${container}`,
        ],
        {
          windowsHide: true,
          stdio: [
            /* Standard: stdin, stdout, stderr */
            "pipe",
            "pipe",
            "pipe",
            /* Custom: pipe:3, pipe:4, pipe:5 */
            "pipe",
            "pipe",
            "pipe",
          ],
        },
      );

      ffmpegProcess.on("close", () => {
        console.log("done");
        // Cleanup
        process.stdout.write("\n\n\n\n");
        clearInterval(progressbarHandle!);
      });

      // Link streams
      // FFmpeg creates the transformer streams and we just have to insert / read data
      ffmpegProcess.stdio[2]!.on("data", (chunk) => {
        // Start the progress bar
        if (!progressbarHandle) progressbarHandle = setInterval(showProgress, progressbarInterval);
        // Parse the param=value list returned by ffmpeg
        const lines = chunk.toString().trim().split("\n");
        const args: { frame: number; speed: string; fps: number } | any = {
          frame: 0,
          speed: "",
          fps: 0,
        };
        for (const l of lines) {
          const [key, value] = l.split("=");
          args[key.trim()] = value.trim();
        }
        tracker.merged = args;
      });
      audio.pipe(ffmpegProcess.stdio[3] as Writable);
      video.pipe(ffmpegProcess.stdio[4] as Writable);
    }

    res.status(200).json({ message: "Video is downloading!", url });
  } catch (error: any) {
    res.status(404).json({ message: error.message });
  }
};
