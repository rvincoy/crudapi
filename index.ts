import { ProductClass } from "./ProductClass";
import { ProductAPI } from "./ProductAPI";

let products = new ProductAPI();
const indexes: number[] = [];
PrintTen(1, indexes); // recursion

function PrintTen(index:number, indexes:number[]): void {
    if (index<=10) {
        //calls the class ProductClass
        products.getProductInfo(index,(products:ProductClass) =>{
            console.log(products);
        });
        indexes.push(index);
        index+=1;
        PrintTen(index, indexes);
    }
    else {
        console.log(indexes.toString());
    }
}

