import "./GeneralPage.css"
import {NavLink} from "react-router-dom";

const GeneralPage = () => {
    return (
        <div className="login-container">
            <form className="login-form">
                <img src={'logo.jpg'} width="200" height="200" style={{borderRadius:'50%', marginTop:'-130px', boxShadow:'0 0 10px rgba(0, 0, 0, 0.3)'}}/>
                <div className={'title'}>
                    Welcome back
                </div>
                <input type="email" id="email" name="email" placeholder="Email" required/>
                <input type="password" id="password" name="password" placeholder="Password" required/>
                <button type="submit" className="login-button">Sign in</button>
                <div className="signup-link">
                    No account? <NavLink to="/SignUp">Create one</NavLink>
                </div>
            </form>
        </div>
    );
};

export default GeneralPage