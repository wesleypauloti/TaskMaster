const mongoose = require('mongoose');

// URL de conexão com o MongoDB
const mongoURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/taskmanager';

const connectDB = async () => {
    try {
        // Remover as opções deprecated
        await mongoose.connect(mongoURI);
        console.log('Conexão com o MongoDB bem-sucedida!');
    } catch (err) {
        console.error('Erro ao conectar ao MongoDB:', err);
        process.exit(1);
    }
};

module.exports = connectDB;
