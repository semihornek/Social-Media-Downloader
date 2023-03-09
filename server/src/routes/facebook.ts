import { Router } from "express";
import { getMessage } from "../controllers/facebook";

const router = Router();

// GET /facebook
router.get("/", getMessage);

export default router;
