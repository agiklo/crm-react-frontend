import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Login from "./Login";

import NavBar from './NavBar'
import Products from "./Products";

class App extends React.Component {
    render() {
        return (
            <Router>
                <div className={"App"}>
                    <NavBar/>
                    <div className={"content"}>
                        <Switch>
                            <Route exact path={"/"}>
                                <Login/>
                            </Route>
                            <Route path={"/products"}>
                                <Products/>
                            </Route>
                        </Switch>
                    </div>
                </div>
            </Router>
        )
    }
}

export default App;