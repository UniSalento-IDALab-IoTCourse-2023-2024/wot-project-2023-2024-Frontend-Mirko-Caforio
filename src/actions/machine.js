import {
    GET_MACHINES_SUCCESS,
    GET_MACHINES_FAIL,
    SET_MESSAGE
} from "./types";

import {MSG_SUCCESS, MSG_WARNING} from "../config";
import {onError} from "./expiration";
import MachineService from "../services/MachineService";

export const getAllMachines = () => (dispatch) => {
    return MachineService.getAllMachines().then(
        (data) => {
            dispatch({
                type: GET_MACHINES_SUCCESS,
                payload: {machinesList: data},
            });

            return Promise.resolve(data);
        },
        (error) => {
            const message =
                (error.data && error.data.message) ||
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString();

            dispatch({
                type: GET_MACHINES_FAIL,
            });

            dispatch(onError(message, "machine"));

            return Promise.reject(message);
        }
    );
}

export const getMachinesByFilters = (filters) => (dispatch) => {
    return MachineService.getMachinesByFilters(filters).then(
        (data) => {
            dispatch({
                type: GET_MACHINES_SUCCESS,
                payload: {machinesList: data},
            });

            return Promise.resolve(data);
        },
        (error) => {
            const message =
                (error.data && error.data.message) ||
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString();

            dispatch({
                type: GET_MACHINES_FAIL,
            });

            dispatch(onError(message, "machine"));

            return Promise.reject(message);
        }
    );
}

export const insertMachine = (data) => (dispatch) => {
    return MachineService.insertMachine(data).then(
        (data) => {
            dispatch({
                type: SET_MESSAGE,
                payload: {
                    message: "Machine inserted successfully",
                    type: MSG_SUCCESS
                },
            });

            return Promise.resolve(data);
        },
        (error) => {
            const message =
                (error.data && error.data.message) ||
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString();

            dispatch(onError(message, "machine"));

            return Promise.reject(message);
        }
    );
}

export const updateMachine = (data) => (dispatch) => {
    return MachineService.updateMachine(data).then(
        (data) => {
            dispatch({
                type: SET_MESSAGE,
                payload: {
                    message: "Machine updated successfully",
                    type: MSG_SUCCESS
                },
            });

            dispatch(getAllMachines());

            return Promise.resolve(data);
        },
        (error) => {
            const message =
                (error.data && error.data.message) ||
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString();

            dispatch(onError(message, "machine"));

            return Promise.reject(message);
        }
    );
}

export const startMachine = (idMachine) => (dispatch) => {
    console.log("ID MACHINE ARRIVATO: " + idMachine)
    return MachineService.startMachine(idMachine).then(
        (data) => {
            dispatch({
                type: SET_MESSAGE,
                payload: {
                    message: "Machine started successfully",
                    type: MSG_SUCCESS
                },
            });

            dispatch(getAllMachines());

            return Promise.resolve(data);
        },
        (error) => {
            const message =
                (error.data && error.data.message) ||
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString();

            dispatch(onError(message, "machine"));

            return Promise.reject(message);
        }
    );
}

export const stopMachine = (idMachine) => (dispatch) => {
    return MachineService.stopMachine(idMachine).then(
        (data) => {
            dispatch({
                type: SET_MESSAGE,
                payload: {
                    message: "Machine stopped successfully",
                    type: MSG_WARNING
                },
            });

            dispatch(getAllMachines());

            return Promise.resolve(data);
        },
        (error) => {
            const message =
                (error.data && error.data.message) ||
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString();

            dispatch(onError(message, "machine"));

            return Promise.reject(message);
        }
    );
}

export const workingMachine = (idMachine) => (dispatch) => {
    return MachineService.workMachine(idMachine).then(
        (data) => {
            dispatch({
                type: SET_MESSAGE,
                payload: {
                    message: "Machine is working",
                    type: MSG_SUCCESS
                },
            });

            dispatch(getAllMachines());

            return Promise.resolve(data);
        },
        (error) => {
            const message =
                (error.data && error.data.message) ||
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString();

            dispatch(onError(message, "machine"));

            return Promise.reject(message);
        }
    );
}

export const maintenanceMachine = (idMachine) => (dispatch) => {
    return MachineService.maintenanceMachine(idMachine).then(
        (data) => {
            dispatch({
                type: SET_MESSAGE,
                payload: {
                    message: "Machine is in maintenance",
                    type: MSG_WARNING
                },
            });

            dispatch(getAllMachines());

            return Promise.resolve(data);
        },
        (error) => {
            const message =
                (error.data && error.data.message) ||
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString();

            dispatch(onError(message, "machine"));

            return Promise.reject(message);
        }
    );
}