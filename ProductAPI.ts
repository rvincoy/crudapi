import * as request from 'request';
import { ProductClass } from './ProductClass';

export class ProductAPI {
    getProductInfo(ProductID:number, cb: (product:ProductClass) => any ) {
        request.get('http://localhost:3002/api/products/' + ProductID, (error:any, response:any, body:any) => {
            let products = new ProductClass(JSON.parse(body));
            //cb(products);
            
            console.log(JSON.parse(body));
        });
    }
}