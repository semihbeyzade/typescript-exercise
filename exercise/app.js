"use strict";
exports.__esModule = true;
var Product_1 = require("./Product");
var ProductService_1 = require("./ProductService");
var _productService = new ProductService_1.ProductService();
var result;
result = _productService.getProducts();
result = _productService.getById(2);
var p = new Product_1.Product();
p.name = 'Iphone14 Pro-Max';
p.price = 1000;
p.category = 'Telefon';
/* _productService.saveProduct(p); */
_productService.deleteProduct(result);
result = _productService.getProducts();
console.log(result);
