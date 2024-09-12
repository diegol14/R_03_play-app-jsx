
import './App.css';
import React, {useRef} from 'react';
import video from "./assets/videoBatu.mp4"

function App() {

  const videoRef=useRef(null);
  const videoPlay=()=>{
    videoRef.current.play();
  }
  const videoPause=()=>{
    videoRef.current.pause();
  }

  return (
    <div className='App'>
      <div className='App'><h1 >BATÚ</h1>
      <video ref={videoRef} width='600px' height='500px'>
      <source src={video} type='video/mp4'></source>
      </video>
    </div>
    <button onClick={videoPlay}>PLAY</button>
    <button onClick={videoPause}>PAUSE</button>
    </div>
  );
}

export default App;
