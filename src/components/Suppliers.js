import React from "react";
import axios from "axios";
import {Button, Table} from 'react-bootstrap'

const api = axios.create({
    baseURL: `http://localhost:8080/api/v1/suppliers`
})

class Suppliers extends React.Component {
    state = {suppliers: []}
    pageNumber = 0;
    sizeNumber = 20;

    constructor() {
        super();
        this.getSuppliers()
    }

    setupPage = (pageParam) => {
        this.pageNumber = pageParam
        this.getSuppliers()
    }

    setupSize = (sizeParam) => {
        this.sizeNumber = sizeParam
        this.getSuppliers()
    }

    getSuppliers = async () => {
        try {
            let data = await api.get('/',{
                // headers: {
                //     Authorization: 'Bearer ' + localStorage.getItem('token')
                // },
                params: {
                    page: this.pageNumber,
                    size: this.sizeNumber
                }}).then(({data}) => data);
            this.setState({suppliers: data})
        } catch (err) {

            console.log(err)
        }
    }

    deleteSuppliers = async (id) => {
        await api.delete(`/${id}`)
        this.getSuppliers()
    }

    updateSuppliers = async () => {
        await api.put(`/`)
        this.getSuppliers()
    }

    exportToPdf = async () => {
        await  api.get(`/export/pdf`, {
            headers: {
                accept: 'application/pdf'
            }
        })
    }

    exportToExcel = async () => {
        await  api.get(`/export/excel`, {
            headers: {
                accept: 'application/vnd.ms-excel'
            }
        })
    }

    render() {
        return (
                <div className="container-fluid m-2">
                    <h3 className="text-dark mb-4">Suppliers</h3>
                    <div className="card shadow">
                        <div className="card-header py-3">
                            <p className="text-primary m-0 font-weight-bold">Suppliers Info</p>
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
                                <div className="col-md-6">
                                    <div className="text-md-right dataTables_filter" id="dataTable_filter"><label>
                                        <Button className={"mr-sm-2"}>Add new supplier</Button>
                                        <Button className={"mr-sm-2"} onClick={() => this.exportToPdf()}>Export to PDF</Button>
                                        <Button onClick={() => this.exportToExcel()}>Export to Excel</Button>
                                    </label>
                                    </div>
                                </div>
                            </div>
                            <div className="table-responsive table mt-2" id="dataTable" role="grid"
                                 aria-describedby="dataTable_info">
                                <Table className="table my-0" id="dataTable">
                                    <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Name</th>
                                        <th>Type Of Transport</th>
                                        <th>Activity Status</th>
                                        <th>Options</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {this.state.suppliers.map(supplier =>
                                        <tr className={"table-responsive-sm bordered hover"}  key={supplier.id}>
                                            <td>{supplier.supplierId}</td>
                                            <td>{supplier.supplierName}</td>
                                            <td>{supplier.typeOfTransport}</td>
                                            <td>{supplier.activityStatus}</td>
                                            <td>
                                                <Button className={"mr-sm-2"} onClick={() => this.deleteSuppliers(supplier.id)}>Delete</Button>
                                                <Button className={"mr-sm-2"} onClick={() => this.updateSuppliers()}>Edit</Button>
                                            </td>
                                        </tr>)}
                                    </tbody>
                                    <tfoot>
                                    <tr>
                                        <td><strong>#</strong></td>
                                        <td><strong>Name</strong></td>
                                        <td><strong>Type Of Transport</strong></td>
                                        <td><strong>Activity Status</strong></td>
                                    </tr>
                                    </tfoot>
                                </Table>
                            </div>
                            <div className="row">
                                <div className="col-md-6 align-self-center">
                                    <p id="dataTable_info" className="dataTables_info" role="status"
                                       aria-live="polite">Showing {this.state.suppliers.length} to 20 of {this.state.suppliers.length}</p>
                                </div>
                                <div className="col-md-6">
                                    <nav
                                        className="d-lg-flex justify-content-lg-end dataTables_paginate paging_simple_numbers">
                                        <ul className="pagination">
                                            <li className="page-item disabled"><a className="page-link" href="#" aria-label="Previous"><span aria-hidden="true">«</span></a></li>
                                            <li className="page-item"><a className="page-link" onClick={() => this.setupPage(0)}>1</a></li>
                                            <li className="page-item"><a className="page-link" onClick={() => this.setupPage(1)}>2</a></li>
                                            <li className="page-item"><a className="page-link" onClick={() => this.setupPage(2)}>3</a></li>
                                            <li className="page-item"><a className="page-link" href="#" aria-label="Next"><span aria-hidden="true">»</span></a></li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        )
    }
}

export default Suppliers;