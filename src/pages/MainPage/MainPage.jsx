import "./MainPage.css"

const MainPage = (props) => {
    const logout = async e => {
        e.preventDefault();
        console.log(props)
        props.user.setLoggedIn(false)
        props.user.setUserInfo("")
        localStorage.removeItem("user")
    }

    return (
        <div className="login-container">
            <button onClick={logout}>Log out</button>
        </div>
    );
};

export default MainPage