import {
	profileDetails,
	featureLikeFunctionality
} from "../controllers/profile";

import express from "express";

const router = express.Router();

router.get("/profile", profileDetails);
router.get("/feature-likes", featureLikeFunctionality);

export default router;
