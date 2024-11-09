const Task = require('../models/Task');

// Buscar todas as tarefas
exports.getTasks = async (req, res) => {
    try {
        const tasks = await Task.find();
        res.json(tasks);
    } catch (err) {
        res.status(500).json({ message: 'Erro ao buscar tarefas', error: err });
    }
};

// Criar uma nova tarefa
exports.createTask = async (req, res) => {
    try {
        const newTask = new Task(req.body);
        await newTask.save();
        res.status(201).json(newTask);
    } catch (err) {
        res.status(400).json({ message: 'Erro ao criar tarefa', error: err });
    }
};

// Excluir uma tarefa
exports.deleteTask = async (req, res) => {
    try {
        const { id } = req.params;  // Obtém o ID da tarefa da URL
        const task = await Task.findByIdAndDelete(id);
        if (!task) {
            return res.status(404).json({ message: 'Tarefa não encontrada' });
        }
        res.json({ message: 'Tarefa deletada com sucesso!' });
    } catch (err) {
        res.status(500).json({ message: 'Erro ao excluir tarefa', error: err });
    }
};

