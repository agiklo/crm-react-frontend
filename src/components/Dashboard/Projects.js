import React from "react"

class Projects extends React.Component{

    render(){
        return(
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h6 className="text-primary font-weight-bold m-0">Projects</h6>
                </div>
                <div className="card-body">
                    <h4 className="small font-weight-bold">Server migration<span className="float-right">20%</span></h4>
                    <div className="progress mb-4">
                        <div className="progress-bar bg-danger" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100" style={{width: "20%"}}><span className="sr-only">20%</span></div>
                    </div>
                    <h4 className="small font-weight-bold">Sales tracking<span className="float-right">40%</span></h4>
                    <div className="progress mb-4">
                        <div className="progress-bar bg-warning" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style={{width: "40%"}}><span className="sr-only">40%</span></div>
                    </div>
                    <h4 className="small font-weight-bold">Customer Database<span className="float-right">60%</span></h4>
                    <div className="progress mb-4">
                        <div className="progress-bar bg-primary" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{width: "60%"}}><span className="sr-only">60%</span></div>
                    </div>
                    <h4 className="small font-weight-bold">Payout Details<span className="float-right">80%</span></h4>
                    <div className="progress mb-4">
                        <div className="progress-bar bg-info" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style={{width: "80%"}}><span className="sr-only">80%</span></div>
                    </div>
                    <h4 className="small font-weight-bold">Account setup<span className="float-right">Complete!</span></h4>
                    <div className="progress mb-4">
                        <div className="progress-bar bg-success" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style={{width: "100%"}}><span className="sr-only">100%</span></div>
                    </div>
                </div>
            </div>
            )
        }
    }

export default Projects;