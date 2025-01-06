import axios from 'axios';

const API_AUTH_BASE_URL = 'http://localhost:8081';
const API_ACQUISITION_BASE_URL = 'http://localhost:8085';
const API_MACHINE_BASE_URL = 'http://localhost:8084';
const API_NOTIFICATION_BASE_URL = 'http://localhost:8083';
const API_CQRS_BASE_URL = 'http://localhost:8082';

const apiAuthClient = axios.create({
    baseURL: API_AUTH_BASE_URL
});

const apiAcquisitionClient = axios.create({
    baseURL: API_ACQUISITION_BASE_URL
});

const apiMachineClient = axios.create({
    baseURL: API_MACHINE_BASE_URL
});

const apiNotificationClient = axios.create({
    baseURL: API_NOTIFICATION_BASE_URL
});

const apiCqrsClient = axios.create({
    baseURL: API_CQRS_BASE_URL
});

/********** API AUTH SERVICE**********/

export const apiAuthRegistrationPost = async (params, body, additionalParams) => {
    if(additionalParams === undefined) { additionalParams = {}; }

    apiGateway.core.utils.assertParametersDefined(params, ['body'], ['body']);

    let apiAuthRegistrationPostRequest = {
        verb: 'post'.toUpperCase(),
        path: apiAuthClient.getUri() + uritemplate('/api/registration').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
        headers: apiGateway.core.utils.parseParametersToObject(params, []),
        queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
        body: body
    };

    try {
        return await apiAuthClient.post(
            apiAuthRegistrationPostRequest.path,
            apiAuthRegistrationPostRequest.body,
            {
                headers: apiAuthRegistrationPostRequest.headers,
                params: apiAuthRegistrationPostRequest.queryParams,

            });
    } catch (error) {
        console.error('Error sending data:', error);
        throw error;
    }
}

export const apiAuthAuthenticatePost = async (params, body, additionalParams) => {
    if(additionalParams === undefined) { additionalParams = {}; }

    apiGateway.core.utils.assertParametersDefined(params, ['body'], ['body']);

    let apiAuthAuthenticatePostRequest = {
        verb: 'post'.toUpperCase(),
        path: apiAuthClient.getUri() + uritemplate('/api/authenticate').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
        headers: apiGateway.core.utils.parseParametersToObject(params, []),
        queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
        body: body
    };

    try {
        return await apiAuthClient.post(
            apiAuthAuthenticatePostRequest.path,
            apiAuthAuthenticatePostRequest.body,
            {
                headers: apiAuthAuthenticatePostRequest.headers,
                params: apiAuthAuthenticatePostRequest.queryParams,

            });
    } catch (error) {
        console.error('Error sending data:', error);
        throw error;
    }
}

export const apiAuthChangePasswordPost = async (params, body, additionalParams) => {
    if(additionalParams === undefined) { additionalParams = {}; }

    apiGateway.core.utils.assertParametersDefined(params, ['Authorization', 'body'], ['body']);

    let apiAuthChangePasswordPostRequest = {
        verb: 'post'.toUpperCase(),
        path: apiAuthClient.getUri() + uritemplate('/api/change/password').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
        headers: apiGateway.core.utils.parseParametersToObject(params, ['Authorization', ]),
        queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
        body: body
    }

    try {
        return await apiAuthClient.post(
            apiAuthChangePasswordPostRequest.path,
            apiAuthChangePasswordPostRequest.body,
            {
                headers: apiAuthChangePasswordPostRequest.headers,
                params: apiAuthChangePasswordPostRequest.queryParams,

            });
    } catch (error) {
        console.error('Error sending data:', error);
        throw error;
    }
}

export const apiAuthRecoveryRequestGet = async (params, body, additionalParams) => {
    if(additionalParams === undefined) { additionalParams = {}; }

    apiGateway.core.utils.assertParametersDefined(params, ['email'], ['body']);

    let apiAuthRecoveryRequestGetRequest = {
        verb: 'get'.toUpperCase(),
        path: apiAuthClient.getUri() + uritemplate('/api/recover').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
        headers: apiGateway.core.utils.parseParametersToObject(params, []),
        queryParams: apiGateway.core.utils.parseParametersToObject(params, ['email']),
        body: body
    }

    try {
        return await apiAuthClient.get(
            apiAuthRecoveryRequestGetRequest.path,
            {
                headers: apiAuthRecoveryRequestGetRequest.headers,
                params: apiAuthRecoveryRequestGetRequest.queryParams,

            });
    } catch (error) {
        console.error('Error sending data:', error);
        throw error;
    }
}

