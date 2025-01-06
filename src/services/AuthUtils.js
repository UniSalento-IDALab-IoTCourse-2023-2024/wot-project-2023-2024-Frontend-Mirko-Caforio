import {ROLE_ADMIN, ROLE_SUPERVISOR} from "../config";

export function getRole(isAdmin) {
    return isAdmin ? ROLE_ADMIN : ROLE_SUPERVISOR;
}

export function isTokenExpired(message) {
    return (message && message.startsWith('Invalid token: JWT expired'));
}

export function isUserNotAuthorized(message) {
    return (message && message.startsWith('User not authorized'));
}

export function CurrentUser() {
    return JSON.parse(localStorage.getItem('user'));
}

export function CurrentProfile() {
    return JSON.parse(localStorage.getItem('profile'));
}

export function AuthHeader(){
    const token = JSON.parse(localStorage.getItem('user'));

    if (token) {
        return { Authorization: 'Bearer ' + token.token};
    } else {
        return {};
    }
}