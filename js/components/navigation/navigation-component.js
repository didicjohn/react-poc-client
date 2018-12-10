import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class NavigationComponent extends Component {
    render() {
        let markup = (
            <ul className="nav navbar-nav pull-right">
                <li><Link to='/'>Products</Link></li>
                <li><Link to='/addNewProduct'>Add a Product</Link></li>
                <li><Link to='/search'>Search</Link></li>
                <li><Link to='/usetemplatespa'>Template</Link></li>
            </ul>
        );
        return markup;
    }
}

export {
    NavigationComponent
};