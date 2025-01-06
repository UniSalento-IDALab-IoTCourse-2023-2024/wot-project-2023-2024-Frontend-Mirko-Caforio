import {AuthHeader} from "./AuthUtils";
import {
    apiMachineFindAllMachinesGet,
    apiMachineFindMachineByFiltersGet,
    apiMachineInsertMachinePost, apiMachineMaintenanceMachinePut,
    apiMachineStartMachinePut,
    apiMachineStopMachinePut,
    apiMachineUpdateMachinePut,
    apiMachineWorkMachinePut
} from "../../apiGateway-js-sdk/apiClient";

export const getAllMachines = () => {
    const params = AuthHeader();
    const body = {};
    const additionalParams = {};

    return apiMachineFindAllMachinesGet(params, body, additionalParams)
        .then(function(result){
            return Promise.resolve(result.data);
        }).catch( function(result){
            return Promise.reject(result);
        });
}

export const getMachinesByFilters = (filters) => {
    let params = AuthHeader();

    if(filters) {
        params = {
            ...params,
            addressCountry: filters.addressCountry,
            addressLocality: filters.addressLocality,
            addressRegion: filters.addressRegion,
            brandName: filters.brandName,
            manufacturerName: filters.manufacturerName,
            manufacturingMachineType: filters.manufacturingMachineType,
            name: filters.name,
            status: filters.status,
        }
    }

    const body = {};
    const additionalParams = {};

    return apiMachineFindMachineByFiltersGet(params, body, additionalParams)
        .then(function(result){
            return Promise.resolve(result.data);
        }).catch( function(result){
            return Promise.reject(result);
        });
}

export const insertMachine = (data) => {
    const params = AuthHeader();
    const body = {
        addressCountry: data.addressCountry,
        addressLocality: data.addressLocality,
        addressRegion: data.addressRegion,
        district: data.district,
        streetAddress: data.streetAddress,
        streetNumber: data.streetNumber,
        alternateName: data.alternateName,
        brandName: data.brandName,
        description: data.description,
        manufacturerName: data.manufacturerName,
        manufacturingMachineType: data.manufacturingMachineType,
        name: data.name,
        processDescription: data.processDescription,
        standardOperations: data.standardOperations,
        type: "ManufacturingMachineModel",
        version: data.version,
        status: "INACTIVE",
    }

    const additionalParams = {};

    return apiMachineInsertMachinePost(params, body, additionalParams)
        .then(function(result){
            return Promise.resolve(result.data);
        }).catch( function(result){
            return Promise.reject(result);
        });
}

export const updateMachine = (data) => {
    const params = AuthHeader();
    const body = {
        id: data.id,
        addressCountry: data.addressCountry,
        addressLocality: data.addressLocality,
        addressRegion: data.addressRegion,
        district: data.district,
        streetAddress: data.streetAddress,
        streetNumber: data.streetNumber,
        alternateName: data.alternateName,
        brandName: data.brandName,
        description: data.description,
        manufacturerName: data.manufacturerName,
        manufacturingMachineType: data.manufacturingMachineType,
        name: data.name,
        processDescription: data.processDescription,
        standardOperations: data.standardOperations,
        type: "ManufacturingMachineModel",
        version: data.version,
        status: data.status,
    }

    const additionalParams = {};

    return apiMachineUpdateMachinePut(params, body, additionalParams)
        .then(function(result){
            return Promise.resolve(result.data);
        }).catch( function(result){
            return Promise.reject(result);
        });
}

export const startMachine = (idMachine) => {
    let params = AuthHeader();

    params = {
        ...params,
        idMachine: idMachine
    }

    const body = {};
    const additionalParams = {};

    return apiMachineStartMachinePut(params, body, additionalParams)
        .then(function(result){
            return Promise.resolve(result.data);
        }).catch( function(result){
            return Promise.reject(result);
        });
}

export const stopMachine = (idMachine) => {
    let params = AuthHeader();

    params = {
        ...params,
        idMachine: idMachine
    }

    const body = {};
    const additionalParams = {};

    return apiMachineStopMachinePut(params, body, additionalParams)
        .then(function(result){
            return Promise.resolve(result.data);
        }).catch( function(result){
            return Promise.reject(result);
        });
}

export const workMachine = (idMachine) => {
    let params = AuthHeader();

    params = {
        ...params,
        idMachine: idMachine
    }

    const body = {};
    const additionalParams = {};

    return apiMachineWorkMachinePut(params, body, additionalParams)
        .then(function(result){
            return Promise.resolve(result.data);
        }).catch( function(result){
            return Promise.reject(result);
        });
}

export const maintenanceMachine = (idMachine) => {
    let params = AuthHeader();

    params = {
        ...params,
        idMachine: idMachine
    }

    const body = {};
    const additionalParams = {};

    return apiMachineMaintenanceMachinePut(params, body, additionalParams)
        .then(function(result){
            return Promise.resolve(result.data);
        }).catch( function(result){
            return Promise.reject(result);
        });
}

export default {
    getAllMachines,
    getMachinesByFilters,
    insertMachine,
    updateMachine,
    startMachine,
    stopMachine,
    workMachine,
    maintenanceMachine
}