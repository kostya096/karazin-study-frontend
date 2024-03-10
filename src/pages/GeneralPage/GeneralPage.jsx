import "./GeneralPage.css"

const GeneralPage = () => {
    return (
        <div className="login-container">
            <form className="login-form">
                <img src={'logo.jpg'} width="100" height="100"/>
                <input type="email" id="email" name="email" placeholder="Email" required/>
                <input type="password" id="password" name="password" placeholder="Password" required/>
                <button type="submit" className="login-button">Log in</button>
                <div className="signup-link">
                    No account? <a href="#">Create one</a>
                </div>
            </form>
        </div>
    );
};

export default GeneralPage