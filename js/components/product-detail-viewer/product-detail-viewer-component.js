import React, { Component } from 'react';
import {ProductImageUrlPipes} from '../../pipes/product-image-url-pipes';

class ProductDetailViewerComponent extends Component {
    render() {
        if (!this.props.product)
            return (<div />);

        return (
            <div className="modal fade" id={`Product${this.props.product.ProductId}`} tabIndex="-1" role="dialog" aria-labelledby="myModalLabel">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            </button> <span>

                            </span>
                            <h4 className="modal-title" id="myModalLabel">
                                Product Details of{this.props.product.className}
                            </h4>

                        </div>

                        <div className="modal-body">
                            <div className="row">
                                <div className="col-md-4">
                                    <img title={`Product photo of ${this.props.product.Title}`}
                                        alt="Product Photo"
                                        src={ProductImageUrlPipes.transform(this.props.product.ProductId)}
                                        className="img img-responsive img-rounded" />

                                </div>

                                <div className="col-md-8">
                                    <table className="table table-responsive table-condensed table-hover">
                                        <thead>
                                            <tr>
                                                <th>Property Name</th>
                                                <th>Property Value</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>Product Id:</td>
                                                <td>{this.props.product.ProductId}</td>
                                            </tr>
                                            <tr>
                                                <td>Product Name:</td>
                                                <td>{this.props.product.Title}</td>
                                            </tr>
                                            <tr>
                                                <td>Product Price:</td>
                                                <td>{this.props.product.UnitPrice}</td>
                                            </tr>
                                            <tr>
                                                <td>Selling Price:</td>
                                                <td>{this.props.product.SellingPrice}</td>
                                            </tr>
                                            <tr>
                                                <td>Units In Stock:</td>
                                                <td>{this.props.product.UnitsInStock}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                        <div className="row">
                                <div className="col-md-12">
                                    Product Remarks:

                                    <br />

                                    <p className="text-left">
                                        {this.props.product.Remarks}
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="modal-footer">
                            <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export{
    ProductDetailViewerComponent
};
