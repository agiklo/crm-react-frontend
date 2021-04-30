import React from "react";

import Projects from './Projects'
import Todo from './Todo'
import Headers from './Headers'

class Dashboard extends React.Component{
    render(){
        return (
<div className="container my-5">
    <div className="d-sm-flex justify-content-between align-items-center mb-4">
        <h3 className="text-dark mb-0">Dashboard</h3>
    </div>
    <Headers />
    <div className="row">
        <div className="col-lg-6 mb-4">
            <Projects className="card shadow mb-4" />
        </div>
        <div className="col">
            <Todo className="card shadow mb-4"/>
        </div>
    </div>
</div>)
}}
export default Dashboard;