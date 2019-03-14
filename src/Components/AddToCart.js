import React, { Component } from 'react';
import "../css/AddToCart.css"

class AddToCart extends Component {
  
  render() {
    debugger;
    let addToCart=""
    if (localStorage.getItem("AddToCart")){
        var cart =JSON.parse(localStorage.getItem("AddToCart"));
        addToCart = cart.map((cart,i)=>{
        return (
                <div className ="col-sm-3 cartElement centre">
                    <div>
                        <img className ="box" src={cart[0].url}/>
                    </div>
                    <div className="centre">
                        <h2>{cart[0].name}</h2>
                        <h3>Rs.{cart[0].price}</h3>
                    </div>
                </div> 
            );
        });
    }
        
        return (
            <div className="row margin">{addToCart}</div>
        );
    
    }
}


export default AddToCart;
