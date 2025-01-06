import {AuthHeader, CurrentUser} from "./AuthUtils";
import {apiCqrsFindUserGet} from "../../apiGateway-js-sdk/apiClient";

export const getProfile = () => {
    let params = AuthHeader();
    params = {...params, userEmail: CurrentUser().email};
    const body = {};
    const additionalParams = {};

    return apiCqrsFindUserGet(params, body, additionalParams)
        .then(function(result){
            localStorage.setItem('profile', JSON.stringify(result.data));
            return Promise.resolve(result.data);
        }).catch( function(result){
            return Promise.reject(result);
    });
}

export default { getProfile };