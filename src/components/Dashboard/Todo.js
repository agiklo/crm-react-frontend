import React from "react"

class Todo extends React.Component{

    render(){
        return(
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h6 className="text-primary font-weight-bold m-0">Todo List</h6>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        <div className="row align-items-center no-gutters">
                            <div className="col mr-2">
                                <h6 className="mb-0"><strong>Lunch meeting</strong></h6><span className="text-xs">10:30 AM</span>
                            </div>
                            <div className="col-auto">
                                <div className="custom-control custom-checkbox"><input type="checkbox" className="custom-control-input" id="formCheck-1" /><label className="custom-control-label" for="formCheck-1"></label></div>
                            </div>
                        </div>
                    </li>
                    <li className="list-group-item">
                        <div className="row align-items-center no-gutters">
                            <div className="col mr-2">
                                <h6 className="mb-0"><strong>Lunch meeting</strong></h6><span className="text-xs">11:30 AM</span>
                            </div>
                            <div className="col-auto">
                                <div className="custom-control custom-checkbox"><input type="checkbox" className="custom-control-input" id="formCheck-2" /><label className="custom-control-label" for="formCheck-2"></label></div>
                            </div>
                        </div>
                    </li>
                    <li className="list-group-item">
                        <div className="row align-items-center no-gutters">
                            <div className="col mr-2">
                                <h6 className="mb-0"><strong>Lunch meeting</strong></h6><span className="text-xs">12:30 AM</span>
                            </div>
                            <div className="col-auto">
                                <div className="custom-control custom-checkbox"><input type="checkbox" className="custom-control-input" id="formCheck-3" /><label className="custom-control-label" for="formCheck-3"></label></div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>)}}
            export default Todo