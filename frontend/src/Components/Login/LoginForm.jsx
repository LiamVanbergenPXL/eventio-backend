import React, {useState} from "react";
import './LoginForm.css';
import email_icon from '../Assets/email.png';
import pass_icon from '../Assets/password.png';
import axios from "axios";
import {Link} from "react-router-dom";

const LoginForm = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    async function login(event) {
        event.preventDefault();
        try {
            await axios.post("http://localhost:8085/api/v1/user/login", {
                email: email,
                password: password,
            }).then((res) => {
                console.log(res.data);

                if (res.data.message === "Email not found") {
                    alert("Email not exits");
                } else if (res.data.message === "Login Success") {
                    alert("JIPPIEE")
                } else {
                    alert("Incorrect Email and Password not match");
                }
            }, fail => {
                console.error(fail); // Error!
            });
        } catch (err) {
            alert(err);
        }

    }

    return (
        <div className="container flex flex-col m-auto bg-white">
            <div className="header flex flex-col items-center w-full">
                <div className="text">
                    Inloggen
                </div>
                <div className="underline"></div>
            </div>
            <div className="inputs flex flex-col">
                <div className="input">
                    <img src={email_icon} alt=""/>
                    <input type="email" placeholder="E-mail"
                           value={email}
                           onChange={(event) => {
                               setEmail(event.target.value);
                           }}/>
                </div>
                <div className="input">
                    <img src={pass_icon} alt=""/>
                    <input type="password" placeholder="Wachtwoord"
                           value={password}
                           onChange={(event) => {
                               setPassword(event.target.value);
                           }}/>
                </div>
                <div className="submit-container flex">
                    <button className="submit border-black border-2" onClick={login}>Aanmelden</button>
                    <div className="submit border-black border-2">Login</div>
                </div>
            </div>
            <div className="forgot-password text-center mt-4">Wachtwoord vergeten? <span><Link to="/aanmelden">Klik hier!</Link></span>
            </div>
            <div className="forgot-password text-center mt-2">Nog geen account? <span><Link
                to="/aanmelden">Registreren!</Link></span></div>
        </div>
    );
}

export default LoginForm