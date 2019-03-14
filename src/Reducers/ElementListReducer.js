const  elementListReducer = (initialState ={},action) =>{
    switch (action.type){
        case "RETRIEVE_DATA_LESS": 
            var  data = action.payload;
            initialState = {
                ...initialState,
                initialState:data,
            }
            break;
        case "RETRIEVE_DATA_ID": 
            var data = initialState;
            var items = data.initialState;
            let element=items.filter((items,i) => {
                return items.id == action.payload;
            });
            initialState = {
                ...initialState,
                initialState:element,
            }
            break;
        case "RETRIEVE_DATA": 
            var  data = action.payload;
            initialState = {
                ...initialState,
                initialState:data,
            }
            break;
    }
    return initialState;
}; 

export default elementListReducer;

