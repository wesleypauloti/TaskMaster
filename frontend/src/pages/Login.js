import React, { useState } from 'react';
import { loginUser } from '../services/api'; // Importe o serviço API
import { useNavigate } from 'react-router-dom';

import '../styles/Login.css'

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const data = await loginUser({ email, password });
            localStorage.setItem('token', data.token);
            setError('Sucesso ao Logar')
            setTimeout(() => {
                setError('')
                window.location.href = '/';  // Redireciona para o dashboard
            }, 2000);
        } catch (error) {
            console.error("Login failed", error);
            setError("Email ou senha inválidos");
            setTimeout(() => {
                setError('')
            }, 2000);
        }
    };

    const handleSignup = () => {
        navigate('/signup');  // Redireciona para a rota do dashboard
    };

    return (
        <div className="form">
            <form onSubmit={handleSubmit}>
                <h2>Login</h2>
                <input
                    type="text"
                    placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                />
                <input
                    type="password"
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                />
                <button type="submit" className='button'>Login</button>
                {error && <p className="error">{error}</p>}
                <div>
                    <p>
                        Don't have an account?<span onClick={handleSignup} className='labelCadastra'>Sign up</span>
                    </p>

                </div>
            </form>
        </div>
    );
};

export default Login;
