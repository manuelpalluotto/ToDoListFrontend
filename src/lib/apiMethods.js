import apiClient from './apiClient';

export async function getUsers() {
    const response = await apiClient.get('/users/admin/all');
    return response.data;
};

export async function createUser(User) {
    const response = await apiClient.post('/auth/register', User );
    return response.data;
}

export async function login(username, password) {
    const response = await apiClient.post('/auth/login', { username, password })
    return response.data;
}

export async function getUsername() {
    const response = await apiClient.get('users/getUsernameFromCookie');
    return response.data;
}

export async function getUserId(username) {
    const response = await apiClient.post('/users/getId', { username });
    return response.data;
}

export async function getRoleByUsername(username) {
    const response = await apiClient.post('/users/getRole',  username );
    return response.data;
}

export async function getFirstName(username) {
    const response = await apiClient.post('/users/getFirstName', { username });
    return response.data;
}

export async function getLastName(username) {
    const response = await apiClient.post('/users/getLastName', { username });
    return response.data;
}

export async function getEmail(username) {
    const response = await apiClient.get('/users/getEmail', { username });
    return response.data;
}

export async function changeRole(username, role) {
    const response = await apiClient.put('/users/changeRole', { username, role });
    return response.data;
}

export async function getFullUser(username) {
    const response = await apiClient.post('/users/getFullUser', { username });
    return response.data;
}

export async function getAuth() {
    const response = await apiClient.get('/auth/status');
    return response.data;
}

export async function addProject(Project) {
    const response = await apiClient.post('/projects/save', Project);
    return response.data;
}

export async function fetchProjects() {
    const response = await apiClient.get('/projects/show');
    return response.data;
}
