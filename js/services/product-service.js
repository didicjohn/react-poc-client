import { configuration } from '../config/service-urls';

class ProductService {
    getProducts() {
        let productServiceUrl = `${configuration.serviceUrls.baseUrl}/${configuration.serviceUrls.products}`;
        let promise = fetch(productServiceUrl)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Unknown error occured:' + response.responseText);
                }
                return response.json();
            }).catch((error) => {
                console.log("Service Unavailable Error:" + error);
            });
        return promise;
    }
    addNewProduct(product) {
        if (!product)
            throw new Error("Invalid arguments");
        let productServiceUrl = `${configuration.serviceUrls.baseUrl}/${configuration.serviceUrls.products}`;
        let promise = fetch(productServiceUrl, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json'
            },
            body: JSON.stringify(product)
            // mode: 'no-cors'


        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Unknown error occured:' + response.responseText);
                }
                return response.json();
            }).catch((error) => {
                console.log("Service Unavailable Error:" + error);
            });
        return promise;
    }
    searchProducts(searchText) {
        if (!searchText) {
            throw new Error("Invalid argument for search");
        }
        let promise, productServiceUrl;
        if (isNaN(searchText)) {
            productServiceUrl = `${configuration.serviceUrls.baseUrl}/${configuration.serviceUrls.searchByName}/` + searchText;
            promise = fetch(productServiceUrl)
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Unknown error occured:' + response.responseText);
                    }
                    return response.json();
                }).catch((error) => {
                    console.log("Service Unavailable Error:" + error);
                });
        } else {
            productServiceUrl = `${configuration.serviceUrls.baseUrl}/${configuration.serviceUrls.searchById}/` + searchText;
            promise = fetch(productServiceUrl)
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Unknown error occured:' + response.responseText);
                    }
                    return response.json();
                }).catch((error) => {
                    console.log("Service Unavailable Error:" + error);
                });
        }

        return promise;
    }
    deleteProduct(productId) {
        if (!productId||isNaN(productId) ) {
            throw new Error("Invalid argument for search");
        }
       
         let productServiceUrl = `${configuration.serviceUrls.baseUrl}/${configuration.serviceUrls.delete}/` + productId;
         let promise = fetch(productServiceUrl)
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Unknown error occured:' + response.responseText);
                    }
                    return response.json();
                }).catch((error) => {
                    console.log("Service Unavailable Error:" + error);
                });

        return promise;
    }
}

export {
    ProductService
};
