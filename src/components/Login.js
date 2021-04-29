import React from "react";

class Login extends React.Component {
    render() {
        return (
            <body className="bg-gradient-primary">
            <div className="container">
                <div className="row justify-content-center m-5">
                    <div className="col-md-9 col-lg-12 col-xl-10 m-5">
                        <div className="card shadow-lg o-hidden border-0 my-5">
                            <div className="card-body p-0">
                                <div className="row">
                                    <div className="col-lg-6 d-none d-lg-flex">
                                        <div className="flex-grow-1 bg-login-image"
                                             style={{backgroundImage:"url(https://images.unsplash.com/photo-1591696205602-2f950c417cb9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80)"}} />
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="p-5">
                                            <div className="text-center">
                                                <h4 className="text-dark mb-4">Login</h4>
                                            </div>
                                            <form className="user">
                                                <div className="form-group"><input
                                                    className="form-control form-control-user" type="email"
                                                    id="exampleInputEmail" aria-describedby="emailHelp"
                                                    placeholder="Enter Email Address..." name="email"/></div>
                                                <div className="form-group">
                                                    <input className="form-control form-control-user" type="password"
                                                    id="exampleInputPassword" placeholder="Password" name="password"/>
                                                </div>
                                                <div className="form-group">
                                                    <div className="custom-control custom-checkbox small">
                                                        <div className="form-check">
                                                            <input className="form-check-input custom-control-input" type="checkbox" id="formCheck-1"/>
                                                                <label className="form-check-label custom-control-label" htmlFor="formCheck-1">Remember Me</label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <button className="btn btn-primary btn-block text-white btn-user" type="submit">Login</button>
                                                <div>
                                                    <br/>
                                                    <br/>
                                                    <p className="text-secondary mx-auto">
                                                        If you have problems logging into your account, please contact your administrator.
                                                    </p>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </body>
        );
    }
}
export default Login;