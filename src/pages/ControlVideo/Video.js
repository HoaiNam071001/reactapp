import { forwardRef, useImperativeHandle, useRef } from "react";


function Video(props,ref) {
  const video = useRef();
  //dùng để thể hiện tính đóng gói của OOP,
  //nhằm làm cho Component Video không được public ra ngoài để tránh bị những sự cố không ming muốn
  useImperativeHandle(ref, () => {
    return {
      play() {
        video.current.play();
      },
      pause() {
        video.current.pause();
      },
      load() {
        video.current.load();
      }
    };
  });
  return (
      <div>
        <video style={{width:"100%"}} ref={video} src={props.src} loop={true} autoPlay="autoplay" controls/>
      </div>
  );
}

export default forwardRef(Video);