export const apiAuthRecoveryPost = async (params, body, additionalParams) => {
    if(additionalParams === undefined) { additionalParams = {}; }

    apiGateway.core.utils.assertParametersDefined(params, ['requestId', 'body'], ['body']);

    let apiAuthRecoveryPostRequest = {
        verb: 'post'.toUpperCase(),
        path: apiAuthClient.getUri() + uritemplate('/api/recover/{requestId}').expand(apiGateway.core.utils.parseParametersToObject(params, ['requestId'])),
        headers: apiGateway.core.utils.parseParametersToObject(params, []),
        queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
        body: body
    }

    try {
        return await apiAuthClient.post(
            apiAuthRecoveryPostRequest.path,
            apiAuthRecoveryPostRequest.body,
            {
                headers: apiAuthRecoveryPostRequest.headers,
                params: apiAuthRecoveryPostRequest.queryParams,

            });
    } catch (error) {
        console.error('Error sending data:', error);
        throw error;
    }
}

/********** API ACQUISITION SERVICE**********/

export const apiAcquisitionFindAllMachineVibrationsGet = async (params, body, additionalParams) => {
    if(additionalParams === undefined) { additionalParams = {}; }

    apiGateway.core.utils.assertParametersDefined(params, ['Authorization'], ['body']);

    let apiAcquisitionFindAllMachineVibrationsGetRequest = {
        verb: 'get'.toUpperCase(),
        path: apiAcquisitionClient.getUri() + uritemplate('/api/acquisition/find/all').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
        headers: apiGateway.core.utils.parseParametersToObject(params, ['Authorization', ]),
        queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
        body: body
    }

    try {
        return await apiAcquisitionClient.get(
            apiAcquisitionFindAllMachineVibrationsGetRequest.path,
            {
                headers: apiAcquisitionFindAllMachineVibrationsGetRequest.headers,
                params: apiAcquisitionFindAllMachineVibrationsGetRequest.queryParams,

            });
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
}

export const apiAcquisitionFindMachineVibrationsFiltersGet = async (params, body, additionalParams) => {
    if(additionalParams === undefined) { additionalParams = {}; }

    apiGateway.core.utils.assertParametersDefined(params, ['Authorization', 'machineName', 'prediction', 'from', 'to'], ['body']);

    let apiAcquisitionFindMachineVibrationsFiltersGetRequest = {
        verb: 'get'.toUpperCase(),
        path: apiAcquisitionClient.getUri() + uritemplate('/api/acquisition/find').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
        headers: apiGateway.core.utils.parseParametersToObject(params, ['Authorization', ]),
        queryParams: apiGateway.core.utils.parseParametersToObject(params, ['machineName', 'prediction', 'from', 'to']),
        body: body
    }

    try {
        return await apiAcquisitionClient.get(
            apiAcquisitionFindMachineVibrationsFiltersGetRequest.path,
            {
                headers: apiAcquisitionFindMachineVibrationsFiltersGetRequest.headers,
                params: apiAcquisitionFindMachineVibrationsFiltersGetRequest.queryParams,

            });
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
}

/********** API MACHINE SERVICE**********/

export const apiMachineFindAllMachinesGet = async (params, body, additionalParams) => {
    if(additionalParams === undefined) { additionalParams = {}; }

    apiGateway.core.utils.assertParametersDefined(params, ['Authorization'], ['body']);

    let apiMachineFindAllMachinesGetRequest = {
        verb: 'get'.toUpperCase(),
        path: apiMachineClient.getUri() + uritemplate('/api/machine/find/all').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
        headers: apiGateway.core.utils.parseParametersToObject(params, ['Authorization',]),
        queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
        body: body
    }

    try {
        return await apiMachineClient.get(
            apiMachineFindAllMachinesGetRequest.path,
            {
                headers: apiMachineFindAllMachinesGetRequest.headers,
                params: apiMachineFindAllMachinesGetRequest.queryParams,

            });
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
}

export const apiMachineFindMachineByFiltersGet = async (params, body, additionalParams) => {
    if(additionalParams === undefined) { additionalParams = {}; }

    apiGateway.core.utils.assertParametersDefined(params, ['Authorization', 'addressCountry', 'addressLocality', 'addressRegion', 'brandName', 'manufacturerName', 'manufacturingMachineType', 'name', 'status'], ['body']);

    let apiMachineFindMachineByFiltersGetRequest = {
        verb: 'get'.toUpperCase(),
        path: apiMachineClient.getUri() + uritemplate('/api/machine/find').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
        headers: apiGateway.core.utils.parseParametersToObject(params, ['Authorization',]),
        queryParams: apiGateway.core.utils.parseParametersToObject(params, ['addressCountry', 'addressLocality', 'addressRegion', 'brandName', 'manufacturerName', 'manufacturingMachineType', 'name', 'status']),
        body: body
    }

    try {
        return await apiMachineClient.get(
            apiMachineFindMachineByFiltersGetRequest.path,
            {
                headers: apiMachineFindMachineByFiltersGetRequest.headers,
                params: apiMachineFindMachineByFiltersGetRequest.queryParams,

            });
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
}

export const apiMachineInsertMachinePost = async (params, body, additionalParams) => {
    if(additionalParams === undefined) { additionalParams = {}; }

    apiGateway.core.utils.assertParametersDefined(params, ['Authorization', 'body'], ['body']);

    let apiMachineInsertMachinePostRequest = {
        verb: 'post'.toUpperCase(),
        path: apiMachineClient.getUri() + uritemplate('/api/machine/insert').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
        headers: apiGateway.core.utils.parseParametersToObject(params, ['Authorization',]),
        queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
        body: body
    }

    try {
        return await apiMachineClient.post(
            apiMachineInsertMachinePostRequest.path,
            apiMachineInsertMachinePostRequest.body,
            {
                headers: apiMachineInsertMachinePostRequest.headers,
                params: apiMachineInsertMachinePostRequest.queryParams,

            });
    } catch (error) {
        console.error('Error sending data:', error);
        throw error;
    }
}

export const apiMachineUpdateMachinePut = async (params, body, additionalParams) => {
    if(additionalParams === undefined) { additionalParams = {}; }

    apiGateway.core.utils.assertParametersDefined(params, ['Authorization', 'body'], ['body']);

    let apiMachineUpdateMachinePutRequest = {
        verb: 'put'.toUpperCase(),
        path: apiMachineClient.getUri() + uritemplate('/api/machine/update').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
        headers: apiGateway.core.utils.parseParametersToObject(params, ['Authorization',]),
        queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
        body: body
    }

    try {
        return await apiMachineClient.put(
            apiMachineUpdateMachinePutRequest.path,
            apiMachineUpdateMachinePutRequest.body,
            {
                headers: apiMachineUpdateMachinePutRequest.headers,
                params: apiMachineUpdateMachinePutRequest.queryParams,

            });
    } catch (error) {
        console.error('Error sending data:', error);
        throw error;
    }
}

export const apiMachineStartMachinePut = async (params, body, additionalParams) => {
    if(additionalParams === undefined) { additionalParams = {}; }

    apiGateway.core.utils.assertParametersDefined(params, ['Authorization', 'idMachine'], ['body']);

    let apiMachineStartMachinePutRequest = {
        verb: 'put'.toUpperCase(),
        path: apiMachineClient.getUri() + uritemplate('/api/machine/start/{idMachine}').expand(apiGateway.core.utils.parseParametersToObject(params, ['idMachine'])),
        headers: apiGateway.core.utils.parseParametersToObject(params, ['Authorization',]),
        queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
        body: body
    }

    try {
        return await apiMachineClient.put(
            apiMachineStartMachinePutRequest.path,
            apiMachineStartMachinePutRequest.body,
            {
                headers: apiMachineStartMachinePutRequest.headers,
                params: apiMachineStartMachinePutRequest.queryParams,

            });
    } catch (error) {
        console.error('Error sending data:', error);
        throw error;
    }
}

export const apiMachineStopMachinePut = async (params, body, additionalParams) => {
    if(additionalParams === undefined) { additionalParams = {}; }

    apiGateway.core.utils.assertParametersDefined(params, ['Authorization', 'idMachine'], ['body']);

    let apiMachineStopMachinePutRequest = {
        verb: 'put'.toUpperCase(),
        path: apiMachineClient.getUri() + uritemplate('/api/machine/stop/{idMachine}').expand(apiGateway.core.utils.parseParametersToObject(params, ['idMachine'])),
        headers: apiGateway.core.utils.parseParametersToObject(params, ['Authorization',]),
        queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
        body: body
    }

    try {
        return await apiMachineClient.put(
            apiMachineStopMachinePutRequest.path,
            apiMachineStopMachinePutRequest.body,
            {
                headers: apiMachineStopMachinePutRequest.headers,
                params: apiMachineStopMachinePutRequest.queryParams,

            });
    } catch (error) {
        console.error('Error sending data:', error);
        throw error;
    }
}

export const apiMachineWorkMachinePut = async (params, body, additionalParams) => {
    if(additionalParams === undefined) { additionalParams = {}; }

    apiGateway.core.utils.assertParametersDefined(params, ['Authorization', 'idMachine'], ['body']);

    let apiMachineWorkMachinePutRequest = {
        verb: 'put'.toUpperCase(),
        path: apiMachineClient.getUri() + uritemplate('/api/machine/work/{idMachine}').expand(apiGateway.core.utils.parseParametersToObject(params, ['idMachine'])),
        headers: apiGateway.core.utils.parseParametersToObject(params, ['Authorization',]),
        queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
        body: body
    }

    try {
        return await apiMachineClient.put(
            apiMachineWorkMachinePutRequest.path,
            apiMachineWorkMachinePutRequest.body,
            {
                headers: apiMachineWorkMachinePutRequest.headers,
                params: apiMachineWorkMachinePutRequest.queryParams,

            });
    } catch (error) {
        console.error('Error sending data:', error);
        throw error;
    }
}

export const apiMachineMaintenanceMachinePut = async (params, body, additionalParams) => {
    if(additionalParams === undefined) { additionalParams = {}; }

    apiGateway.core.utils.assertParametersDefined(params, ['Authorization', 'idMachine'], ['body']);

    let apiMachineMaintenanceMachinePutRequest = {
        verb: 'put'.toUpperCase(),
        path: apiMachineClient.getUri() + uritemplate('/api/machine/maintenance/{idMachine}').expand(apiGateway.core.utils.parseParametersToObject(params, ['idMachine'])),
        headers: apiGateway.core.utils.parseParametersToObject(params, ['Authorization',]),
        queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
        body: body
    }

    try {
        return await apiMachineClient.put(
            apiMachineMaintenanceMachinePutRequest.path,
            apiMachineMaintenanceMachinePutRequest.body,
            {
                headers: apiMachineMaintenanceMachinePutRequest.headers,
                params: apiMachineMaintenanceMachinePutRequest.queryParams,

            });
    } catch (error) {
        console.error('Error sending data:', error);
        throw error;
    }
}

/********** API NOTIFICATION SERVICE**********/

export const apiNotificationFindAllEmailNotificationsGet = async (params, body, additionalParams) => {
    if(additionalParams === undefined) { additionalParams = {}; }

    apiGateway.core.utils.assertParametersDefined(params, ['Authorization'], ['body']);

    let apiNotificationFindAllEmailNotificationsGetRequest = {
        verb: 'get'.toUpperCase(),
        path: apiNotificationClient.getUri() + uritemplate('/api/notification/email/find/all').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
        headers: apiGateway.core.utils.parseParametersToObject(params, ['Authorization',]),
        queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
        body: body
    }

    try {
        return await apiNotificationClient.get(
            apiNotificationFindAllEmailNotificationsGetRequest.path,
            {
                headers: apiNotificationFindAllEmailNotificationsGetRequest.headers,
                params: apiNotificationFindAllEmailNotificationsGetRequest.queryParams,

            });
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
}

export const apiNotificationFindAllPopupNotificationsGet = async (params, body, additionalParams) => {
    if(additionalParams === undefined) { additionalParams = {}; }

    apiGateway.core.utils.assertParametersDefined(params, ['Authorization'], ['body']);

    let apiNotificationFindAllPopupNotificationsGetRequest = {
        verb: 'get'.toUpperCase(),
        path: apiNotificationClient.getUri() + uritemplate('/api/notification/popup/find/all').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
        headers: apiGateway.core.utils.parseParametersToObject(params, ['Authorization',]),
        queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
        body: body
    }

    try {
        return await apiNotificationClient.get(
            apiNotificationFindAllPopupNotificationsGetRequest.path,
            {
                headers: apiNotificationFindAllPopupNotificationsGetRequest.headers,
                params: apiNotificationFindAllPopupNotificationsGetRequest.queryParams,

            });
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
}

export const apiNotificationFindEmailNotificationsGet = async (params, body, additionalParams) => {
    if(additionalParams === undefined) { additionalParams = {}; }

    apiGateway.core.utils.assertParametersDefined(params, ['Authorization', 'email', 'subject', 'from', 'to'], ['body']);

    let apiNotificationFindEmailNotificationsGetRequest = {
        verb: 'get'.toUpperCase(),
        path: apiNotificationClient.getUri() + uritemplate('/api/notification/email/find').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
        headers: apiGateway.core.utils.parseParametersToObject(params, ['Authorization',]),
        queryParams: apiGateway.core.utils.parseParametersToObject(params, ['email', 'subject', 'from', 'to']),
        body: body
    }

    try {
        return await apiNotificationClient.get(
            apiNotificationFindEmailNotificationsGetRequest.path,
            {
                headers: apiNotificationFindEmailNotificationsGetRequest.headers,
                params: apiNotificationFindEmailNotificationsGetRequest.queryParams,

            });
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
}

export const apiNotificationFindPopupNotificationsGet = async (params, body, additionalParams) => {
    if(additionalParams === undefined) { additionalParams = {}; }

    apiGateway.core.utils.assertParametersDefined(params, ['Authorization', 'email', 'subject', 'from', 'to', 'read'], ['body']);

    let apiNotificationFindPopupNotificationsGetRequest = {
        verb: 'get'.toUpperCase(),
        path: apiNotificationClient.getUri() + uritemplate('/api/notification/popup/find').expand(apiGateway.core.utils.parseParametersToObject(params, [])),
        headers: apiGateway.core.utils.parseParametersToObject(params, ['Authorization',]),
        queryParams: apiGateway.core.utils.parseParametersToObject(params, ['email', 'subject', 'from', 'to', 'read']),
        body: body
    }

    try {
        return await apiNotificationClient.get(
            apiNotificationFindPopupNotificationsGetRequest.path,
            {
                headers: apiNotificationFindPopupNotificationsGetRequest.headers,
                params: apiNotificationFindPopupNotificationsGetRequest.queryParams,

            });
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
}

export const apiNotificationReadPopupNotificationPut = async (params, body, additionalParams) => {
    if(additionalParams === undefined) { additionalParams = {}; }

    apiGateway.core.utils.assertParametersDefined(params, ['notificationId', 'readStatus', 'Authorization'], ['body']);

    let apiNotificationReadPopupNotificationPutRequest = {
        verb: 'put'.toUpperCase(),
        path: apiNotificationClient.getUri() + uritemplate('/api/notification/updated/read/{notificationId}/{readStatus}').expand(apiGateway.core.utils.parseParametersToObject(params, ['notificationId', 'readStatus'])),
        headers: apiGateway.core.utils.parseParametersToObject(params, ['Authorization',]),
        queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
        body: body
    }

    try {
        return await apiNotificationClient.put(
            apiNotificationReadPopupNotificationPutRequest.path,
            apiNotificationReadPopupNotificationPutRequest.body,
            {
                headers: apiNotificationReadPopupNotificationPutRequest.headers,
                params: apiNotificationReadPopupNotificationPutRequest.queryParams,

            });
    } catch (error) {
        console.error('Error sending data:', error);
        throw error;
    }
}

export const apiNotificationReadAllPopupNotificationPut = async (params, body, additionalParams) => {
    if(additionalParams === undefined) { additionalParams = {}; }

    apiGateway.core.utils.assertParametersDefined(params, ['readStatus', 'Authorization'], ['body']);

    let apiNotificationReadAllPopupNotificationPutRequest = {
        verb: 'put'.toUpperCase(),
        path: apiNotificationClient.getUri() + uritemplate('/api/notification/update/read/all/{readStatus}').expand(apiGateway.core.utils.parseParametersToObject(params, ['readStatus'])),
        headers: apiGateway.core.utils.parseParametersToObject(params, ['Authorization',]),
        queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
        body: body
    }

    try {
        return await apiNotificationClient.put(
            apiNotificationReadAllPopupNotificationPutRequest.path,
            apiNotificationReadAllPopupNotificationPutRequest.body,
            {
                headers: apiNotificationReadAllPopupNotificationPutRequest.headers,
                params: apiNotificationReadAllPopupNotificationPutRequest.queryParams,

            });
    } catch (error) {
        console.error('Error sending data:', error);
        throw error;
    }
}

/********** API CQRS SERVICE**********/

export const apiCqrsFindUserGet = async (params, body, additionalParams) => {
    if(additionalParams === undefined) { additionalParams = {}; }

    apiGateway.core.utils.assertParametersDefined(params, ['Authorization', 'userEmail'], ['body']);

    let apiCqrsFindUserGetRequest = {
        verb: 'get'.toUpperCase(),
        path: apiCqrsClient.getUri() + uritemplate('/api/users/{userEmail}').expand(apiGateway.core.utils.parseParametersToObject(params, ['userEmail'])),
        headers: apiGateway.core.utils.parseParametersToObject(params, ['Authorization',]),
        queryParams: apiGateway.core.utils.parseParametersToObject(params, []),
        body: body
    }

    try {
        return await apiCqrsClient.get(
            apiCqrsFindUserGetRequest.path,
            {
                headers: apiCqrsFindUserGetRequest.headers,
                params: apiCqrsFindUserGetRequest.queryParams,

            });
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
}