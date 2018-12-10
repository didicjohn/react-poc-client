import {createStore,applyMiddleware} from 'redux';
import  thunk from 'redux-thunk';
import {combinedReducers} from '../reducers';


let store =  createStore(combinedReducers,{},
applyMiddleware(thunk));

export{
 store
};
