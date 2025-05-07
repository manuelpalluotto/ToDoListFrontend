import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import apiClient from './lib/apiClient';

export async function fetchTicketsForUser (userId) {
  const response = await apiClient.get('/tickets/byUserId', {userId});
  return response.data;
};