const express = require('express');
const bodyParser = require('body-parser'); //importing body-parser

const app = express();

//below use is for parsing the request of body as it is undefined right now
app.use(bodyParser.urlencoded({extended: false})); //registers a middleware 


//middleware functions
//using use for routess- if /app-product is used as path then 
        //only below middleware works else the below one works
app.use('/add-product', (req, res, next) => {
    res.send('<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form>');
});

//middleware to handle /product 
app.use('/product', (req, res, next) => {
    console.log(req.body); 
    res.redirect('/'); //this helps to redirect to some other page
});


app.use('/', (req, res, next) => {
    res.send("<h1>Hello from Express.js!</h1>");
});


app.listen(4000); //if using this we can remove the import of http and also remove the createServer code as this single line works for both

