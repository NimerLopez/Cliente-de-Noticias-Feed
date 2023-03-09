import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router"
import axios from "axios";
import New from './new';
import './dashboard.css'
function Home() {
    const navigate = useNavigate();
    let [loggedUser, setval] = useState(JSON.parse(sessionStorage.getItem('Usuario')))
    let [newob, setNew] = useState({});
    //Effects
    //1 Main effect to validate user logged and consume product and carts from APIs URL via axios

    const newList = (
        newob.length ? <New new={newob} /> : <p>Loading...</p> 
    )
    useEffect(() => {
        if (loggedUser) {
            axios.get('http://localhost:3001/api/new', {
                headers: {
                    'Authorization': 'Bearer ' + loggedUser,
                    'Content-Type': 'application/json'
                }
            }).then(function (response) {
                console.log(response.data);
                setNew(response.data);

            }).catch(err => {//valida errores
                console.log("error: " + err);
            });
        } else {
            //***Redirect to login***
            navigate("/")
        }

    }, []);
    return (
        <div className="dashboard">
            <h1>Your unique News Cover</h1>
            <div className="news">
                <div className="wrap-news">
                    {newList}
                </div>
            </div>
        </div>              
    )

}
export default Home;