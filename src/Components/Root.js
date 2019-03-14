import React, { Component } from 'react';
import "../css/Root.css";
import {Link} from "react-router"
import ReduxToastr from 'react-redux-toastr';

class Root extends Component {
  render() {
    return (
     <div>
        <ReduxToastr
            timeOut={4000}
            newestOnTop={false}
            preventDuplicates
            position="top-center"
            transitionIn="fadeIn"
            transitionOut="fadeOut"
            progressBar/>
        <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
            <div className="container">
                <a className="navbar-brand" href="/">Shopping Website</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to={"/"}>Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to={"/details/:id"}>Details</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to={"/cart"}>Cart</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        <div className="element">
        {this.props.children}
        </div>
     </div>

    );
  }
}

export default Root;
