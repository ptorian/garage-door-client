import { combineReducers } from "redux";
import { reducer as formReducer } from 'redux-form'
import { authSessionReducer } from "./authSessionReducer"
import {garageDoorListReducer} from "./garageDoorListReducer";

export const rootReducer = combineReducers({
    form: formReducer,
    authSession: authSessionReducer,
    garageDoorList: garageDoorListReducer
});