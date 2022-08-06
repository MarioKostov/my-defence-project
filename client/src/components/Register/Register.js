import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import * as authService from "../../services/authService";
import { AuthContexts } from "../../Contexts/AuthContexts";

export const Register = () => {
    const { userLogin } = useContext(AuthContexts);
    const navigate = useNavigate();

    const onSubmit = (e) => {
        e.preventDefault();

        const formDate = new FormData(e.target);
        const email = formDate.get('email');
        const password = formDate.get('password');
        const confirmPassword = formDate.get('confirm-password');

        if (password !== confirmPassword) {
            return;
        }

        authService.register(email, password)
            .then(authDate => {
                userLogin(authDate);
                navigate('/');
            })
    }

    return (
        <form id='register' onSubmit={onSubmit}>
            <div id='container'>
                <h1>Register</h1>
                <label htmlFor="email">Email:</label>
                <input type="email"
                    id="email"
                    name="email"
                    placeholder="kostov@abv.bg"
                />
                <label htmlFor="pass">Password:</label>
                <input type="password"
                    name="password"
                    id="register-password"
                />
                <label htmlFor="confirm-pass">Confirm Password:</label>
                <input type="password"
                    name="confirm-password"
                    id="confirm-password"
                />
                <input type="submit"
                    className="btn-submit"
                    defaultValue='Register'
                />
            </div>
        </form>
    );
}