import axios from "axios";

export function listOfItems(data){
    debugger
    return{
        type:"RETRIEVE_DATA",
        payload:data
    };
}

export function listOfItemsHavingPriceLess(data){
    return{
        type:"RETRIEVE_DATA_LESS",
        payload:data
    };
}

export function ItemFilteredById(data){
    return{

        type:"RETRIEVE_DATA_ID",
        payload:data
    };
}

export function loadDetails(){
    return (dispatch)=> { 
        debugger
        return axios.get("http://localhost:8080/items").then((response) => {
            var data  = response.data;
            dispatch(
                listOfItems(data)
            );
      })
    }
}