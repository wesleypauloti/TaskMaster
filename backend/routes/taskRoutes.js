const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskController');

// Rota para buscar todas as tarefas
router.get('/', taskController.getTasks);

// Rota para criar uma nova tarefa
router.post('/', taskController.createTask);

// Rota para excluir uma tarefa
router.delete('/:id', taskController.deleteTask);

module.exports = router;
