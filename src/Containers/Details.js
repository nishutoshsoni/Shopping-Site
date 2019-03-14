import React, { Component } from 'react';
import {connect} from "react-redux";
import {ItemFilteredById } from '../Actions/ElementListAction';
import AddToCart from "../Components/AddToCart";
import {browserHistory} from "react-router";
import "babel-polyfill";
import "../css/Details.css"
import {toastr} from 'react-redux-toastr'


class Details extends Component {
  componentDidMount(){
    var state = this.props.load.initialState;
    var element=[];
    if (state!==undefined){
      element =state.map((state,i)=>{
        return state.id;
      })
    }
    
    if(this.props.params.id===undefined||(element.indexOf(parseInt(this.props.params.id))=== -1)){
      toastr.warning('Select an Item', 'Please select an item to view on the Details Page');
      browserHistory.push("/");
    }
    else{
      var id = this.props.params.id;
      this.props.loadDataById(id);
    }
  }

  handleAddToCart=()=>{
    var data = this.props.load.initialState;
    if (JSON.parse(localStorage.getItem("AddToCart"))== undefined){
        var cart =[];
        cart.push(data);
        localStorage.setItem("AddToCart",JSON.stringify(cart));
      }
    else 
      {
        var cart = JSON.parse(localStorage.getItem("AddToCart"));
        var element=cart.filter((cart,i) => {
          return cart[0].id === data[0].id;
        });
        if (element.length !== 0){
          toastr.info('Already Added', 'Item is already added in the cart');
        }
        else{
          cart.push(data);
          localStorage.setItem("AddToCart",JSON.stringify(cart));
          toastr.success('Added To Chart', 'Item  added to the cart');
        }
      }
  }
  render() {
      var  data = this.props.load.initialState;
      if (data=== undefined){
        return (
          <div>
            
          </div>
        )
      }
      else {
        return (
          <div className="centre" >
            <h1>Details</h1>
              <div>
                <div>
                  <img className ="box" src={this.props.load.initialState[0].url}/>
                </div>
                <h3>{this.props.load.initialState[0].name}</h3>
                <h4>Rs.{this.props.load.initialState[0].price}</h4>
              </div>
            <button onClick={this.handleAddToCart}>Add To Chart</button>
          </div>
    );
  }
  }
}

const mapStateToProps = (state) =>
{ 
  return{
    load: state.elementListReducer
  };
};

const mapDispatchToProps = (dispatch) =>
{ 
  return{
    loadDataById:(value)=>
    {
      dispatch(ItemFilteredById(value));
    }
  };
};
export default connect(mapStateToProps,mapDispatchToProps) (Details);


