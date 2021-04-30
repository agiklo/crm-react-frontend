import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import Login from "./Login";
import NavBar from './NavBar'
import Products from "./Products";
import Footer from "./Footer";
import ProductsUnits from "./ProductsUnits";

class App extends React.Component {

    render() {
        return (
        <Router>
                <div className={"App"}>
                    <div className={"content"}>
                        <NavBar/>
                        <Switch>
                            <Route exact path={"/login"}>
                                <Login/>
                            </Route>
                            <Route path={"/products"}>
                                <Products/>
                            </Route>
                            <Route path={"/products-units"}>
                                <ProductsUnits/>
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