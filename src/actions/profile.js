import {
    GET_PROFILE_SUCCESS,
    GET_PROFILE_FAIL,
} from './types';

import ProfileService from '../services/ProfileService';
import {onError} from "./expiration";

export const getProfileData = () => (dispatch) => {
    return ProfileService.getProfile().then(
        (data) => {
            dispatch({
                type: GET_PROFILE_SUCCESS,
                payload: { profile: data },
            });
            return Promise.resolve();
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
                type: GET_PROFILE_FAIL,
            });

            dispatch(onError(message,"profile"));
            return Promise.reject();
        }
    );
}