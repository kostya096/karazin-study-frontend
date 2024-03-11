import {BrowserRouter, Routes, Route} from 'react-router-dom'
import SignUp from "./pages/SignUp/SignUp";
import {useEffect, useState} from "react";
import LoginPage from "./pages/LoginPage/LoginPage.jsx";
import MainPage from "./pages/MainPage/MainPage.jsx";
import {getUserInfo} from "./components/functions/auth.jsx";
import {Navigate} from "react-router-dom";

const ProtectedRoute = ({isAllowed, redirectPath = '/login', children,}) => {
    if (!isAllowed) {
        return <Navigate to={redirectPath} replace/>;
    }

    return children ? children : <Outlet/>;
};

function App() {
    const [loggedIn, setLoggedIn] = useState(false)
    const [userInfo, setUserInfo] = useState("")
    const user_functions = {userInfo, setUserInfo, loggedIn, setLoggedIn}
    useEffect(() => {
            const user = JSON.parse(localStorage.getItem("user"))
            if (!user || !user.token) {
                setLoggedIn(false)
                return
            }
            getUserInfo(user.token).then(data => {
                console.log(data)
                if (data[0] === true) {
                    setUserInfo(data[1])
                    setLoggedIn(true)
                } else {
                    setUserInfo("")
                    setLoggedIn(false)
                }
            })
        }, []
    )
    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path="/"
                    element={
                        <ProtectedRoute isAllowed={!!user_functions.loggedIn} redirectPath="/sign_in">
                            <MainPage user={user_functions}/>
                        </ProtectedRoute>
                    }/>
                <Route
                    path="/sign_in"
                    element={
                        <ProtectedRoute isAllowed={!user_functions.loggedIn} redirectPath="/">
                            <LoginPage user={user_functions}/>
                        </ProtectedRoute>
                    }/>
                <Route path="/sign_up" element={
                    <ProtectedRoute isAllowed={!user_functions.loggedIn} redirectPath="/">
                        <SignUp user={user_functions}/>
                    </ProtectedRoute>
                }/>
            </Routes>
        </BrowserRouter>
    )
}

export default App