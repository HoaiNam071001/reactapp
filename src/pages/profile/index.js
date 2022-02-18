import React from 'react';
// import axios from 'axios';
// import {Link} from "react-router-dom";
import {useState} from 'react';
import './style.css';
import Avatarmodel from './uploadAvatar';

function Profile() {
  // const [photo,setphoto] = useState(require("../../asset/profile/hoainam07/hoainam.jpg"));
  const [fullname,setfullname] = useState("Nguyễn Hoài Nam");
  const [birthday,setbirthday] = useState("2001-10-07");
  const [address,setaddress] = useState("quy nhơn");
  const [phonenumber,setphonenumber] = useState("0336227712");
  const [email,setemail] = useState("nam125543694@gmail.com");
  const [Cphoto,setCphoto] = useState(true);
  const changeprofile =()=>{
    console.log("success");
  }
  const ChangePhoto = ()=>{
    setCphoto(!Cphoto);
  }
  
  return (
    <div className="container">
      {Cphoto || <Avatarmodel state={ChangePhoto}/>}
    <div className="row">
      <div className="col-xl-2 col-lg-2 col-1"></div>
      <div className="col-xl-8 col-lg-8 col-10 profile-body">
        <h1>My Profile</h1>
        <div className="row">
            <div className="col-xl-4 col-lg-3 col-sm-4 col-12">
                <div className="row">
                    <div className="col-3"></div>
                    <div className="col-xl-12 col-sm-12 col-6 profile-picture">
                      <img id="profile-picture" src={require("../../asset/profile/hoainam07/hoainam.jpg")} width="100%" alt="profile"/>
                      <div>
                        <button id="change-photo-picture"
                        onClick={ChangePhoto}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-camera-fill" viewBox="0 0 16 16">
                          <path d="M10.5 8.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"/>
                          <path d="M2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2zm.5 2a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm9 2.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0z"/>
                        </svg>
                      </button>
                      </div>
                      
                      
                    </div>
                </div>
            </div>
            <div className="col-xl-8 col-lg-9 col-sm-8 col-12">
              <div className="profile-inform">
                <div className="profile-item">
                  <label htmlFor="fullname-profile">Full Name:</label>
                  <input type="text" onChange={(e)=>{setfullname(e.target.value);}}
                  id="fullname-profile" value={fullname}/>
                </div>

                <div className="profile-item">
                  <label htmlFor="birthday-profile">Birthday:</label>
                  <input type="date"  min="1900-1-1"
                  onChange={(e)=>{setbirthday(e.target.value);}}
                  id="birthday-profile" value={birthday}/>                  
                </div>

                <div className="profile-item">
                  <label htmlFor="email-profile">Email:</label>
                  <input type="text"
                  onChange={(e)=>{setemail(e.target.value);}}
                  id="email-profile" value={email}/>
                </div>

                <div className="profile-item">
                  <label htmlFor="address-profile">Address:</label>
                  <input type="text" onChange={(e)=>{setaddress(e.target.value);}}
                  id="address-profile" value={address}/>
                </div>

                <div className="profile-item">
                  <label htmlFor="address-profile">Phone number:</label>
                  <input type="text" onChange={(e)=>{setphonenumber(e.target.value);}}
                  id="address-profile" value={phonenumber}/>
                </div>
              </div>
              
              <button className="btn-normal btn-profile"
                onClick={changeprofile}
              >Save changes</button>
            </div>
        </div>
      </div>
    </div>
    </div>
    
  );
}
export default Profile;
