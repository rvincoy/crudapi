import * as request from 'request';
import { ProductClass } from './ProductClass';

export class ProductAPI {
    getProductInfo(ProductID:number, cb: (product:ProductClass) => any ) {
        //api get call
        request.get('http://localhost:3002/api/products/' + ProductID, (error:any, response:any, body:any) => {
            let products = new ProductClass(JSON.parse(body));
            //cb(products); //not working JSON.parse(body). Product becomes undefined so not using it. 
            
            console.log(JSON.parse(body)); //will just print the json data to the screen instead
        });
    }
}