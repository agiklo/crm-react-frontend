import React from "react";
import axios from "axios";
import "./Employees.css"
import {Button} from "react-bootstrap";

const api = axios.create({
    baseURL: `http://localhost:8080/api/v1/customers`
})

class Customers extends React.Component {
    state = {customers: []}
    pageNumber = 0;
    sizeNumber = 20;

    constructor() {
        super();
        this.getCustomers()
    }

    setupPage = (pageParam) => {
        this.pageNumber = pageParam
        this.getCustomers()
    }

    setupSize = (sizeParam) => {
        this.sizeNumber = sizeParam
        this.getCustomers()
    }

    getCustomers = async () => {
        try {
            let data = await api.get('',{
                // headers: {
                //     Authorization: 'Bearer ' + localStorage.getItem('token')
                // },
                params: {
                    page: this.pageNumber,
                    size: this.sizeNumber
                }}).then(({data}) => data);
            this.setState({customers: data})
        } catch (err) {
            console.log(err)
        }
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
            <div className={"container"}>
                <div className="container-fluid m-2">
                    <h3 className="text-dark mb-4">Customers</h3>
                    <div className="card shadow">
                        <div className="card-header py-3">
                            <p className="text-primary m-0 font-weight-bold">Customers Info</p>
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
                                        <Button className={"mr-sm-2"}>Add new Customer</Button>
                                        <Button className={"mr-sm-2"} onClick={() => this.exportToPdf()}>Export to PDF</Button>
                                        <Button onClick={() => this.exportToExcel()}>Export to Excel</Button>
                                    </label>
                                    </div>
                                </div>
                            </div>
                            <div className="table-responsive table mt-2" id="dataTable" role="grid"
                                 aria-describedby="dataTable_info">
                                <div className="container my-5">
                                    <div className="row">
                                        {this.state.customers.map(customer =>
                                            <div className="col-md-3" key={customer.id}>
                                                <div className={"contact-box center-version"}>
                                                    <a href="#profile.html">
                                                        <img alt="image" className="img-circle"
                                                             src="https://images.unsplash.com/photo-1558244661-d248897f7bc4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=375&q=80"/>
                                                        <h3 className="m-b-xs"><strong>{customer.firstname} {customer.lastname}</strong></h3>
                                                        <div className="font-bold"/>
                                                        <address className="m-t-md">
                                                            <strong>{customer.city}</strong><br/>
                                                            {customer.zipCode}<br/>
                                                        </address>

                                                    </a>
                                                    <div className="contact-box-footer">
                                                        <div className="m-t-xs btn-group">
                                                            <a className="btn btn-xs btn-white">Edit</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>)}
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6 align-self-center">
                                    <p id="dataTable_info" className="dataTables_info" role="status"
                                       aria-live="polite">Showing {this.state.customers.length} to 20 of {this.state.customers.length}</p>
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
            </div>
        )
    }
}

export default Customers;