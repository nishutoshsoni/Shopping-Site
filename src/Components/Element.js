import React, { Component } from 'react';
import "../css/Element.css";
import {browserHistory} from "react-router";
import Details from '../Containers/Details';

class Element extends Component {

  handleClick=()=>{
    browserHistory.push("/details/" + this.props.load.id);
  }
  
  render() {
    return (
      <div id="divElement" onClick={this.handleClick} className ="col-sm-3">
          <div>
            <img className ="box" src={this.props.load.url}/>
          </div>
          <div className="centre">
            <h3>{this.props.load.name}</h3>
            <h4>Rs.{this.props.load.price}</h4>
          </div>
      </div>
    );
  }
}


export default Element;



