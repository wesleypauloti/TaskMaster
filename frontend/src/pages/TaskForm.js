import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createTask } from '../services/api';

import '../styles/TaskForm.css'

const TaskForm = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const taskData = { title, description };
        const token = localStorage.getItem('token');
        console.log("Enviando tarefa:", taskData);

        try {
            const response = await createTask(taskData, token);  // Chama a função de criação de tarefa
            console.log("Resposta do backend:", response);
            window.location.href = '/';  // Redireciona após a criação da tarefa
        } catch (error) {
            console.error("Erro ao criar tarefa:", error);
        }
    };

    const handleGoBack = () => {
        navigate('/');  // Redireciona para a rota do dashboard
    };

    return (
        <div className='form'>
            <h2>Create Task</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <textarea
                    placeholder="Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />

                <button type="submit" className='button'>Create Task</button>
                <button type="button" className='buttonVoltar' onClick={handleGoBack}>Voltar</button>
            </form>
        </div>
    );
};

export default TaskForm;

