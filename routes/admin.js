const express = require('express');
const router = express.Router();

router.get('/add-product', (req, res, next) => {
    res.send('<form action="/admin/add-product" method="POST"><label>Product name: </label><input type="text" name="title"><label>Size of Product: </label><input type="number" name="size"><button type="submit">Add Product</button></form>');
});

router.post('/add-product', (req, res, next) => {
    console.log(req.body);
    const title = req.body.title;
    const size = req.body.size;
    res.send(`<li><ui>${title} </ui><ui>- ${size}</ui></li>`);
});

module.exports = router;
