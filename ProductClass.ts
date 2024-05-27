//very basic class
export class ProductClass {
    ProductID: number;
    Product: string;
    Description: string;
    Price: number;
    id?: string;
    xata?: string;
    
    constructor(theBody:any) {
        this.ProductID = parseInt(theBody.ProductID);
        this.Product = theBody.Product;
        this.Description = theBody.Description;
        this.Price = parseFloat(theBody.Price);
    }
}