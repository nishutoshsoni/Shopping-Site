import React, { Component } from 'react';
import '../css/ElementList.css';
import {connect} from "react-redux";
import { loadDetails,listOfItemsHavingPriceLess } from '../Actions/ElementListAction';
import Element from "../Components/Element";

class ElementList extends Component {
  componentWillMount () {
    this.props.loadData();
  }

  handleCheckbox=()=>
  {
    var lessThan = this.refs.below.checked;
    var greaterThan = this.refs.above.checked;
    if (lessThan && greaterThan){
      this.props.loadData();
    }
    else {
      if (lessThan || greaterThan){
        if(lessThan){
          var data =this.props.load.initialState;
          let element="";
          if(data){
            element=data.filter((data,i) => {
              return data.price <= 1000;
          });
          this.props.loadLessData(element);
            }
          }
          if(greaterThan){
            var data =this.props.load.initialState;
            let element="";
            if(data){
              element=data.filter((data,i) => {
                return data.price >= 1001;
            });
            this.props.loadLessData(element);
              }
            }
      }
      else{
        this.props.loadData();
      }
    }
  }
  render() {
        var data =this.props.load.initialState;
        let element ="";
        if(data){
          element =data.map((data,i) => {
          return  <Element load={data}/>;
          });
        }

        return (
            <div className = "container">
              <div className="border-bottom">
                <h3>Price</h3>
                <div>
                  <input type="checkbox"  value = "below" ref="below" onChange={this.handleCheckbox.bind(this)}/> Rs. 1 to Rs.1000
                </div>
                <div>
                  <input type="checkbox" value ="above" ref="above" onChange={this.handleCheckbox.bind(this)}/> Rs. 1001 and Above
                </div>
              </div>
              {(this.props.load.initialState=== undefined)?"":<div className="row border-left">{element}</div>}  
            </div>
    );
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
    loadData:()=>
    {
      dispatch(loadDetails());
    },
    loadLessData:(value)=>
    {
      dispatch(listOfItemsHavingPriceLess(value));
    }
  };
};


export default connect(mapStateToProps,mapDispatchToProps) (ElementList);
