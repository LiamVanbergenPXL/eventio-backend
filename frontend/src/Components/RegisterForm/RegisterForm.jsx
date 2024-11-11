import React, {useState} from "react";
import  './RegisterForm.css';
import user_icon from  '../Assets/person.png';
import email_icon from '../Assets/email.png';
import pass_icon from '../Assets/password.png';
import axios from "axios";
import {Link} from "react-router-dom";

const  RegisterForm = () => {
    const [username, setUsername] = useState("");
    const  [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    async function save(event){
        event.preventDefault();
        try{
            await axios.post("http://localhost:8085/api/v1/user/save", {
                username: username,
                email: email,
                password: password
            });
            alert("Succesfull login");
        } catch (err){
            alert(err);
        }
    }
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
                    <input type="text" placeholder="Gebruikersnaam"
                           value={username}
                           onChange={(event) => {
                               setUsername(event.target.value);
                           }}/>
                </div>
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
                    <button className="submit border-black border-2" onClick={save}>Aanmelden</button>
                </div>
            </div>
        </div>
    );
}

export default RegisterForm