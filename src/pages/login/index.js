import React from 'react';
import axios from 'axios';
import {Link} from "react-router-dom";
import {useState,useEffect} from 'react';
import './style.css';
// import Session from 'react-session-api'


function Login() {
  const [username,setusername] = useState("");
  const [password,setpassword] = useState("");
  const [type,settype] = useState('password');
  const [control,setcontrol] = useState(true);
  const [controls,setcontrols] = useState(require("../../asset/icon/password-off.png"));


  const fetchData = async () => {
    const res = await axios({
        method: 'post',
        url: 'http://localhost:3060/api/login',
        data: {
          username: username,
          password: password
        }
      });
      console.log(res.data)
  };

  useEffect(()=>{
    if(control === true){
      setcontrols(require("../../asset/icon/password-on.png"));
      settype('password');
    }
    else{
      setcontrols(require("../../asset/icon/password-off.png"));
      settype('text');
    }
  },[control])
  return (
    <div className="container">
    <div className="row">
      <div className="col-sm-2 col-1"></div>
      <div className="col-sm-8  col-10 login-body">
        <div className="row">
          <div className="col-sm-6 img-login">
            <img src={require("../../asset/img.png")} width="100%" alt="ChangeState"/>
          </div>
          <div className="col-lg-6 col-sm-12 login-main">
            <h1 >Login</h1>
            <div className="login-item">
              <label htmlFor="your-name">UserName</label>
              <div className="login-input" id="username-block">
                <input type="text"  id="your-name"
                  onChange={(e)=>setusername(e.target.value)}
                  placeholder="UserName or Email address" value={username}/>
              </div>
              <br/><label htmlFor="pass-word">Password</label>
              <div className="login-input">
                <input type={type} id="pass-word"
                  onChange={(e)=>setpassword(e.target.value)}
                  placeholder="Password" value={password}/>
                <button className="password-control" onClick={()=>setcontrol(control===false?true:false)}>
                <img src={controls} width="20px" alt="control"/>
                </button>
              </div>
            </div>
          <button onClick={fetchData} type="button" className="btn-login btn-normal">Login</button>
          <div className="login-register">
            <label>Do not have an account? &nbsp;</label>
            <Link to="/register">Sign up</Link>
          </div>
        </div>
        </div>
      </div>
    </div>
    </div>

  );
}
export default Login;
