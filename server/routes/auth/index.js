const express = require("express");
const router = express.Router();
const cors = require("cors");

const { test } = require("../../controllers/auth");

//middlew
router.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

//user routes
router.get("/", test);

module.exports = router;
