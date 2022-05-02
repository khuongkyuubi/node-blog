// file khởi tạo ứng dụng
const path = require("path");
const express = require("express");
const morgan = require("morgan");
const app = express(); // trả lại đói tượng đại diện cho 1 đối tượng để xây dựng website
// import {engine as handlebars } from 'express-handlebars';
const handlebars = require("express-handlebars");
const port = 3000;

const route = require("./routes") // tự trỏ đến file index trong thư mục routes


app.use(express.static(path.join(__dirname,"public")));

// app.use(morgan("combined"));

app.use(express.urlencoded({
    extended: true
})); // middleware xử lý request từ form
app.use(express.json()); // middleware xử lý request từ fetch, html...

// setup template engines // tự render từ các file handlebars
app.engine("hbs", handlebars.engine({
    extname: ".hbs" // config file .handlebars thành .hbs
}));
// setup views để app render từ các file trong views
app.set("view engine", "hbs");
app.set('views', path.join(__dirname, "resources", "views")); // set đường dẫn cho views
// get là định nghĩa route (tuyến đường);


// Route init
route(app);





app.listen(port,() => console.log('Example') )



