const newsRouter = require('./news');
const siteRouter = require('./site');

function route(app) {
    app.use('/news', newsRouter);

    app.use('/', siteRouter);

    // app.get('/home', (req, res) => {
    //     res.render("home");
    //
    // });

    // app.get('/news', (req, res) => {
    //     // console.log(req.query.q)
    //     res.render("news");
    //
    // });

    // app.get('/search', (req, res) => {
    //     // console.log(req.query.q);
    //     res.render("search");
    //
    // });
    // app.post('/search', (req, res) => {
    //     // console.log(req.query.q);
    //
    //     console.log(req.body);
    //     res.send("search");
    //
    // });
}

module.exports = route;
