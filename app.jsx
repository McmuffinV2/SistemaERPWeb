import React, { useState } from 'react'
import './app.css'
import './Firebase/client'
import { loginGoogle } from './Firebase/client'
import { loginMicrosoft } from './Firebase/client'

function App() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Login attempt:", { email, password, rememberMe });
        alert("¡Diseño Premium cargado en React!");
    };

    return (
        <>
            <div className="blob-container">
                <div className="blob blob-1"></div>
                <div className="blob blob-2"></div>
                <div className="blob blob-3"></div>
            </div>

            <main className="login-wrapper">
                <div className="login-card">
                    <header className="login-header">
                        <h1>Bienvenido</h1>
                        <p>Ingresa tus credenciales para continuar</p>
                    </header>

                    <form id="login-form" className="login-form" onSubmit={handleSubmit}>
                        <div className="input-group">
                            <label htmlFor="email">Correo electrónico</label>
                            <input
                                type="email"
                                id="email"
                                placeholder="ejemplo@correo.com"
                                required
                                autoComplete="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>

                        <div className="input-group">
                            <label htmlFor="password">Contraseña</label>
                            <input
                                type="password"
                                id="password"
                                placeholder="••••••••"
                                required
                                autoComplete="current-password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>

                        <div className="options">
                            <label className="remember-me">
                                <input
                                    type="checkbox"
                                    checked={rememberMe}
                                    onChange={(e) => setRememberMe(e.target.checked)}
                                /> Recordarme
                            </label>
                            <a href="#" className="forgot-password">¿Olvidaste tu contraseña?</a>
                        </div>

                        <button type="submit" className="btn-primary">Iniciar Sesión</button>
                    </form>

                    <div className="divider">
                        <span>o continuar con</span>
                    </div>

                    <div className="social-grid">
                        <button onClick={loginGoogle} className="social-btn" type="button">
                            <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" alt="Google" />
                            Google
                        </button>
                        <button onClick={loginMicrosoft} className="social-btn" type="button">
                            <img
                                src="https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg"
                                alt="Microsoft"
                                style={{ width: '18px' }}
                            />
                            Microsoft
                        </button>
                    </div>

                    <footer className="login-footer">
                        <p>¿No tienes una cuenta? <a href="#">Regístrate</a></p>
                    </footer>
                </div>
            </main>
        </>
    );
}

export default App;