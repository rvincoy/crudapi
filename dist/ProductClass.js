"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductClass = void 0;
class ProductClass {
    constructor(theBody) {
        this.ProductID = parseInt(theBody.ProductID);
        this.Product = theBody.Product;
        this.Description = theBody.Description;
        this.Price = parseFloat(theBody.Price);
    }
}
exports.ProductClass = ProductClass;
