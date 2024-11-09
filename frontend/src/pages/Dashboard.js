import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import TaskCard from '../components/TaskCard';
import api from '../services/api'; // Serviço de requisição

import '../styles/Dashboard.css';


const Dashboard = () => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        const fetchTasks = async () => {
            const response = await api.get('/tasks');
            setTasks(response.data);
        };
        fetchTasks();
    }, []);

    return (
        <div>
            <h2>Your Tasks</h2>
            <Link to="/task-form">Add New Task</Link>
            <ul>
                {tasks.map(task => (
                    <TaskCard task={task} setTasks={setTasks} tasks={tasks} />
                ))}
            </ul>
        </div>
    );
};

export default Dashboard;
