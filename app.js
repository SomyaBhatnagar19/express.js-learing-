const express = require('express');

const bodyParser = require('body-parser');

const adminRoutes = require('./routes/admin'); //importind admin file here

const shopRoutes = require('./routes/shop');

const app = express();

app.use(bodyParser.urlencoded({extended: false})); //registers a middleware 

app.use('/admin', adminRoutes);

app.use('/shop', shopRoutes);



app.use((req, res, next) => {
    res.status(404).send('<h1>Page Not Found</h1>');
});

app.listen(4000);

