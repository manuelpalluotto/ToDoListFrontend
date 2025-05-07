import apiClient from './apiClient';

export async function getUsers() {
    const response = await apiClient.get('/users');
    return response.data;
};

export async function createUser(User) {
    const response = await apiClient.post('/auth/register', User);
    return response.data;
}

export async function login(username, password) {
    const response = await apiClient.post('/auth/login', {username, password})
    return response.data;
}


export function decodeToken(token) {
    try {
        const payload = JSON.parse(atob(token.split('.')[1]));
        return { username: payload.sub };
    } catch (error) {
        console.error('Invalid token:', error);
        return null;
    }
}

export function getCurrentUser() {
    if(typeof window === 'undefined') {
        return undefined;
    }

    const token = localStorage.getItem('token');
    if (!token) {
        return undefined;
    }

    const decoded = decodeToken(token);
    if (!decoded?.username) {
        return undefined;
    }
    return decoded.username;
}

export async function getUserId(username) {
    const response = await apiClient.post('/users/getId', {username});
    return response.data;
}
