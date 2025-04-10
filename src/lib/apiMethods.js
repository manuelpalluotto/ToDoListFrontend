import apiClient from './apiClient';

export async function getUsers() {
    const response = await apiClient.get('/users', users);
    return response;
};

