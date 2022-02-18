import React from 'react';
// import axios from 'axios';
import {useState, useRef} from 'react';
import './style.css';
import Video from '../ControlVideo';

////////////////////////////////////////////////////////////////
// const initialCount = {count: 0};

// function init(initialCount) {
//   return initialCount;
// }

// function reducer(state, action) {
//   switch (action.type) {
//     case 'increment':
//       return {count: state.count + 1};
//     case 'decrement':
//       return {count: state.count - 1};
//     case 'reset':
//       return init(action.payload);
//     default:
//       throw new Error();
//   }
// }
////////////////////////////////
function Tool() {
  const [time,settime] = useState(0);
  const inp = useRef();
  const clears = useRef();
  const audio = useRef();
  var regexTime = new RegExp("^[1-9][0-9]*$");
  const settimes = ()=>{
    var x = inp.current.value;
    if(regexTime.test(x)){
      settime(x);
      inp.current.disabled = true;
      const setI = setInterval(()=>{
        x--;
        settime(x);
        if(x===0){
          audio.current.autoplay = true;
          audio.current.load();audio.current.volume = 1;
          setTimeout(()=>{
            audio.current.volume = 0.5;
          },1500);
          setTimeout(()=>{
            audio.current.volume = 0.4;
          },2500);
          setTimeout(()=>{
            audio.current.volume = 0.3;
          },2800);
          setTimeout(()=>{
            audio.current.volume = 0.2;
          },2900);
          setTimeout(()=>{
            audio.current.autoplay = false;
            audio.current.load();
          },3000);
          clearInterval(setI); inp.current.disabled = false;
        }

      },1000)
      
      const myListener = ()=>{
        if(x>0)  clearInterval(setI);
        settime(0);inp.current.disabled = false;
        clears.current.removeEventListener('click',myListener)
      }
      clears.current.addEventListener('click',myListener) 
    }
    else{
      inp.current.style.background = "rgb(255, 138, 138)";
      setTimeout(()=>{
        inp.current.style.background = "rgb(255, 255, 255)";
      },1000);
    }
  }

  //const [pass,setpass] = useState("");
 // const [state, dispatchs] = useReducer(reducer, initialCount, init);  
  
  // const submitID = async ()=>{
  //   await axios({
  //     method: 'POST',
  //     url: '/register',
  //     data: {
  //       username: name,
  //       password: pass
  //     }
  //   }).then(res=>{
  //     console.log(res.data);
  //     if(res.data)
  //     document.getElementById('result-register').innerHTML = "Successful";
  //   });
  // }
  // const clearRegister = ()=>{
  //   const username = document.getElementById('your-name');
  //   username.value = "";
  //   document.getElementById('pass-word').value = "";
  //   username.focus();
  // }

  return (
    <div className="container">
    <div className="row">
      <div className="col-xl-3 col-lg-2 col-sm-12"></div>
      <div className="col-xl-6 col-lg-8 col-sm-12 ">
        <div className="tool-time">
          <h1>Đếm ngược</h1>
          <h1 className="time-result">{time}</h1>
          <div>
            <button className="btn-normal-1" onClick={settimes}>Start</button>
            <button ref={clears} className="btn-clear-1" >Clear</button>
          </div>
          
          <label>Input</label>
          <input ref={inp} type="text" placeholder="Number"/>
          <audio ref={audio} src={require('../../asset/audio/YAY.mp3')}/>
        </div>
        <Video src={require("../../asset/video/DUNG-NHU-THOI-QUEN.mp4")}/>

        {/* <div>
          <input type="text" onChange={e=>setname(e.target.value)} id="your-name" className="input-random" placeholder="Name"/>
          <input type="text" onChange={e=>setpass(e.target.value)} id="pass-word" className="input-random" placeholder="Pass"/>
        </div>
        <button onClick={submitID} type="button" id="btn-random-submit" className="btn btn-primary">GO</button>
        <button onClick={clearRegister} className="btn btn-dark btn-clear-random-now">Clear</button>
        <h2 id="result-register">result</h2> */}
      </div>
    </div>
    </div>
    
  );
}
export default Tool;
