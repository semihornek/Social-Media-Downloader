import { Router } from "express";
import { getMessage, getMediaFormats, downloadVideo } from "../controllers/youtube";

const router = Router();

// GET /youtube
router.get("/", getMessage);

// GET /youtube/getMediaFormats
router.get("/getMediaFormats", getMediaFormats);

// POST /youtube/download/
router.post("/download", downloadVideo);

export default router;
