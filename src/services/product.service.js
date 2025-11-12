import { Product } from '../models/product.js';

export class ProductService{
    static getProducts(){
        const productList = [
            new Product(1, "Coca Cola", "Refresco sabor cola", "$19.90", './src/assets/images/cocacola.png'),
            new Product(2, "Galletas", "Principe 200gr", "$29.90", './src/assets/images/galletas.png'),
            new Product(3, "Sabritas", "Papas", "$39.90", './src/assets/images/sabritas.jpg')
        ]

        return productList;
    }
}