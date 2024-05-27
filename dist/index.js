"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ProductAPI_1 = require("./ProductAPI");
let products = new ProductAPI_1.ProductAPI();
const indexes = [];
PrintTen(1, indexes); // recursion
function PrintTen(index, indexes) {
    if (index <= 10) {
        //calls the class ProductClass
        products.getProductInfo(index, (products) => {
            console.log(products);
        });
        indexes.push(index);
        index += 1;
        PrintTen(index, indexes);
    }
    else {
        console.log(indexes.toString());
    }
}
