import React from "react";
import axios from "axios";
import {Table} from 'react-bootstrap'

class Products extends React.Component{
    state = {products: []}
    fetchData = () => {
        axios.get("http://localhost:8080/api/v1/products", {
            // headers: {
            //     Authorization: ''
            // }
        }).then(result => {
            this.setState({products: result.data.value})
            console.log(this.state.products.values())
        })
    }

    render() {
        return(
        <Table table-responsive-sm bordered hover>
            <caption>List of Products</caption>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Category</th>
                    <th>Selling Price</th>
                    <th>Purchase Price</th>
                    <th>Tax Rate</th>
                    <th>Options</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
            </tbody>
        </Table>
        )
    }
}

export default Products;