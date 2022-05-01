// file khởi tạo ứng dụng

const express = require("express");
const app = express(); // trả lại đói tượng đại diện cho 1 đối tượng để xây dựng website
const port = 3000;

// get là định nghĩa route (tuyến đường);

app.get('/', (req, res)=> {
    let a = 1;
    let b = 2;
    let c = 1+2;
    return res.send("Hello World!");
})
app.listen(port,() => console.log('Example') )



