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
    const token = response.data.token;
    localStorage.setItem('token', token);
    return token;
}

