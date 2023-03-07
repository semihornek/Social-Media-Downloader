import express from "express";
const router = express.Router();

import { downloadVideo } from "../controllers/youtube";

// GET /youtube/downloadvideo
router.get("/downloadvideo", downloadVideo);

export default router;
