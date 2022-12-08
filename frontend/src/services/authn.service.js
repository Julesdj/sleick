import axios from "axios";
import jwt_decode from "jwt-decode";

const apiEndpoint = "/api/authn";
const tokenKey = "token";
// axios.defaults.headers.common['x-authn-token'] = authn.getJwt()

export async function login(email, password) {
    const { data: jwt } = await axios.post(apiEndpoint, { email, password });
    localStorage.setItem(tokenKey, jwt);
}

export async function loginWithJwt(jwt) {
    localStorage.setItem(tokenKey, jwt);
}

export function logout() {
    localStorage.removeItem(tokenKey);
}

export function getCurrentUser() {
    try {
        const jwt = localStorage.getItem(tokenKey);
        return jwt_decode(jwt);
    } catch (err) {
        return null;
    }
}

export function getJwt() {
    return localStorage.getItem(tokenKey);
}

const authn = {
    login,
    loginWithJwt,
    logout,
    getCurrentUser,
    getJwt,
};

export default authn;
