class SiteController {

    // [GET] /
    index(req, res) {
        res.render("home");
    }

    // [GET] /search
    search(req,res) {
        res.render("search")
    }
    // [GET] /:slug
    show(req,res) {
        res.send("Not found")
    }
}
module.exports = new SiteController;


