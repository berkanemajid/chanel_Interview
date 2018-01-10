var express = require('express');
import { isAuth } from '../lib/middleware'

var ProductController = require('../controllers/product');

const router =  express.Router();

router.get('/view/:id', isAuth, ProductController.getProduct);

router.get('/cart/:id', isAuth, ProductController.getCart);

router.get('/list', isAuth, ProductController.getProducts);

export default router;