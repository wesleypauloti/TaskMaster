// routes/indexedDB.js
const express = require('express');
const taskRoutes = require('./taskRoutes');
const userRoutes = require('./userRoutes');

const router = express.Router();

// Rotas de tarefas
router.use('/tasks', taskRoutes);

// Rotas de usuários
router.use('/users', userRoutes);

module.exports = router;
