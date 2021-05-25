import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import Login from "./Login";
import Products from "./Products/Products";
import Footer from "./Elements/Footer";
import ProductsUnits from "./Products/ProductsUnits";
import Employees from "./Employees/Employees"
import NavBar from "./Elements/NavBar";
import Dashboard from './Dashboard/Dashboard'
import Invoices from "./Invoices";
import Suppliers from "./Suppliers";
import Posts from "./Forum/Posts";
import Absenteeisms from "./Absenteeisms";
import Departments from "./Departments";
import Customers from "./Employees/Customers";
import NewProductForm from "./Products/NewProductForm";
import NewCustomerForm from "./Employees/NewCustomerForm";

class App extends React.Component {

    render() {
        return (
        <Router>
                <div className={"App"}>
                    <div className={"content"}>
                        <NavBar/>
                        <Switch>
                            <Route exact path={"/"}>
                                <Dashboard/>
                            </Route>
                            <Route exact path={"/login"}>
                                <Login/>
                            </Route>
                            <Route exact path={"/products/new-product"}>
                                <NewProductForm/>
                            </Route>
                            <Route path={"/products"}>
                                <Products/>
                            </Route>
                            <Route path={"/products-units"}>
                                <ProductsUnits/>
                            </Route>
                            <Route path={"/employees"}>
                                <Employees/>
                            </Route>
                            <Route path={"/invoices"}>
                                <Invoices/>
                            </Route>
                            <Route path={"/suppliers"}>
                                <Suppliers/>
                            </Route>
                            <Route path={"/forum"}>
                                <Posts/>
                            </Route>
                            <Route path={"/absenteeisms"}>
                                <Absenteeisms/>
                            </Route>
                            <Route path={"/departments"}>
                                <Departments/>
                            </Route>
                            <Route exact path={"/customers/new-customer"}>
                                <NewCustomerForm/>
                            </Route>
                            <Route path={"/customers"}>
                                <Customers/>
                            </Route>
                        </Switch>
                        <Footer/>
                    </div>
                </div>
            </Router>
        )
    }
}

export default App;