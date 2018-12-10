import { ProductActionTypes } from "../action-types/product-action-types";

const ProductActionCreators = {
    loadProducts: (products=[]) => {
        return {
            type: ProductActionTypes.LOAD_PRODUCTS,
            products
        };
    },
    loadSearchProducts: (products=[]) => {
        return {
            type: ProductActionTypes.LOAD_SEARCH_RESULTS,
            products
        };
    },
    isLoading: (loadingFlag) => {
        return {
            type: ProductActionTypes.IS_LOADING,
            isLoading: loadingFlag
        };
    },
    errorOccurred: (errorFlag) => {
        return {
            type: ProductActionTypes.ERROR_OCCURED,
            errorOccurred: errorFlag
        };
    },
    addNewProduct:(product)=>{
        return{
            type:ProductActionTypes.ADD_PRODUCT,
            product:product
        }
    }
};
export {
    ProductActionCreators
};
