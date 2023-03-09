import { Router } from "express";
import { getMessage } from "../controllers/twitter";

const router = Router();

// GET /twitter
router.get("/", getMessage);

export default router;
