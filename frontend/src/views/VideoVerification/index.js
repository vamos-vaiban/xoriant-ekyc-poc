//import logo from './logo.svg';
//import './App.css';
import { ReactMediaRecorder } from "react-media-recorder";
import { useEffect, useRef } from 'react';
import Upload from './Upload';
import TopBar from "../../components/common/TopBar";

/*
const VideoPreview = ({ stream }: { stream: MediaStream | null }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current && stream) {
      videoRef.current.srcObject = stream;
    }
  }, [stream]);
  if (!stream) {
    return null;
  }
  return <video ref={videoRef} width={500} height={500} autoPlay controls />;
};

const App = () => (
  <ReactMediaRecorder
    video
    render={({ previewStream }) => {
      return <VideoPreview stream={previewStream} />;
    }}
  />
);*/
const VideoPreview=(props)=>{
  const stream=props.stream;
  console.log(stream)
  const videoRef=useRef(null); 
  useEffect(()=>{
    if (videoRef.current && stream) {
      videoRef.current.srcObject = stream;
    }
  },[stream])
  if (!stream) {
    return null;
  }
  return <video ref={videoRef} width={500} height={500} autoPlay controls />;
}
function liveStream(stream){
  const previewStream=stream;
  if(previewStream!=null){
    return <VideoPreview stream={previewStream} />
  }
}
function download(mediaBlobUrl){
  if(mediaBlobUrl!=null){
  return (<a id="mediaDownload" href={mediaBlobUrl} download="video_verification.mp4" style={{display:'none'}}></a>)
}

}
  function Dwn(){
    
    
      const a=document.getElementById("mediaDownload")
      if(a){
        a.click()
      }
    
    return <></>
  }
  function VideoVerification() {
    
    return (
      <div style={{
        paddingTop:"3.5vh"
      }}>
    <div style={{
        display:"flex",
        flexDirection:"column",
        fontFamily: "Hind Vadodara",
        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: "1.8vw",
        lineHeight: "52px",
        justifyContent:"center",
        alignContent:"center"
    }}>
        <div style={{
            width:"83vw",
            height:"15vh",
            display:"flex",
            justifyContent:"center",
            alignItems:"center"
        }}>
            Please Make sure that you are right in front of camera at the time of recording.
        </div>
      <ReactMediaRecorder
      video
      audio={false}
      render={({ status, startRecording, stopRecording, mediaBlobUrl,previewStream}) => (
        <div style={{
            display:"flex",
            flexDirection:"column",
            justifyContent:"space-around"
        }}>
           {/* <p>{status}</p>  */}
          {status=="recording"?<></>:
          <video src={mediaBlobUrl} autoPlay height="300px" style={{
              borderRadius:"15px"
          }} />
        }
            <div style={{
                display:"flex",
                justifyContent:"center",
                alignContent:"center"
            }}>
            
            {status=="recording"?liveStream(previewStream):<></>}
            </div>
          <div style={{
              display:"flex",
              
              justifyContent:"space-around",
              paddingTop:"41px"
          }}>
          <button onClick={startRecording} style={{
              height:"5vh",
              width:"12vw",
              background:"#ED2024",
              fontFamily: "Hind Vadodara",
              fontStyle: "normal",
              fontWeight: "500",
              fontSize: "2vh",
              borderRadius:"10px",
              color:"white"
          }}>Record</button>
          <button onClick={stopRecording} style={{
              height:"5vh",
              width:"12vw",
              background:"#ED2024",
              fontFamily: "Hind Vadodara",
              fontStyle: "normal",
              fontWeight: "500",
              fontSize: "2vh",
              borderRadius:"10px",
              color:"white"
          }}>Stop</button>
          <button onClick={Dwn} style={{
              height:"5vh",
              width:"12vw",
              background:"#ED2024",
              fontFamily: "Hind Vadodara",
              fontStyle: "normal",
              fontWeight: "500",
              fontSize: "2vh",
              borderRadius:"10px",
              color:"white"
          }}>Save Recording</button>
            </div>
            <Upload></Upload>
            {download(mediaBlobUrl)}          
            {/* {Dwn()} */}
          
        </div>
      )}
    />
    
    </div>
    </div>
  );
}

export default VideoVerification;
