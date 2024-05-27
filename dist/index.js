"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ProductAPI_1 = require("./ProductAPI");
let products = new ProductAPI_1.ProductAPI();
const indexes = [];
PrintTen(1, indexes);
function PrintTen(index, indexes) {
    if (index <= 10) {
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
