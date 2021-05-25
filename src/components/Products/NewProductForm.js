import React, {Component} from "react";
import axios from "axios";
import {Button} from 'react-bootstrap'

class NewProductForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: '',
            productType: '',
            sellingPrice: '',
            purchasePrice: '',
            taxRate: '',
            unitsOfMeasure: ''
        }
    }

    changeHandler = e => {
        this.setState({[e.target.name]: e.target.value})
    }

    submitHandler = e => {
        e.preventDefault()
        console.log(this.state)
        axios.post("http://localhost:8080/api/v1/products", this.state)
            .then(reponse => {
                console.log(reponse)
            })
            .catch(error => {
                console.log(error)
            })
    }

    render() {
        const {name, productType, sellingPrice, purchasePrice, taxRate, unitsOfMeasure} = this.state
        return (
            <div className={"container my-2"}>
                <div className="modal-content">
                    <form onSubmit={this.submitHandler}>
                        <div className="modal-header d-flex align-items-center bg-primary text-white">
                            <h6 className="modal-title mb-0" id="threadModalLabel">New Product</h6>
                        </div>
                        <div className="modal-body">
                            <div className="form-group">
                                <label htmlFor="threadTitle">Name</label>
                                <input className="form-control" type={"text"}
                                       placeholder="Enter name"
                                       name={"name"}
                                       value={name}
                                       onChange={this.changeHandler}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="threadTitle">Product type</label>
                                <select className="form-control"
                                        placeholder="Enter product type"
                                       name={"productType"}
                                       value={productType}
                                        onChange={this.changeHandler}>
                                    <option>alkohol</option>
                                    <option>kosmetyki</option>
                                    <option>nabiał</option>
                                    <option>napoje</option>
                                    <option>nasiona</option>
                                    <option>owoc</option>
                                    <option>pieczywo</option>
                                    <option>słodycz</option>
                                    <option>warzywo</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label htmlFor="threadTitle">Selling Price</label>
                                <input className="form-control" type={"text"}
                                       placeholder="Enter selling price"
                                       name={"sellingPrice"}
                                       value={sellingPrice}
                                       onChange={this.changeHandler}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="threadTitle">Purchase Price</label>
                                <input className="form-control" type={"text"}
                                       placeholder="Enter purchase price"
                                       name={"purchasePrice"}
                                       value={purchasePrice}
                                       onChange={this.changeHandler}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="threadTitle">Tax Rate</label>
                                <input className="form-control" type={"text"}
                                       placeholder="Enter tax rate"
                                       name={"taxRate"}
                                       value={taxRate}
                                       onChange={this.changeHandler}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="threadTitle">Units of measure</label>
                                <select className="form-control"
                                       placeholder="Enter unit of measure"
                                       name={"unitsOfMeasure"}
                                       value={unitsOfMeasure}
                                       onChange={this.changeHandler}>
                                    <option>szt</option>
                                    <option>kg</option>
                                </select>
                            </div>
                        </div>

                        <div className="modal-footer">
                            <Button href={"/products"} type="button" className="btn btn-light">Cancel</Button>
                            <Button type="submit" className="btn btn-primary">Submit</Button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}
export default NewProductForm