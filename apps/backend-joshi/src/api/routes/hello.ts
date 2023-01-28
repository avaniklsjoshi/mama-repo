import { hello } from "../controllers/hello";
import {
	profileDetails,
	featureLikeFunctionality
} from "../controllers/profile";

import express from "express";

const router = express.Router();

router.get("/", hello);
router.get("/profile", profileDetails);
router.get("/feature-likes", featureLikeFunctionality);

module.exports = router;
