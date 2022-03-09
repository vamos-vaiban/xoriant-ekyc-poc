import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios' 
import { useNavigate } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { CHANGE_STATUS,SAVE_USER_DETAILS } from '../../redux/constants';

export default function Upload() {
    // const navigate = useNavigate()
    // navigate('/home/review')
    const [done,setDone]=useState(false)
    const dispatch = useDispatch()
    const navigation = useNavigate()
    useEffect(()=>{
        if(done==true){
        dispatch({
            type: CHANGE_STATUS,
            payload: {
              label: "Review",
              status: "complete"
            }
        })
        navigation('/home/review')
        }
    })
    
    // let custom_file_upload_url = `http://localhost:4040/uploadFile`;

    let custom_file_upload_url = `${process.env.REACT_APP_BACKEND}:4040/uploadFile`
    const [image_file,setImageFile]=useState(null)
    const [image_preview,setImagePreview]=useState('')
    let user = localStorage.getItem("userData")
    user = JSON.parse(user)
    let handleImagePreview = (e) => {
        let image_as_base64 = URL.createObjectURL(e.target.files[0])
        let image_as_files = e.target.files[0];

        setImageFile(image_as_files)
        setImagePreview(image_as_base64)
        // this.setState({
        //     image_preview: image_as_base64,
        //     image_file: image_as_files,
        // })
    }
    let handleSubmitFile = () => {

        if (image_file !== null){

            let formData = new FormData();
            formData.append('file', image_file);
            // the image field name should be similar to your api endpoint field name
            // in my case here the field name is customFile
            axios.defaults.headers.post['Access-Control-Allow-Origin']="*"
            axios.post(
                custom_file_upload_url,
                formData,
                {
                    headers: {
                        "request_Id":`${user && user["request_Id"]}`,
                        //"Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOlsiYXBpIl0sInVzZXJfbmFtZSI6Ijc1ODgwNjI5MjgiLCJzY29wZSI6WyJyZWFkIiwid3JpdGUiXSwiZXhwIjoxNjQ2NDEwOTg2LCJhdXRob3JpdGllcyI6WyJST0xFX1VTRVIiXSwianRpIjoiOTQ0NjMzMWYtMDg2Ny00MTMwLWJmNDAtMmViMjZiNGE4YjI3IiwiY2xpZW50X2lkIjoiZWt5YyJ9.GzkJHeMD7Dwe432v0wo2ibi0Ege2v2F6fJ8gEtaDemU",
                        "Content-type": "multipart/form-data"
                    },                    
                }
            )
            .then(res => {
                console.log(res.data);
                alert("Video Uploaded Successfully")
                setDone(true)

            })
            .catch(err => {
                console.log(err);
            })
        }
    }
  
        return <div style={{
            display:"flex",
            justifyContent:"center",
            alignItems:"center",
            flexDirection:"column",
            fontFamily: "Hind Vadodara",
            fontStyle: "normal",
            fontWeight: "100",
            fontSize: "2vh",
            color:"black",
        }}>
            note : The video is downloaded with the name verification_video.webm, please choose the same while uploading
        <div style={{
            display:"flex",
            justifyContent:"flex-start",
            flexDirection:"column",
            
            alignItems:"center",
            
        }}>
            <div>
                <input style={{
          }} type="file" id="files" onChange={handleImagePreview} hidden/>
          </div>
          <div>
          <label for="files" style={{
              
          }}>
              Click to select video 
              </label>
              </div>
                <input
                style={{
                    height:"5vh",
                    width:"12vw",
                    background:"#ED2024",
                    fontFamily: "Hind Vadodara",
                    fontStyle: "normal",
                    fontWeight: "500",
                    fontSize: "2vh",
                    borderRadius:"10px",
                    color:"white"
                }}
                 type="submit" onClick={handleSubmitFile} value="Upload File"/>
        </div>
        </div>
   
}
