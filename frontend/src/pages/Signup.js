import React, { useState } from 'react';
import { createUser } from '../services/api';

import { useNavigate } from 'react-router-dom';

import '../styles/Login.css';

const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const navigate = useNavigate();

    // No seu componente Signup.js
    const handleSubmit = async (e) => {
        e.preventDefault();

        // Verifica se as senhas coincidem
        if (password !== confirmPassword) {
            setError("As senhas não coincidem");
            return;
        }

        try {
            // Envia os dados para o endpoint de signup usando a função createUser
            const response = await createUser({ email, password });  // Chama a função para criar o usuário
            setSuccessMessage('Cadastro realizado com sucesso! Agora, faça o login.');
            setError(''); // Limpa qualquer erro anterior
            setTimeout(() => {
                setError('')
                window.location.href = '/login';
            }, 2000);
        } catch (error) {
            console.error("Erro ao cadastrar");
            setError("Erro ao cadastrar, tente novamente", error);
            setTimeout(() => setError(''), 2000);
        }
    };

    const handleLoginRedirect = () => {
        navigate('/login'); // Redireciona para a tela de login após sucesso no cadastro
    };

    return (
        <div className="form">
            <form onSubmit={handleSubmit}>
                <h2>Sign Up</h2>
                <input
                    type="text"
                    placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                />
                <input
                    type="password"
                    placeholder="Senha"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                />
                <input
                    type="password"
                    placeholder="Confirmar Senha"
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    value={confirmPassword}
                />
                <button type="submit" className="button">Sign Up</button>
                {error && <p className="error">{error}</p>}
                {successMessage && <p className="success">{successMessage}</p>}
            </form>
            <div>
                <p>
                    Already have an account?<span onClick={handleLoginRedirect} className='labelCadastra'>Log in</span>
                </p>
            </div>
        </div>
    );
};

export default Signup;
