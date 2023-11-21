const express = require('express');

const app = express();

//middleware functions
//using use for routess
app.use('/add-product', (req, res, next) => {
    console.log('In 2nd middleware!');
    res.send("<h1>The add product page.</h1>");
});
app.use('/', (req, res, next) => {
    console.log('In 2nd middleware!');
    res.send("<h1>Hello from Express.js!</h1>");
});


app.listen(4000); //if using this we can remove the import of http and also remove the createServer code as this single line works for both

