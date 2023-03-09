import { Router } from "express";
import { getMessage } from "../controllers/instagram";

const router = Router();

// GET /instagram
router.get("/", getMessage);

export default router;
