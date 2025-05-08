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

export async function getUsername() {
    const response = await apiClient.get('users/getUsernameFromCookie');
    return response.data;
}

export async function getUserId(username) {
    const response = await apiClient.post('/users/getId', {username});
    return response.data;
}

export async function getRoleByUsername(username) {
    const response = await apiClient.get('/users/getRole');
    return response.data;
}

export async function getFirstName() {
    const response = await apiClient.get('/users/getFirstName');
    return response.data;
}

export async function getLastName() {
    const response = await apiClient.get('/users/getLastName');
    return response.data;
}

export async function getEmail() {
    const response = await apiClient.get('/users/getEmail');
    return response.data;
}
