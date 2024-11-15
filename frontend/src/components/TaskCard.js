import React, { useState } from 'react';
import axios from 'axios';

import '../styles/Dashboard.css';

const TaskCard = ({ task, setTasks, tasks }) => {
    // Estado para controlar a visibilidade da descrição
    const [isDescriptionVisible, setIsDescriptionVisible] = useState(false);

    const handleDelete = async (taskId) => {
        try {
            await axios.delete(`http://localhost:5000/api/tasks/${taskId}`, {
                headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
            });
            setTasks(tasks.filter(task => task._id !== taskId));  // Atualiza o estado após a exclusão
        } catch (err) {
            console.error('Erro ao excluir a tarefa', err);
        }
    };

    // Função para alternar a visibilidade da descrição
    const toggleDescription = () => {
        setIsDescriptionVisible(!isDescriptionVisible);
    };

    return (
        <li>
            <span onClick={toggleDescription} style={{ cursor: 'pointer', minWidth: "30%", textAlign: 'left' }}>{task.title}</span>

            {/* Exibe a descrição somente se estiver visível */}
            {isDescriptionVisible && <p style={{ maxWidth: "70%", textAlign: 'left' }}>{task.description}</p>}
            <button onClick={() => handleDelete(task._id)}>Delete</button>
        </li>
    );
};

export default TaskCard;
