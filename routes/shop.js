const express = require('express');

const router = express.Router();

router.get('/about', (req, res, next) => {
    res.send("<h1>This is the about page in shop.js!</h1>");
});
router.use('/home', (req, res, next) => {
    res.send('<h1>Welcome to the Shopping App!!</h1>');
});
module.exports = router;