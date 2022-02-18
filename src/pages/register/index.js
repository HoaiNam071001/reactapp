import React from 'react';
// import axios from 'axios';
import {Link} from "react-router-dom";
import {useState,useEffect} from 'react';
import './style.css';
var regexEmail = new RegExp("^[a-zA-Z0-9]+@([a-z]+[.])+[a-z]+$");
var seg = "[a-zA-Z1-9]";
var regexUser = new RegExp('^[a-zA-Z]'+seg+seg+seg+seg+seg+seg+seg+'+$');

function Register() {
  const [username,setusername] = useState("");
  const [email,setemail] = useState("");
  const [password,setpassword] = useState("");
  const [repassword,setrepassword] = useState("");
  const [type,settype] = useState('password');
  const [retype,setretype] = useState('password');
  const [control1,setcontrol1] = useState(true);
  const [controls1,setcontrols1] = useState(require("../../asset/icon/password-off.png"));
  const [control2,setcontrol2] = useState(true);
  const [controls2,setcontrols2] = useState(require("../../asset/icon/password-off.png"));

  useEffect(()=>{
    if(control1 === true){
      setcontrols1(require("../../asset/icon/password-on.png"));
      settype('password');
    }
    else{
      setcontrols1(require("../../asset/icon/password-off.png"));
      settype('text');
    }
  },[control1])
  useEffect(()=>{
    if(control2 === true){
      setcontrols2(require("../../asset/icon/password-on.png"));
      setretype('password');
    }
    else{
      setcontrols2(require("../../asset/icon/password-off.png"));
      setretype('text');
    }
  },[control2])
  const checkmail =async ()=>{
    var obj = document.getElementById('img-email-reg');
    obj.setAttribute('src',require('../../asset/icon/id-loading.gif'));
    obj.setAttribute('width','40px');
    var res = await regexEmail.test(email);
    if(res) obj.setAttribute('src',require('../../asset/icon/success.png'));
    else obj.setAttribute('src',require('../../asset/icon/fail.png'));   
    obj.setAttribute('width','6%');
  }
  const checkuser = async ()=>{
    var obj = document.getElementById('img-username-reg');
    obj.setAttribute('src',require('../../asset/icon/id-loading.gif'));
    obj.setAttribute('width','40px');
    var res = await regexUser.test(username);
    if(res) obj.setAttribute('src',require('../../asset/icon/success.png'));
    else obj.setAttribute('src',require('../../asset/icon/fail.png'));   
    obj.setAttribute('width','6%');
  }
  return (
    <div className="container">
    <div className="row">
      <div className="col-xl-3.5 col-lg-3 col-1"></div>
      <div className="col-xl-5 col-lg-6 col-10 register-body">
        <h1 >Sign up</h1>
        <div className="register-item">
          <label htmlFor="yourname-register">UserName</label>
          <div className="pass">
            <input type="text"  id="yourname-register" 
            onChange={(e)=>setusername(e.target.value)}
            onBlur={checkuser}
            placeholder="UserName" value={username}/>
            <img id="img-username-reg" 
            src={require('../../asset/icon/none.png')} width="6%" alt="check"/>
          </div>
          <p></p>

          <label htmlFor="email-register">Email login</label>
          <div className="pass">
            <input type="text"  id="email-register" 
              onChange={(e)=>setemail(e.target.value)}
              onBlur={checkmail}
              placeholder="Email login" value={email}/>
            <img id="img-email-reg" 
              src={require('../../asset/icon/none.png')} 
              width="6%" alt="check"/>
          </div>
          <p ></p>
          
          <label htmlFor="pass-register">Password</label>
          <div className="pass">
            <input type={type} id="pass-register" 
              onChange={(e)=>setpassword(e.target.value)}
              placeholder="Password" value={password}/>
            <button className="pass-control-reg" onClick={()=>setcontrol1(control1===false?true:false)}>
            <img src={controls1} width="20px" alt="ChangeState"/> 
            </button>
          </div>
          <p></p>

          <label htmlFor="re-pass-register">Confirm password</label>
          <div className="pass">
            <input type={retype} id="re-pass-register" 
              onChange={(e)=>setrepassword(e.target.value)}
              placeholder="Password" value={repassword}/>
            <button className="pass-control-reg" onClick={()=>setcontrol2(control2===false?true:false)}>
            <img src={controls2} width="20px" alt="ChangeState"/> 
            </button>
          </div>
          <p></p>

          <button  type="button" className="btn-normal">Sign Up</button>
          <div className="register-login">
            <label>Do you already have an account? &nbsp;</label>
            <Link to="/login">Login</Link>
          </div>
        </div>
      </div>
    </div>
    </div>
    
  );
}
export default Register;
