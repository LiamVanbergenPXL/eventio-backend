import React  from "react";
import  './LoginForm.css';
import user_icon from  '../Assets/person.png';
import email_icon from '../Assets/email.png';
import pass_icon from '../Assets/password.png';

const  LoginForm = () => {
    return(
        <div className="container flex flex-col m-auto bg-white">
            <div className="header flex flex-col items-center w-full">
            <div className="text">
                Aanmelden
            </div>
                <div className="underline"></div>
            </div>
            <div className="inputs flex flex-col">
                <div className="input">
                    <img src={user_icon} alt=""/>
                    <input type="text" placeholder="Gebruikersnaam"/>
                </div>
                <div className="input">
                    <img src={email_icon} alt=""/>
                    <input type="email" placeholder="E-mail"/>
                </div>
                <div className="input">
                    <img src={pass_icon} alt=""/>
                    <input type="password" placeholder="Wachtwoord"/>
                </div>
                <div className="forgot-password text-center">Wachtwoord vergeten?  <span>Klik hier!</span></div>
                <div className="submit-container flex">
                    <div className="submit border-black border-2">Aanmelden</div>
                    <div className="submit border-black border-2">Login</div>
                </div>
            </div>

        </div>
    );
}

export default LoginForm