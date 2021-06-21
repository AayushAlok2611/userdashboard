import React, { useState ,useEffect} from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import '../App.css';
import TextField from '@material-ui/core/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import {Axios} from "./Axios";


function MultipleImageComponent (props) {

	const handleImageChange = (e) => {
		// console.log(e.target.files)
		if (e.target.files) {
			const filesArray = Array.from(e.target.files).map((file) => URL.createObjectURL(file));
            
			// console.log("filesArray: ", filesArray);

			props.selectedImagesChange(filesArray);
			Array.from(e.target.files).map(
				(file) => URL.revokeObjectURL(file) // avoid memory leak
			);
            // console.log('props.selectedImages',props.selectedImages);
		}
	};

	const renderPhotos = (source) => {
		return source.map((photo) => {
			return <img src={photo} alt="" key={photo} />;
		});
	};

	return (
		<div className="app">
			<div>
                <p style={{fontWeight:'bolder'}}>Image</p>
				<input type="file" id="file" multiple onChange={handleImageChange} />
				<div className="label1">
					<label htmlFor="file" className="image-upload">
						Add Image
					</label>
				</div>
				<div className="result">{renderPhotos(props.selectedImages)}</div>
			</div>
		</div>
	);
}

 function FaceCombinedComponent () {
     const [username,setUsername]  = useState('');
     const [age,setAge] = useState(0);
     const [gender,setGender] = useState('');
     const [selectedVideo,setSelectedVideo] = useState({});
     const [selectedImages,setSelectedImages] = useState([]);

    const usernameChange = e => {
        setUsername(e.target.value);
        console.log('username' , username);
    }

    const ageChange = e => {
        setAge(e.target.value);
        console.log('Age' , age);
    }

    const genderChange = e => {
        setGender(e.target.value);
        console.log('gender' , gender);
    }

    const selectedImagesChange = (filesArray) => {
        setSelectedImages( prevSelectedImages => prevSelectedImages.concat(filesArray) );
    }

    const selectedVideoChange = (video) => {
        setSelectedVideo(video);
    }

    useEffect(()=>{
        console.log(selectedImages);
        console.log(selectedVideo);
    },[selectedImages,selectedVideo])

    const submitHandler = e => {
        e.preventDefault();
        Axios({
            method: 'POST',
            url: '/api/faces',
            data: { userId: 'kunal', lisenceCode: 'abcde' },
          }).then((resp) => {
              console.log(resp)

          }).catch(err => {
              console.log(err);
          })
    }
        return (
            <div>
            <br /> <br />
            <h1>Face Recognition</h1>
            <br /> <br />
            <MuiThemeProvider>
            <React.Fragment>
                <TextField
                id="username" 
                label="User Name"
                defaultValue = {username}
                onChange ={usernameChange}
                />
                <br /><br />
                <TextField
                id="age" 
                label="Age"
                defaultValue = {age}
                onChange ={ageChange}
                />
                <br /><br />
                <TextField
                id="gender" 
                label="Gender"
                defaultValue = {gender}
                onChange ={genderChange}
                />
            <br /><br /><br /><br /><br />
            <div className="col-appear">
                <MultipleImageComponent selectedImages={selectedImages} selectedImagesChange={selectedImagesChange}/>
                <VideoComponent selectedVideo={selectedVideo} selectedVideoChange={selectedVideoChange}/>
            </div>
            <br/> <br/>
                <RaisedButton onClick={submitHandler}>Submit</RaisedButton>
            </React.Fragment>
            </MuiThemeProvider>
            </div>
        )
}


function VideoComponent (props) {
     
    // On file select (from the pop up)
    const onFileChange = event => {
      // Update the state
      props.selectedVideoChange(event.target.files[0]);
    };
    
    // File content to be displayed after
    // file upload is complete
      return (
        <div className="App"> 
            
            <div>
              <p style={{fontWeight:'bolder'}}> Video</p>
                <input type="file"  name="image-upload" id="input2" onChange={onFileChange} />
                <div className="label1">
                  <label className="image-upload" htmlFor="input2">
                      Add Video
                  </label>
                </div>
                <br />
            </div>
        </div>
      );
  }


export default FaceCombinedComponent
