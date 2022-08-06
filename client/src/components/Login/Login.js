import { useContext } from "react";
import { useNavigate } from "react-router-dom";


import { AuthContexts } from "../../Contexts/AuthContexts";
import * as authService from "../../services/authService";

export const Login = () => {
    const { userLogin } = useContext(AuthContexts);
    const navigate = useNavigate();

    const onSubmit = (e) => {
        e.preventDefault();

        const {
            email,
            password,
        } = Object.fromEntries(new FormData(e.target));

        authService.login(email, password)
            .then(authData => {
                userLogin(authData);
                navigate('/');
            })
            .catch(() => {
                navigate('/404');
            })
    }
    return (
        <form id='login' onSubmit={onSubmit}>
            <div id='container'>
                <h1>Login</h1>
                <label htmlFor="email">Email:</label>
                <input type="email"
                    id="email"
                    name="email"
                    placeholder="kostov@abv.bg"
                />
                <label htmlFor="login-pass">Password:</label>
                <input type="password"
                    id="login-password"
                    name="password"
                />
                <input type="submit"
                    className="btn-submit"
                    value='Login'
                />
            </div>
        </form>
    );
}