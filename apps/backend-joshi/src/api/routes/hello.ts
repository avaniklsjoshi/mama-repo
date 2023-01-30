import { hello } from "../controllers/hello";

import express from "express";

const router = express.Router();

router.get("/", hello);

export default router;
