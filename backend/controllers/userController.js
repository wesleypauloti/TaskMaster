// controllers/userController.js
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../models/User');

// Buscar todas as tarefas
exports.getUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (err) {
        res.status(500).json({ message: 'Erro ao buscar usuários', error: err });
    }
};

// Função para fazer login de um usuário
exports.loginUser = async (req, res) => {
    try {
        const { email, password } = req.body.userData;

        // Verifica se o usuário existe
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: 'Email inválido' });
        }

        // Verifica se a senha está correta
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(400).json({ message: 'Senha inválida' });
        }
        
        // Cria o token JWT
        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        console.log("Succes", token);

        // Envia o token para o cliente
        res.status(200).json({ token });
    } catch (error) {
        res.status(500).json({ message: 'Erro ao fazer login', error });
    }
};

// Criar um novo usuário
exports.createUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Verifica se o usuário já existe
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'Usuário já existe' });
        }

        // Cria o novo usuário
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({ email, password: hashedPassword });

        // Salva o usuário no banco
        await newUser.save();
        res.status(201).json(newUser); // Retorna o usuário criado
    } catch (err) {
        res.status(400).json({ message: 'Erro ao criar usuário', error: err });
    }
};
