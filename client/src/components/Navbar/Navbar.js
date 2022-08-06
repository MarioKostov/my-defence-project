import { Routes, Route, useNavigate } from 'react-router-dom';
import { useContext } from 'react';

import { AuthContexts } from '../../Contexts/AuthContexts';

export const Navbar = () => {

    const onSubmit = (e) => {
        e.preventDefault();
    }

    const { user } = useContext(AuthContexts);

    return (
        <nav className="topnavbar navbar-default topnav" onSubmit={onSubmit}>
            <div className="container">
                <div className="navbar-header">
                    <button type="button" className="navbar-toggle collapsed toggle-costume" data-toggle="collapse"
                        data-target="#upmenu" aria-expanded="false">
                        <span className="sr-only"> Toggle navigaion</span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                    <a className="navbar-brand logo" href="#"><img src="image/logo1.png" alt="logo" /></a>
                </div>
            </div>
            <div className="collapse navbar-collapse" id="upmenu">
                <ul className="nav navbar-nav" id="navbarontop">

                    <li className="active"><a href="/">HOME</a> </li>

                    <li className="dropdown">
                        <a href="carscatalog" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true"
                            aria-expanded="false">CATEGORIES <span className="caret"></span></a>
                        <ul className="dropdown-menu dropdowncostume">
                            <li><a href="#">Sport</a></li>
                            <li><a href="#">Old</a></li>
                            <li><a href="#">New</a></li>
                            <li><a href="carscatalog">All</a></li>

                        </ul>
                    </li>
                    <li className="dropdown">
                        <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true"
                            aria-expanded="false">DEALERS <span className="caret"></span></a>
                        <ul className="dropdown-menu dropdowncostume">
                            <li><a href="#">1</a></li>
                            <li><a href="#">2</a></li>
                            <li><a href="3">3</a></li>
                        </ul>
                    </li>
                    <li>
                        <a href="contact">CONTACT</a>
                        <p> My Contact</p>
                    </li>
                    {user.email && < button > <span className="postnewcar">POST NEW CAR</span></button>

                    }
                </ul>
            </div>
        </nav >
    );
}