import {Dispatch} from "react-redux";

import {garageDoorService} from "../services/garageDoorService";

export enum garageDoorActionTypes {
    GARAGE_DOORS_LOAD = "GARAGE_DOORS_LOAD"
}

export const loadGarageDoors = () => async (dispatch: Dispatch<any>) => {
    const res = await garageDoorService.getAllGarageDoors();
    const garageDoors = res.data;

    dispatch({
        type: garageDoorActionTypes.GARAGE_DOORS_LOAD,
        payload: { garageDoors }
    });
};

export const triggerOpener = (garageDoorId: string) => async (dispatch: Dispatch<any>) => {
    await garageDoorService.triggerOpener(garageDoorId);
};