import React, { Component } from 'react';
import { HeaderComponent } from '../header/header-component';
import { FooterComponent } from '../footer/footer-component';
import { ConnectedCrmSystemComponent } from '../crmsystem/crmsystem-component';
import { HomeComponent } from '../home/home-component';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { AddNewProductComponent } from '../add-new-product/add-new-product-component';
import { SearchComponent } from '../search/search-component';
import { browserHistory } from 'react-router';
class LayoutComponent extends Component {
    render() {
        let markup = (
            <Router history={browserHistory}>
                <div>
                    <HeaderComponent />
                    <Route exact path='/' component={ConnectedCrmSystemComponent} />
                    <Route exact path='/usetemplatespa' component={HomeComponent} />
                    <Route exact path='/addNewProduct' component={AddNewProductComponent} />
                    <Route exact path='/search' component={SearchComponent} />
                    <FooterComponent />

                </div>
            </Router>
        );
        return markup;
    }
}

export {
    LayoutComponent
};