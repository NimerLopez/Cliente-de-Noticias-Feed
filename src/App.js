import logo from './logo.svg';
import './App.css';
import Login from './Components/Login/login';
import Home from './Components/Home/home';
import Footer from './Components/Footer/footer';
import Register from './Components/Register/register';
import Header from './Components/Header/header';
import Newsources from './Components/CRUDS/Newsources/newsources';
import { Route, Routes } from 'react-router-dom';
//npm install axios
//npm install react-router-dom
function App() {
  return (
    <div className="App">
       <Header></Header> 
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/register' element={<Register/>}/> 
        <Route path='/newSource' element={<Newsources/>}/>     
    
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
