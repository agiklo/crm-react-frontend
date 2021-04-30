import React from "react";
import axios from "axios";
import './Employees.css'

const api = axios.create({
    baseURL: `http://localhost:8080/api/v1/employees`
})

class Employees extends React.Component {
    state = {employees: []}

    constructor() {
        super();
        this.getEmployees()
    }

    getEmployees = async () => {
        try {
            let data = await api.get('').then(({data}) => data);
            this.setState({employees: data})
        } catch (err) {

            console.log(err)
        }
    }

    render() {
        return (
            <div className="container my-5">
                <div className="row">
                    {this.state.employees.map(employee =>
                    <div className="col-md-3" key={employee.id}>
                            <div className={"contact-box center-version"}>
                                <a href="#profile.html">
                                    <img alt="image" className="img-circle"
                                         src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"/>
                                    <h3 className="m-b-xs"><strong>{employee.firstName} {employee.lastName}</strong></h3>
                                    <div className="font-bold"/>
                                    <address className="m-t-md">
                                        <strong>{employee.role}</strong><br/>
                                        {employee.departmentName}<br/>
                                    </address>

                                </a>
                                <div className="contact-box-footer">
                                    <div className="m-t-xs btn-group">
                                        <a className="btn btn-xs btn-white">Phone
                                        <span></span>
                                        </a>
                                        <a className="btn btn-xs btn-white">Email</a>
                                        <a className="btn btn-xs btn-white">Edit</a>
                                    </div>
                                </div>
                            </div>
                    </div>)}
                </div>
            </div>
        )
    }
}

export default Employees;