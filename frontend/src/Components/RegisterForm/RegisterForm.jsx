import React, {useState} from "react";
import  './RegisterForm.css';
import user_icon from  '../Assets/person.png';
import email_icon from '../Assets/email.png';
import pass_icon from '../Assets/password.png';
import axios from "axios";
import {useNavigate} from "react-router-dom";


const  RegisterForm = () => {
    const [username, setUsername] = useState("");
    const  [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showAlert, setShowAlert] = useState(false);
    const navigate = useNavigate();

    async function save(event){
        event.preventDefault();
        try{
            await axios.post("http://localhost:8085/api/v1/user/save", {
                username: username,
                email: email,
                password: password
            });
            setShowAlert(true);
            setTimeout(() => {
                navigate("/login");}
                , 3000
            )
        } catch (err){
            alert(err);
        }
    }
    return(
        <div className="container flex flex-col m-auto bg-white">
            {showAlert && (
                <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative"
                     role="alert">
                    <strong className="font-bold">Succes! </strong>
                    <span className="block sm:inline">Je account is succesvol aangemaakt!</span>
                    <span className="absolute top-0 bottom-0 right-0 px-4 py-3" onClick={() => setShowAlert(false)}>
                        <svg className="fill-current h-6 w-6 text-red-500" role="button"
                             xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path
                            d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"/></svg>
                    </span>
                    <div className="completion-bar bg-green-400"></div>
                </div>
            )}
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