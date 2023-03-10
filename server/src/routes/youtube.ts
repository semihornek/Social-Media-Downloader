import { Router } from "express";
import { getMessage, downloadVideo } from "../controllers/youtube";

const router = Router();

// GET /youtube
router.get("/", getMessage);

// GET /youtube/downdload/
router.get("/download", downloadVideo);

export default router;
