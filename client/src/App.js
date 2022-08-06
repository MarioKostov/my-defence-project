import { Routes, Route, useNavigate } from 'react-router-dom';
import { AuthContexts } from './Contexts/AuthContexts';
import { useState } from 'react';


import { BottomMenu } from "./components/BottomMenu/BottomMenu";
import { Carousel } from "./components/Carousel/Carousel";
import { CarsCatalog } from "./components/CarsCatalog/CarsCatalog";
import { CarsSection } from "./components/CarsSection/CarsSection";
import { FeaturedSection } from "./components/FeaturedSection/FeaturedSection";
import { Header } from "./components/Header/Header";
import { Login } from './components/Login/Login';
import { Navbar } from "./components/Navbar/Navbar";
import { NewsLetter } from "./components/NewsLetter/NewsLetter";
import { Logout } from './components/Logout/Logout';
import { Register } from './components/Register/Register';
function App() {

    const [auth, setAuth] = useState({});

    const userLogin = (authData) => {
        setAuth(authData);
    }

    const userLogout = () => {
        setAuth({});
    }

    return (
        <AuthContexts.Provider value={{user: auth, userLogin, userLogout }}>

            <div>
                <Header />
                <Navbar />
                <main>
                    <Routes>
                        <Route path="/" element={<Carousel />} />
                        <Route path="#" element={<FeaturedSection />} />
                        <Route path="#" element={<CarsSection />} />
                        <Route path="carscatalog" element={<CarsCatalog />} />
                        <Route path="#" element={<NewsLetter />} />
                        <Route path="#" element={<BottomMenu />} />
                        <Route path='login' element={<Login />} />
                        <Route path='logout' element={<Logout />} />
                        <Route path='register' element={<Register />} />
                    </Routes>
                </main>


            </div>
        </AuthContexts.Provider>

    );
}

export default App;
