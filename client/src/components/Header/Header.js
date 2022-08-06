import { useContext } from "react";

import { AuthContexts } from "../../Contexts/AuthContexts";


export const Header = () => {

    const { user } = useContext(AuthContexts);
    return (

        <div className="allcontain">
            <div className="header">
                <ul className="socialicon">
                    <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                    <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                    <li><a href="#"><i className="fa fa-google-plus"></i></a></li>
                    <li><a href="#"><i className="fa fa-pinterest"></i></a></li>
                </ul>
                <ul className="givusacall">
                    <li>Give us a call : +66666666 </li>
                </ul>
                <ul className="logreg">
                    {user.email && <span>{user.email}</span>}
                    
                    {user.email
                        ? <div id="user">
                            <li><a href="logout">Logout </a> </li>
                        </div>

                        : <div id="guest">
                            <li><a href="login">Login </a> </li>
                            <li><a href="register"><span className="register">Register</span></a></li>
                        </div>
                    }
                </ul>
            </div>
        </div>
    );
}