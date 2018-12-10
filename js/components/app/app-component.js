import React, { Component } from 'react';
import { LayoutComponent } from '../layout/layout-component';
import {Provider} from 'react-redux';
import {store} from '../../store';


class AppComponent extends Component {
    render() {
        let markup = (
            <div><Provider store={store}>
           
               <LayoutComponent/>
           
            </Provider>
            </div> 
        );
        return markup;
    }
}

export {
    AppComponent
};
