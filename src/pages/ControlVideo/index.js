import { useRef } from "react";
import VideoControl from './Video.js';


function Video(props) {
    const videoRef = useRef();
    // const playvideo = ()=>{
    //     videoRef.current.play();
    // }
    // const pausevideo = ()=>{
    //     videoRef.current.pause();
    // }

  return (
      <div >
        <VideoControl ref={videoRef} src={props.src}/>
        {/* <button onClick={playvideo}>play</button>
        <button onClick={pausevideo}>pause</button> */}
      </div>
  );
}

export default Video;
