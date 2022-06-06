// import styles
import './Auth.css';

// import hooks
import { useState } from 'react';

const Auth = ({ setLoading }) => {

    const [loginForm, setLoginForm] = useState({});
    const [registerForm, setRegisterForm] = useState({});

    const handleLogin = (event) => {
        event.preventDefault();


        setLoading("Aguarde...")
        console.log(loginForm);

        setTimeout(() => { setLoading(null) }, 300);
    }

    const handleRegister = (event) => {
        event.preventDefault();

        console.log(registerForm);
    }

    const handleChange = (event, setState) => {
        setState((actualState) => {
            actualState[event.target.name] = event.target.value;
            return actualState;
        })
    }

    const handleLoginChange = (event) => {
        return handleChange(event, setLoginForm);
    }

    const handleRegisterChange = (event) => {
        return handleChange(event, setRegisterForm);
    }


    return (
        <div className="auth-body">
            <div className="auth-card">
                <div className="auth-card-login">
                    <form className="auth-card-login-form" onSubmit={handleLogin}>
                        <h1>Entrar</h1>
                        <label>
                            <input
                                type="email"
                                name="email"
                                placeholder="Seu e-mail"
                                onChange={(e) => { handleLoginChange(e) }}
                                required
                            />
                        </label>
                        <label>
                            <input
                                type="password"
                                name="password"
                                placeholder="Sua senha"
                                onChange={(e) => { handleLoginChange(e) }}
                                minLength="8"
                                required
                            />
                        </label>

                        <button>Entrar</button>
                    </form>
                </div>
                <div className="auth-card-register">
                    <form className="auth-card-register-form" onSubmit={handleRegister}>
                        <h1>Criar conta</h1>
                        <label>
                            <input
                                type="email"
                                name="email"
                                placeholder="Seu E-Mail"
                                onChange={(e) => { handleRegisterChange(e) }}
                                required />
                        </label>
                        <label>
                            <input
                                type="text"
                                name="username"
                                placeholder="Seu nome de usuário"
                                onChange={(e) => { handleRegisterChange(e) }}
                                required
                            />
                        </label>

                        <label>
                            <input
                                type="password"
                                name="password"
                                minLength={8}
                                maxLength={64}
                                placeholder="Senha"
                                onChange={(e) => { handleRegisterChange(e) }}
                                required
                            />
                        </label>

                        <label>
                            <input
                                type="password"
                                name="repassword"
                                minLength={8}
                                maxLength={64}
                                placeholder="Repetir sua senha"
                                onChange={(e) => { handleRegisterChange(e) }}
                                required
                            />
                        </label>

                        <button>Criar conta</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Auth