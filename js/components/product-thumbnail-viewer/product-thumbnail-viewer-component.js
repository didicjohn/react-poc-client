import React, { Component } from 'react';
import { ProductImageUrlPipes } from '../../pipes/product-image-url-pipes';
import { ProductDetailViewerComponent } from '../product-detail-viewer/product-detail-viewer-component';
import { ProductService } from '../../services/product-service';
import { store } from '../../store';
import { ProductActionCreators } from '../../actions-creators/product-action-creators';
import { Redirect, browserHistory } from 'react-router';

class ProductThumbnailViewerComponent extends Component {
    constructor(properties){
        super(properties);
        this.delete = this.delete.bind(this);
    }
    async delete(event) {
        console.log(event.target.value);
        let productService = new ProductService();
        let deleted = await productService.deleteProduct(event.target.value);
      //  let products = await productService.getProducts();
       // store.dispatch(ProductActionCreators.loadProducts(products));
       //this.props.history.push('/');// this.setState({changed:true});
    }
    render() {
        if (!this.props.product) {
            return (<div />);
        }
        return (
            <div>
                <div className='panel panel-primary'>
                    <div className='panel-heading'>
                        <span style={{ color: 'white' }}>
                            {this.props.product.Title}
                        </span>
                    </div>

                    <div className='panel-body text-center'>
                        <img className='img img-rounded img-reponsive'
                            src={ProductImageUrlPipes.transform(this.props.product.ProductId)}
                            alt={this.props.product.Title}
                            title={`Photo of ${this.props.product.Title}`} />
                        <div className="caption">
                            <h3>
                                {this.props.product.Title.substr(0, 10)}
                            </h3>
                            <p>
                                {this.props.product.Remarks.substr(0, 30)}
                            </p>
                            <p>
                                <a data-toggle="modal" className="btn btn-primary"
                                    data-target={`#Product${this.props.product.ProductId}`}
                                    role="button">Details</a>
                                <button type="button" className="btn btn-default" value={(this.props.product.ProductId)} onClick={this.delete}>Delete</button>

                            </p>
                        </div>
                    </div>
                </div>

                <ProductDetailViewerComponent product={this.props.product} />
            </div>
        )
    }
}

export {
    ProductThumbnailViewerComponent
};

