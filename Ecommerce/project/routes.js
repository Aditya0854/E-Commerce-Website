const express = require('express');
const path = require('path'); // Ensure path is imported
const router = express.Router();


// Route for serving the homepage
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});


// Sample route for getting products
router.get('/products', (req, res) => {
    res.json([
        { id: 1, name: 'Product 1', price: 100 },
        { id: 2, name: 'Product 2', price: 150 },
        { id: 3, name: 'Product 3', price: 200 }
    ]);
});

// Routes for serving other HTML pages
router.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'about.html'));
});


router.get('/shop', (req, res) => {
    res.sendFile(path.join(__dirname, 'shop1.html'));
});


router.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname, 'contact.html'));
});

router.get('/home', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

router.get('/cart', (req, res) => {
    res.sendFile(path.join(__dirname, 'cart.html'));
});


router.get('/signup', (req, res) => {
    res.sendFile(path.join(__dirname, 'signup.html'));
});


router.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, 'login.html'));
});



module.exports = router;
