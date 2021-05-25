import React, {Component} from "react";
import axios from "axios";
import {Button} from 'react-bootstrap'
import {withRouter} from "react-router";
import Customers from "./Customers";

class NewCustomerForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            firstname: '',
            lastname: '',
            pesel: '',
            zipCode: '',
            city: ''
        }
    }

    changeHandler = e => {
        this.setState({[e.target.name]: e.target.value})
    }

    submitHandler = e => {
        e.preventDefault()
        console.log(this.state)
        axios.post("http://localhost:8080/api/v1/customers", this.state)
            .then(reponse => {
                console.log(reponse)
            })
            .catch(error => {
                console.log(error)
            })
    }

    render() {
        const {firstname, lastname, pesel, zipCode, city} = this.state
        return (
            <div className={"container my-2"}>
                <div className="modal-content">
                    <form onSubmit={this.submitHandler}>
                        <div className="modal-header d-flex align-items-center bg-primary text-white">
                            <h6 className="modal-title mb-0" id="threadModalLabel">New Customer</h6>
                        </div>
                        <div className="modal-body">
                            <div className="form-group">
                                <label htmlFor="threadTitle">First name</label>
                                <input className="form-control" type={"text"}
                                       placeholder="Enter first name"
                                       name={"firstname"}
                                       value={firstname}
                                       onChange={this.changeHandler}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="threadTitle">Last name</label>
                                <input className="form-control" type={"text"}
                                       placeholder="Enter last name"
                                       name={"lastname"}
                                       value={lastname}
                                       onChange={this.changeHandler}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="threadTitle">Pesel</label>
                                <input className="form-control" type={"text"}
                                       placeholder="Enter pesel"
                                       name={"pesel"}
                                       value={pesel}
                                       onChange={this.changeHandler}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="threadTitle">Zip code</label>
                                <input className="form-control" type={"text"}
                                       placeholder="Enter zip code"
                                       name={"zipCode"}
                                       value={zipCode}
                                       onChange={this.changeHandler}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="threadTitle">City</label>
                                <input className="form-control" type={"text"}
                                       placeholder="Enter city"
                                       name={"city"}
                                       value={city}
                                       onChange={this.changeHandler}/>
                            </div>
                        </div>

                        <div className="modal-footer">
                            <Button href={"/customers"} type="button" className="btn btn-light">Cancel</Button>
                            <Button type="submit" className="btn btn-primary">Submit</Button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}
export default NewCustomerForm