import {AuthHeader, CurrentUser} from "./AuthUtils";
import {
    apiNotificationFindAllEmailNotificationsGet,
    apiNotificationFindAllPopupNotificationsGet,
    apiNotificationFindEmailNotificationsGet,
    apiNotificationFindPopupNotificationsGet,
    apiNotificationReadAllPopupNotificationPut,
    apiNotificationReadPopupNotificationPut
} from "../../apiGateway-js-sdk/apiClient";

export const getAllEmailNotifications = () => {
    let params = AuthHeader();
    const body = {};
    const additionalParams = {};

    return apiNotificationFindAllEmailNotificationsGet(params, body, additionalParams)
        .then(function(result){
            return Promise.resolve(result.data);
        }).catch( function(result){
            return Promise.reject(result);
        });
}

export const getAllPopupNotifications = () => {
    let params = AuthHeader();
    const body = {};
    const additionalParams = {};

    return apiNotificationFindAllPopupNotificationsGet(params, body, additionalParams)
        .then(function(result){
            return Promise.resolve(result.data);
        }).catch( function(result){
            return Promise.reject(result);
        });
}

export const getEmailNotificationByEmail = () => {
    let params = AuthHeader();

    params = {
        ...params,
        email: CurrentUser()?.email,
        subject: "",
        from: "",
        to: "",
    };

    const body = {};
    const additionalParams = {};

    return apiNotificationFindEmailNotificationsGet(params, body, additionalParams)
        .then(function(result){
            return Promise.resolve(result.data);
        }).catch( function(result){
            return Promise.reject(result);
        });
}

export const getPopupNotificationByEmail = () => {
    let params = AuthHeader();

    params = {
        ...params,
        email: CurrentUser()?.email,
        subject: "",
        from: "",
        to: "",
        read: ""
    };

    const body = {};
    const additionalParams = {};

    return apiNotificationFindPopupNotificationsGet(params, body, additionalParams)
        .then(function(result){
            return Promise.resolve(result.data);
        }).catch( function(result){
            return Promise.reject(result);
        });
}

export const readPopupNotification = (id, read) => {
    let params = AuthHeader();

    params = {
        ...params,
        notificationId: id,
        readStatus: read
    };

    const body = {};
    const additionalParams = {};

    return apiNotificationReadPopupNotificationPut(params, body, additionalParams)
        .then(function(result){
            return Promise.resolve(result.data);
        }).catch( function(result){
            return Promise.reject(result);
        });
}

export const readAllPopupNotifications = (read) => {
    let params = AuthHeader();

    params = {
        ...params,
        readStatus: read
    };

    const body = {};
    const additionalParams = {};

    return apiNotificationReadAllPopupNotificationPut(params, body, additionalParams)
        .then(function(result){
            return Promise.resolve(result.data);
        }).catch( function(result){
            return Promise.reject(result);
        });
}

export default {
    getAllEmailNotifications,
    getAllPopupNotifications,
    getEmailNotificationByEmail,
    getPopupNotificationByEmail,
    readPopupNotification,
    readAllPopupNotifications
}