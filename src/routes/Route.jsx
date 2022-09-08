import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect, useMemo } from "react";

import { TokenContext } from "../utils/Context";
import Register from '../pages/auth/Register';
import Login from '../pages/auth/Login';
import Detail from "../pages/Detail";
import Homepage from "../pages/App";
import Create from '../pages/Create';
import Update from '../pages/Update';


const Router = () => {
    // DOCS : https://dev.to/dancurtis/learn-to-usecontext-with-hooks-in-3-minutes-4c4g
    const [token, setToken] = useState("");
    const setLogin = (newToken) => {
        localStorage.setItem("token", newToken);
        setToken(newToken);
    };
    const setLogout = () => {
        localStorage.removeItem("token");
        setToken("");
    };

    useEffect(() => {
        if (localStorage.getItem("token")) {
            setLogin(localStorage.getItem("token"));
        }
        console.log("token", token)
    }, [])

    return (
        <TokenContext.Provider value={{token, setLogin, setLogout }}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Homepage />}></Route>
                    <Route path="/detail/:id" element={<Detail />}></Route>
                    <Route path="/register" element={<Register />}></Route>
                    <Route path="/login" element={<Login />}></Route>
                    <Route path="/create" element={<Create />}></Route>
                    <Route path="/update/:id" element={<Update />}></Route>



                </Routes>
            </BrowserRouter>
        </TokenContext.Provider>
    );
}

export default Router;