import {createStore,combineReducers, applyMiddleware} from "redux";
import elementListReducer from "./Reducers/ElementListReducer";
import {createLogger} from "redux-logger";
import thunk from "redux-thunk";
import {reducer as toastrReducer} from 'react-redux-toastr'


export default createStore(combineReducers({elementListReducer: elementListReducer,toastr: toastrReducer}),{},applyMiddleware(createLogger(),thunk))