// import fetch from "node-fetch";
// import fetch from 'cross-fetch';


export class ProductService {

    getProductsSmall() {
        return fetch('../../public/data/products-small.json',{headers : { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
           }}).then(res => res.json()).then(d => d.data);
    }

    getProducts() {
        return fetch('data/products.json').then(res => res.json()).then(d => d.data);
    }

    getProductsWithOrdersSmall() {
        return fetch('data/products-orders-small.json').then(res => res.json()).then(d => d.data);
    }

}