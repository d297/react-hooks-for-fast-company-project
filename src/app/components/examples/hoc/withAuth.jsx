import React, { useState } from "react";
import CardWrapper from "../../common/Card";

const withAuth = (Component) => (props) => {
    const [isAuth, setIsAuth] = useState(localStorage.getItem("user"));
    const handleLogin = () => {
        console.log("Login");
        localStorage.setItem("user", "Auth");
        setIsAuth(localStorage.getItem("user"));
    };
    const handleLogOut = () => {
        console.log("LogOut");
        localStorage.removeItem("user");
        setIsAuth(localStorage.getItem("user"));
    };
    return (
        <CardWrapper>
            <Component
                onLogin={handleLogin}
                onLogOut={handleLogOut}
                isAuth={isAuth}
            />
        </CardWrapper>
    );
};

export default withAuth;
