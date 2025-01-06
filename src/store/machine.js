import {
    GET_MACHINES_SUCCESS,
    GET_MACHINES_FAIL,
    LOGOUT
} from "../actions/types";

const initialState = {
    machinesList: null
};

export default function (state = initialState, action) {
const {type, payload} = action;

    switch (type) {
        case GET_MACHINES_SUCCESS:
            return {
                ...state,
                machinesList: payload.machinesList
            };
        case GET_MACHINES_FAIL:
            return {
                ...state,
                machinesList: state.machinesList ? state.machinesList : null
            };
        case LOGOUT:
            return {
                ...state,
                machinesList: null,
            };
        default:
            return state;
    }
}