import hello from "../controllers/hello.js";
import express from "express";
const router = express.Router();

router.get("/", hello.hello);

module.exports = router;
