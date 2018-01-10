'use strict'

function getProduct(req, res){
	var id = req.params.id;
    var sqlite3 = require('sqlite3').verbose();
    let db = new sqlite3.Database('database.sqlite');

    db.get("SELECT * FROM products WHERE id = " + id, function(err, row) {
        console.log(row);
        res.render('view', {product: row});
    });

    db.close();
}

function getCart(req,res){
var id = req.params.id;
    var sqlite3 = require('sqlite3').verbose();
    var db = new sqlite3.Database('database.sqlite');

    db.get("SELECT * FROM products WHERE id = " + id, function(err, row) {
        console.log(row);
        res.render('view', {product: row, id: id});
        // res.json({success:true, text: "Product " + id + " successfully bought"})
    });

    db.close();
}

function getProducts(req,res){
	var sqlite3 = require('sqlite3').verbose();
    var db = new sqlite3.Database('database.sqlite');

    db.all("SELECT * FROM products", function(err, rows) {
        res.render('list', {products: rows});
    });

    db.close();
}


module.exports = {
	getProduct,
	getCart,
	getProducts
}