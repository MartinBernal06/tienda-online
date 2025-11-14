import { Crypto } from './crypto.service.js';
export class LocalStorageService{
    static addProductToCart(product){
        let products = this.getProductsInCart();
        products.push(product);
        const productsString = Crypto.encrypData(products);
        localStorage.setItem('ProductsInCart', productsString);

    }

    static getProductsInCart(){
        let productsString = localStorage.getItem('ProductsInCart');
        productsString = Crypto.decryptData(productsString);
        return productsString ? productsString : [];
    }
}