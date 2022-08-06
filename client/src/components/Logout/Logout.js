import { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";

import * as authService from '../../services/authService';
import { AuthContexts } from "../../Contexts/AuthContexts";

export const Logout = () => {
    const navigate = useNavigate();
    const { user, userLogout } = useContext(AuthContexts);

    useEffect(() => {
        authService.logout(user.accessToken)
            .then(() => {
                userLogout();
                navigate('/')
            })
            .catch(() => {
                navigate('/')
            })
    })
    return null;
}