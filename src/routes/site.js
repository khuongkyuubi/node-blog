const express = require("express");
// const app = express();
const router = express.Router();
const siteController = require("../app/controllers/SiteController");

router.use(express.urlencoded({
    extended: true
})) // encoded body of post method request


router.use("/search/:slug", siteController.show); // tuyến đường đọc từ trên xuống
router.use("/search", siteController.search); // tuyến đường đọc từ trên xuống
// router.post("/search", siteController.)
router.get("/home", siteController.index );
router.use("/:abc", siteController.show);
router.use("/", siteController.index );

module.exports = router;