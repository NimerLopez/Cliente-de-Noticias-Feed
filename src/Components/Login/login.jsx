import './login.css'
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router"

function Login() {
    const navigate = useNavigate();

    const userUrl = "http://localhost:3001/api/login";
    let [email, setEmail] = useState('');
    let [contra, setContra] = useState('');
    const Logival = () => {
        let Dateuser = "";
        if (!email || !contra) {
            if (!email && contra) {
                alert("Favor introducir un Email");
            } if (!contra && email) {
                alert("Favor introducir una contraseña");
            } if (!email && !contra) {
                alert("Favor Llenar los campos");
            }
        } else {
            axios.post(userUrl, {
                email: email,
                pass: contra
            }, {
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(function (response) {
                console.log(response);
                if (response) {                   
                    Dateuser = response.data;
                    sessionStorage.setItem('Usuario',JSON.stringify(Dateuser));
                    console.log("luisraton", Dateuser);
                    navigate("/home")
                    // axios.get('http://localhost:3001/api/new', {
                    //     headers: {
                    //         'Authorization': 'Bearer ' + Dateuser,
                    //         'Content-Type': 'application/json'
                    //     }
                    // }).then(function (response) {
                    //     console.log(response.data);                       

                    // }).catch(err => {//valida errores
                    //     console.log("error: " + err);
                    // });

                    //document.cookie = `token=${response.data.token}`;
                    //sessionStorage.setItem('TokenUser', JSON.stringify(Dateuser));//se guarda en la sesion   
                    //navigate("/home");
                };
            }).catch(err => {//valida errores
                console.log("error: " + err);
                alert("Datos incorrectos");
            });

        };
    };
    return (

        <>
            <div className="logbox">
                <div className="login-title">
                    <h1>
                        User Login
                    </h1>
                </div>
                <div className="login-inputs">
                    <input type="text" name="A1" onChange={ev => setEmail(ev.target.value)} placeholder="Email Address"></input>
                    <input type="password" name="A2" onChange={ev => setContra(ev.target.value)} placeholder="Password"></input>
                </div>
                <div className="login-buttons">
                    <input onClick={() => Logival()} type="submit" name="A3" value="Login"></input>
                </div>
                <p>If you don´t have an acount. <a href="">Signup Here</a></p>
            </div>

        </>
    );
}

export default Login;