import React, { useState} from 'react'
import RaisedButton from 'material-ui/RaisedButton';
import '../App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from '@material-ui/core/TextField';


function MultipleImageComponent (props) {

	const handleImageChange = (e) => {
		// console.log(e.target.files[])
		if (e.target.files) {
			const filesArray = Array.from(e.target.files).map((file) => URL.createObjectURL(file));

			// console.log("filesArray: ", filesArray);

			props.setSelectedImages((prevImages) => prevImages.concat(filesArray));
			Array.from(e.target.files).map(
				(file) => URL.revokeObjectURL(file) // avoid memory leak
			);
		}
	};

	const renderPhotos = (source) => {
		// console.log('source: ', source);
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


function VideoComponent (props) {
     
     // On file select (from the pop up)
     const onFileChange = event => {
       // Update the state
       props.setSelectedVideo(event.target.files[0]);
       console.log(event.target.files[0]);
     };
     
     // On file upload (click the upload button)
     const onFileUpload = () => {
     
       // Create an object of formData
    //    const formData = new FormData();
     
    //    // Update the formData object
    //    formData.append(
    //      "myFile",
    //      this.state.selectedFile,
    //      this.state.selectedFile.name
    //    );
     
    //    // Details of the uploaded file
    //    console.log(this.state.selectedFile);
     
    //    // Request made to the backend api
    //    // Send formData object
    //    axios.post("api/uploadfile", formData);
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
                 <button id="input1" onClick={onFileUpload}/>
                 <div className="label2">
                     <label className="image-upload" htmlFor="input1">
                         Upload Video
                     </label>
                 </div>
                 <br />
             </div>
         </div>
       );
   }



 function LicenseCombinedComponent () {
     const [vID,setVID] = useState(0);
     const [vNo,setVNo] = useState(0);
     const [assignee,setAssignee] = useState('');
     const [selectedVideo,setSelectedVideo] = useState('');
     const [selectedImages,setSelectedImages] = useState([]);

     const submitHandler = (e) => {
         e.preventDefault();
     }
        return (
            <div>
                <MuiThemeProvider>
                <React.Fragment>
                <br/><br/><br/>
                <TextField
                id="CompanyVehicleID" 
                label="Company Vehicle ID"
                value = {vID}
                onChange ={e=>setVID(e.target.value)}
                />
                <br /><br />
                <TextField
                id="VehicleNumber" 
                label="Vehicle Number"
                value = {vNo}
                onChange ={e=>setVNo(e.target.value)}
                />
                <br /><br />
                <TextField
                id="VehicleAssignee" 
                label="Vehicle Assignee"
                value = {assignee}
                onChange ={e=>setAssignee(e.target.value)}
                />
                <br /><br /><br /><br />
                <div className="col-appear">
                <MultipleImageComponent selectedImages={selectedImages} setSelectedImages={setSelectedImages}/>
                <VideoComponent selectedVideo={selectedVideo} setSelectedVideo={setSelectedVideo}/>
                </div>
                <br/> <br/>
                <RaisedButton>Submit</RaisedButton>
                </React.Fragment>
                </MuiThemeProvider>
            </div>
        )
}

export default LicenseCombinedComponent
