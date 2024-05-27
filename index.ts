import { ProductClass } from "./ProductClass";
import { ProductAPI } from "./ProductAPI";

let products = new ProductAPI();
const indexes: number[] = [];
PrintTen(1, indexes);

function PrintTen(index:number, indexes:number[]): void {
    if (index<=10) {
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

