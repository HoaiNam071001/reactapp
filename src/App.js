import './App.css';
import React from 'react';
import Home from './pages/Home';
import Tool from './pages/Tool1';
import Login from './pages/login';
import Register from './pages/register';
import Profile from './pages/profile';
import Footer from './pages/footer';

import { Routes, Route, Link} from "react-router-dom";
import { useState,useEffect} from "react";
// import { ReactSession } from 'react-client-session';



// const themes = [{
//     foreground: "#000000",
//     background: "#eeeeee"
//   },
//   {
//     foreground: "#ffffff",
//     background: "#222222"
//   }
// ];
// export const ThemeContext = React.createContext();

function App() {
  // const [theme,settheme] = useState(0);
  // useEffect(()=>{
  //   console.log(theme)
  // },[theme])
  
  const [dpl,setdpl] = useState('none');  
  const [bgrdrop,setbgrdrop] = useState('rgb(235, 235, 235)');
  useEffect(()=>{
    setbgrdrop(dpl==='block'?'rgb(134, 138, 139)':'rgb(235, 235, 235)');
    if(dpl==='block'){
      const myListener = ()=>{
        setdpl('none');
        window.removeEventListener('click',myListener)
      }
      window.addEventListener('click',myListener) 

    }
  },[dpl])

  return (
    <React.Fragment>
      <header className="App-header">
        <ul>
          <li>
            <Link to="/">HOME</Link>
          </li>
          <li>
            <Link to="/tool">TOOL</Link>
          </li>          
        </ul>
        <div className="right-header">
          {/* <div className="form-check form-switch">
            <label htmlFor="ThemeSwitchCheckChecked">{theme===0?'Light':'Dark'}</label>
            <input onChange={()=>settheme(theme===0?1:0)} className="form-check-input" type="checkbox" id="ThemeSwitchCheckChecked"/>
          </div> */}
          <Link to="/login"><p>Login</p></Link>
          <Link to="/register"><p>Sign up</p></Link>
          <button style={{background:bgrdrop}} onClick={()=>setdpl(dpl==='none'?'block':'none')} className="btn-goto-profile">
            <img  src={require('./asset/icon/caret-down.svg').default} alt="arow"/>
            <div style={{display:dpl}} className="dropdown-profiles">
              <Link to="/profile">Profile</Link>
              <Link to="/login">Log out</Link>
            </div>
          </button>
        </div>
      </header>   
      <div className="body-app"> 
        <Routes>
          <Route path="/" element={<Home/>}/> 
          <Route path="/tool" element={<Tool />}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register />}/>
          <Route path="/profile" element={<Profile />}/>
        </Routes>
      </div>  
      <Footer/>
      </React.Fragment>
  );
}
export default App;

