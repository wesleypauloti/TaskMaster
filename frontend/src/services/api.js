// src/services/api.js
import axios from 'axios';

// Cria uma instância personalizada do axios
const api = axios.create({
    baseURL: 'http://localhost:5000/api',  // URL base da API
    headers: {
        'Content-Type': 'application/json',
    },
});

// Função para criar uma nova tarefa
export const createTask = async (taskData, token) => {
    try {
        const response = await api.post('/tasks', taskData, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return response.data;  // Retorna a resposta da API
    } catch (error) {
        throw error;  // Lança o erro para ser tratado no componente
    }
};

// Função para criar um novo usuário
export const createUser = async (userData) => {
    try {
        const response = await api.post('/users/signup', userData); // Chama a API para criar o usuário
        return response.data;  // Retorna a resposta da API
    } catch (error) {
        throw error;  // Lança o erro para ser tratado no componente
    }
};

export const loginUser = async (userData) => {
    try {
        const response = await api.post('/users/login', { userData });
        return response.data;
    } catch (error) {
        throw error;
    }
};

export default api;
