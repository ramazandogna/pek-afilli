const express = require("express");
const router = express.Router();
const cors = require("cors");

const { test } = require("../../controllers/auth");

//middlew
router.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

//user routes
router.get("/", test);

module.exports = router;
