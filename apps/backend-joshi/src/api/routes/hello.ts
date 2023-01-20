import { hello } from "../controllers/hello";
import { goals, experiences, skills } from "../controllers/profile";

import express from "express";

const router = express.Router();

router.get("/", hello);
router.get("/profile/goals", goals);
router.get("/profile/experiences", experiences);
router.get("/profile/skills", skills);

module.exports = router;
