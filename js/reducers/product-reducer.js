import { ProductActionTypes } from "../action-types/product-action-types";

class ProductReducers {
    static loadProducts(state = [], action) {
        let nextState = state;
        if (action.type == ProductActionTypes.LOAD_PRODUCTS) {
            nextState = [...state, ...action.products];
        }
        return nextState;
    }
    static loadSearchProducts(state = [], action) {
        let nextState = state;
        if (action.type == ProductActionTypes.LOAD_SEARCH_RESULTS) {
            nextState = [...state, ...action.searchResults];
        }
        return nextState;
    }
    static isLoading(state = false, action) {
        let nextState = state;
        if (action.type == ProductActionTypes.IS_LOADING) {
            nextState = action.isLoading;
        }
        return nextState;
    }

    static errorOccurred(state = false, action) {
        let nextState = state;
        if (action.type == ProductActionTypes.ERROR_OCCURED) {
            nextState = action.errorOccurred;
        }
        return nextState;
    }
    static addNewProduct(state = [], action) {
        let nextState = state;
        if (action.type == ProductActionTypes.ADD_PRODUCT) {
            nextState = [...state,...action.product];
        }
        return nextState;
    }
}

export{
    ProductReducers
};
