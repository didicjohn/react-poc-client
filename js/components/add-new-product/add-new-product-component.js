import React, { Component } from 'react';
import { connect, dispatch } from 'react-redux';
import { ProductService } from '../../services/product-service';
import { ProductActionCreators } from '../../actions-creators/product-action-creators';
import { Redirect, browserHistory } from 'react-router';
import { store } from '../../store';


class AddNewProductComponent extends Component {
    constructor(properties) {
        super(properties);
        this.state = {
            ProductId: 0,
            Title: '',
            Description: '',
            UnitPrice: 0,
            SellingPrice: 0,
            UnitsInStock: 0,
            Remarks: '',
            ProductPhotoURL: '',
            counter:100
        };
        this.save = this.save.bind(this);
        this.cancel = this.cancel.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.addNewProduct = this.addNewProduct.bind(this);
        this.incrementCounter = this.incrementCounter.bind(this);
    }
    incrementCounter()
    {
        return this.state.counter++;
    }
    handleInputChange(event) {
        let target = event.target;
        let value = target.value;
        let name = target.name;
        this.setState({
            [name]: value
        });
    }

    save() {
        let validate = true;//Do validations
        if (validate) {
            this.setState({
                ProductId: this.state.counter,
                Title: this.state.Title,
                Description: this.state.Description,
                UnitPrice: this.state.UnitPrice,
                SellingPrice: this.state.SellingPrice,
                UnitsInStock: this.state.UnitsInStock,
                Remarks: this.state.Remarks,
                ProductPhotoURL: this.state.ProductPhotoURL
            });
            let product = {
                ProductId: this.state.ProductId,
                Title: this.state.Title,
                Description: this.state.Description,
                UnitPrice: this.state.UnitPrice,
                SellingPrice: this.state.SellingPrice,
                UnitsInStock: this.state.UnitsInStock,
                Remarks: this.state.Remarks,
                ProductPhotoURL: this.state.ProductPhotoURL
            };
            (async (product) => {
                await this.addNewProduct(product);
            })(product).then(response => {
                console.log("REDIRECT..");
                this.incrementCounter();
                this.props.history.push('/');
            });;
        }
    }
    cancel() {
        this.setState({
            ProductId: 0,
            Title: '',
            Description: '',
            UnitPrice: 0,
            SellingPrice: 0,
            UnitsInStock: 0,
            Remarks: '',
            ProductPhotoURL: ''
        });
    }
    async addNewProduct(product) {
        try {
            let productService = new ProductService();
            let productSaved = await productService.addNewProduct(product);
            store.dispatch(ProductActionCreators.loadProducts([productSaved]));
            console.log("product create called.")

        } catch (error) {
            console.log("product create called error.");
            console.log(error);
        }
    }

    render() {
        let markup = (
            <div>
                <div>
                    <header id="head" className="secondary"></header>
                    <div className="container">
                        <ol className="breadcrumb">
                            <li><a href="index.html">Home</a></li>
                            <li className="active">Products</li>
                        </ol>
                        <br />
                        <div >
                            {/* <form> */}
                            {/* <div className="form-group row">
                                <label htmlFor="ProductId" className="col-sm-2 col-form-label">ProductId</label>
                                <div className="col-sm-10">
                                    <input type="number" disabled={true} className="form-control" name="ProductId" placeholder={this.state.counter}  />
                                </div>
                            </div> */}
                            <div className="form-group row">
                                <label htmlFor="Title" className="col-sm-2 col-form-label">Title</label>
                                <div className="col-sm-10">
                                    <input type="text" className="form-control" name="Title" placeholder="Title" onChange={this.handleInputChange} />
                                </div>
                            </div>
                            <div className="form-group row">
                                <label htmlFor="Description" className="col-sm-2 col-form-label">Description</label>
                                <div className="col-sm-10">
                                    <input type="text" className="form-control" name="Description" placeholder="Description" onChange={this.handleInputChange} />
                                </div>
                            </div><div className="form-group row">
                                <label htmlFor="UnitPrice" className="col-sm-2 col-form-label">UnitPrice</label>
                                <div className="col-sm-10">
                                    <input type="number" className="form-control" name="UnitPrice" placeholder="0" onChange={this.handleInputChange} />
                                </div>
                            </div><div className="form-group row">
                                <label htmlFor="SellingPrice" className="col-sm-2 col-form-label">SellingPrice</label>
                                <div className="col-sm-10">
                                    <input type="number" className="form-control" name="SellingPrice" placeholder="0" onChange={this.handleInputChange} />
                                </div>
                            </div><div className="form-group row">
                                <label htmlFor="UnitsInStock" className="col-sm-2 col-form-label">UnitsInStock</label>
                                <div className="col-sm-10">
                                    <input type="number" className="form-control" name="UnitsInStock" placeholder="0" onChange={this.handleInputChange} />
                                </div>
                            </div><div className="form-group row">
                                <label htmlFor="Remarks" className="col-sm-2 col-form-label">Remarks</label>
                                <div className="col-sm-10">
                                    <input type="text" className="form-control" name="Remarks" placeholder="Remarks" onChange={this.handleInputChange} />
                                </div>
                            </div><div className="form-group row">
                                <label htmlFor="ProductPhotoURL" className="col-sm-2 col-form-label">ProductPhotoURL</label>
                                <div className="col-sm-10">
                                    <input type="text" className="form-control" name="ProductPhotoURL" placeholder="ProductPhotoURL" onChange={this.handleInputChange} />
                                </div>
                            </div>


                            <div className="form-group row">
                                <div className="col-sm-10">
                                    <button className="btn btn-primary" onClick={this.save}>Save</button>
                                    &nbsp;
                                        <input className="btn " type="reset" onClick={this.cancel} />
                                </div>
                            </div>
                            {/* </form> */}
                        </div>
                    </div>
                </div >
            </div >
        );
        return markup;
    }
}


export {
    AddNewProductComponent
};