import {initialState, StateAuthSession, StateGarageDoorList} from "../store/initialState";
import { garageDoorActionTypes } from "../actions/garageDoorActions";

export function garageDoorListReducer(state = initialState.garageDoorList, action: {type: string, payload: any}): StateGarageDoorList {
    switch (action.type) {
        case garageDoorActionTypes.GARAGE_DOORS_LOAD: {
            console.log(action);
            return {
                garageDoors: action.payload.garageDoors
            }
        }
        default: {
            return state;
        }
    }
}