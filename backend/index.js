// index.js
const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const cors = require('cors');
const routes = require('./routes');

dotenv.config();
connectDB();

const app = express();

app.use(cors({
    origin: 'http://localhost:3000',  // Permite somente o frontend em http://localhost:3000
    methods: ['GET', 'POST', 'DELETE', 'PUT'],  // Permite esses métodos HTTP
    allowedHeaders: ['Content-Type', 'Authorization'],  // Permite esses cabeçalhos
}));

app.use(express.json());
app.use('/api', routes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
