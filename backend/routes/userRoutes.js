// routes/userRoutes.js
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Rota para buscar todas as tarefas
router.get('/', userController.getUsers);

// Rota para criar um novo usuário
router.post('/signup', userController.createUser);

// Rota para login
router.post('/login', userController.loginUser);

module.exports = router;
