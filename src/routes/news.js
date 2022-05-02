const express = require("express");
// const app = express();
const router = express.Router();
const newsController = require("../app/controllers/NewsController");

router.use("/:slug", newsController.show); // tuyến đường đọc từ trên xuống
router.use("/", newsController.index );

module.exports = router;