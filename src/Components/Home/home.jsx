import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router"
import axios from "axios";
import New from './new';
import './dashboard.css'
function Home() {
    const navigate = useNavigate();
    let [loggedUser, setval] = useState(JSON.parse(sessionStorage.getItem('Usuario')))
    let [newob, setNew] = useState({});
    let [categoriob, setCategory] = useState({});

    //Effects
    //1 Main effect to validate user logged and consume product and carts from APIs URL via axios

    const newList = (
        newob.length && categoriob.length ? <New new={newob} cate={categoriob} /> : <p>Loading...</p> 
    )
    useEffect(() => {
        if (loggedUser) {
            //request my new by token id
            axios.get('http://localhost:3001/api/new/myNew', {
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
            //request category 
            axios.get('http://localhost:3001/api/categories/public', {
                headers: {
                    'Authorization': 'Bearer ' + loggedUser,
                    'Content-Type': 'application/json'
                }
            }).then(function (response) {
                console.log(response.data);
                setCategory(response.data);
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