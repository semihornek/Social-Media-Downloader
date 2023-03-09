import { Router } from "express";
import { getMessage } from "../controllers/youtube";

const router = Router();

// GET /youtube
router.get("/", getMessage);

export default router;
