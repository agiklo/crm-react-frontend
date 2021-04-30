import React from "react";
import axios from "axios";
import {Button, Table} from 'react-bootstrap'

const api = axios.create({
    baseURL: `http://localhost:8080/api/v1/product-units`
})

class ProductsUnits extends React.Component {
    state = {productsUnits: []}

    constructor() {
        super();
        this.getProductsUnits()
    }

    getProductsUnits = async () => {
        try {
            let data = await api.get('/').then(({data}) => data);
            this.setState({productsUnits: data})
        } catch (err) {
            console.log(err)
        }
    }

    render() {
        return (
            <div className={"container"}>
                <div className="container-fluid m-2">
                    <h3 className="text-dark mb-4">Products Units</h3>
                    <div className="card shadow">
                        <div className="card-header py-3">
                            <p className="text-primary m-0 font-weight-bold">Products Units Info</p>
                        </div>
                        <div className="card-body">
                            <div className="row">
                                <div className="col-md-6 text-nowrap">
                                    <div id="dataTable_length" className="dataTables_length" aria-controls="dataTable">
                                        <label>Show <select
                                            className="form-control form-control-sm custom-select custom-select-sm">
                                            <option onChange={() => this.setupSize(20)} value="20" value={"selected"}>20</option>
                                            <option onClick={() => this.setupSize(30)} value="30">30</option>
                                            <option onChange={() => this.setupSize(50)} value="50">50</option>
                                            <option onChange={() => this.setupSize(100)} value="100">100</option>
                                        </select></label>
                                    </div>
                                </div>
                            </div>
                            <div className="table-responsive table mt-2" id="dataTable" role="grid" aria-describedby="dataTable_info">
                                <Table className="table my-0" id="dataTable">
                                    <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Product Name</th>
                                        <th>Unit Of Measure</th>
                                        <th>Alternative Unit Of Measure</th>
                                        <th>Conversion Factor</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {this.state.productsUnits.map(product =>
                                        <tr className={"table-responsive-sm bordered hover"}  key={product.id}>
                                            <td>{product.id}</td>
                                            <td>{product.productName}</td>
                                            <td>{product.unitOfMeasure}</td>
                                            <td>{product.alternativeUnitOfMeasure}</td>
                                            <td>{product.conversionFactor}</td>
                                        </tr>)}
                                    </tbody>
                                    <tfoot>
                                    <tr>
                                        <td><strong>#</strong></td>
                                        <td><strong>Product Name</strong></td>
                                        <td><strong>Unit Of Measure</strong></td>
                                        <td><strong>Alternative Unit Of Measure</strong></td>
                                        <td><strong>Conversion Factor</strong></td>
                                    </tr>
                                    </tfoot>
                                </Table>
                            </div>
                            <div className="row">
                                <div className="col-md-6 align-self-center">
                                    <p id="dataTable_info" className="dataTables_info" role="status"
                                       aria-live="polite">Showing {this.state.productsUnits.length} to 20 of {this.state.productsUnits.length}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ProductsUnits;