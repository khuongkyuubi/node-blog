// file khởi tạo ứng dụng
const path = require("path");
const express = require("express");
const morgan = require("morgan");
const app = express(); // trả lại đói tượng đại diện cho 1 đối tượng để xây dựng website
// import {engine as handlebars } from 'express-handlebars';
const handlebars = require("express-handlebars");
const port = 3000;


app.use(express.static(path.join(__dirname,"public")));

app.use(morgan("combined"));

// template engines
app.engine("hbs", handlebars.engine({
    extname: ".hbs"

}));
app.set("view engine", "hbs");
app.set('views', path.join(__dirname, "resources", "views")); // set đường dẫn views
// get là định nghĩa route (tuyến đường);

app.get('/trang-chu', (req, res)=> {
    res.render("home");

});
app.get('/news', (req, res)=> {
    res.render("news");

});

app.listen(port,() => console.log('Example') )



