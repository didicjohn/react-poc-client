import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ProductService } from '../../services/product-service';
import { ProductActionCreators } from '../../actions-creators/product-action-creators';
import { ProductThumbnailViewerComponent } from '../product-thumbnail-viewer/product-thumbnail-viewer-component';
import { configuration } from '../../config/service-urls';

const NEW_PRODUCT_RECORD_EVENT = 'NewProductRecordCreated';


class CrmSystemComponent extends Component {
    componentDidMount() {
        let validation = this.props.loadProducts && typeof this.props.loadProducts === 'function' &&
            this.props.initializeNotificaiton && typeof this.props.initializeNotificaiton === 'function'
        if (validation) {
          if(this.props.products.length===0){
            this.props.loadProducts();
          }   
            this.props.initializeNotificaiton();
        }
    }

    render() {
        if (this.props.isLoading) {
            return (<div>Loading..Please wait.</div>);
        }

        if (this.props.errorOccurred) {
            return (<div>Error Occurred</div>);
        }
        if (this.props.products) {
            let markup = (
                <div>
                    <header id="head" className="secondary"></header>
                    <div className="container">
                        <ol className="breadcrumb">
                            <li><a href="index.html">Home</a></li>
                            <li className="active">Products</li>
                        </ol>
                        <br />
                        <div className='row'>
                            {
                                this.props.products.map(item => {
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
            return markup;
        }
        return (<div />);
    }
}

let mapStateToProps = (state) => {
    return {
        products: state.products,
        isLoading: state.isLoading,
        errorOccurred: state.errorOccurred
    };

};
let socketClient = io.connect(configuration.serviceUrls.baseUrl);
let isSocketClientConnected = false;

let mapActionsToProps = (dispatch) => {
    return {
        loadProducts: async () => {
            try {
                let productService = new ProductService();
                dispatch(ProductActionCreators.isLoading(true));
                let products = await productService.getProducts();
                dispatch(ProductActionCreators.loadProducts(products));
                dispatch(ProductActionCreators.isLoading(false));

            } catch (error) {
                dispatch(ProductActionCreators.errorOccurred(true));
            }

        },
        initializeNotificaiton: () => {
            if (!isSocketClientConnected) {
                socketClient.on(NEW_PRODUCT_RECORD_EVENT, newProductRecord => {
                    console.log('New Product Added..');
                 //   dispatch(ProductActionCreators.loadProducts([newProductRecord]));
                }),
                    socketClient.on("ServerError:ConnectionFailed", error => {
                        console.log("ServerError:ConnectionFailed" + error);
                    });
                isSocketClientConnected = true;
            }
        },
        loadSearchedProducts: async (products) => {
            try {
                console.log("loadSearchedProducts");
                this.setState({
                    searchResults: products
                });
            } catch (error) {
                dispatch(ProductActionCreators.errorOccurred(true));
            }

        },
    };
};


let ConnectedCrmSystemComponent = connect(mapStateToProps, mapActionsToProps)(CrmSystemComponent);
export {
    ConnectedCrmSystemComponent
};
