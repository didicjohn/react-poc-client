import React, { Component } from 'react';
import { ProductActionCreators } from '../../actions-creators/product-action-creators';
import { ProductService } from '../../services/product-service';
import { connect } from 'react-redux';
import { ProductThumbnailViewerComponent } from '../product-thumbnail-viewer/product-thumbnail-viewer-component';
import { ProductActionTypes } from '../../action-types/product-action-types';

class SearchComponent extends Component {
    constructor(properties) {
        super(properties);
        this.state = {
            searchText: '',
            searchResults: []
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.search = this.search.bind(this);
    }
    handleInputChange(event) {
        this.setState({
            searchText: event.target.value
        });
    }
    async search(event) {
        let productService = new ProductService();
        let searchResults = await productService.searchProducts(this.state.searchText);
        this.setState({
            searchResults
        });
    }
    render() {
        let markup = (
            <div>
                <header id="head" className="secondary"></header>
                <div className="container">
                    <ol className="breadcrumb">
                        <li><a href="index.html">Home</a></li>
                        <li className="active">Search</li>
                    </ol>
                    <br />

                    <div>
                        <div className="container">
                            <div className="col-md-3" style={{ float: "right" }}>
                                <div className="input-group add-on">
                                    <input className="form-control" placeholder="Search.." name="searchText" type="text" onChange={this.handleInputChange} />
                                    <div className="input-group-btn">
                                        <button className="btn btn-default" onClick={this.search}><i className="glyphicon glyphicon-search"></i></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <br />
                    <div className='row'>
                        {
                            this.state.searchResults.map(item => {
                                return (
                                    <div key={item.ProductId} className='col-md-3'>
                                        <ProductThumbnailViewerComponent product={item} />
                                    </div>
                                );
                            })
                        }
                    </div>
                </div>
            </div>

        );
        return markup


    }
}

export {
    SearchComponent
};

