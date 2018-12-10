import {combineReducers} from 'redux';
import{ProductReducers} from './product-reducer';


let combinedReducers = combineReducers({
    products:ProductReducers.loadProducts,
    isLoading:ProductReducers.isLoading,
    errorOccurred:ProductReducers.errorOccurred,
    searchResults:ProductReducers.loadSearchProducts
   
});

export{
    combinedReducers
};
