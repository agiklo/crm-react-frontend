import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import Login from "./Login";
import Products from "./Products";
import Footer from "./Elements/Footer";
import ProductsUnits from "./ProductsUnits";
import Employees from "./Employees/Employees"
import NavBar from "./Elements/NavBar";
import Dashboard from './Dashboard/Dashboard'
import Invoices from "./Invoices";
import Suppliers from "./Suppliers";

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
                        </Switch>
                        <Footer/>
                    </div>
                </div>
            </Router>
        )
    }
}

export default App;