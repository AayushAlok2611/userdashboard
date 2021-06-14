import React, { useState } from 'react'
import VideoComponent from './VideoComponent'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MultipleImageComponent from './MultipleImageComponent'
import '../App.css';
import TextField from '@material-ui/core/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import Button from '@material-ui/core/Button';

 function FaceCombinedComponent () {
     const [username,setUsername]  = useState('');
     const [age,setAge] = useState(null);
     const [gender,setGender] = useState('');
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
              value = {username}
              onChange ={e => setUsername(e.target.value)}
            />
            <br /><br />
            <TextField
              id="age" 
              label="Age"
              value = {age}
              onChange ={e => setAge(e.target.value)}
            />
            <br /><br />
            <TextField
              id="gender" 
              label="Gender"
              value = {gender}
              onChange ={e => setGender(e.target.value)}
            />
            <br /><br /><br /><br /><br />
            <div className="col-appear">
                <MultipleImageComponent/>
                <VideoComponent/>
            </div>
            </React.Fragment>
            </MuiThemeProvider>
            </div>
        )
}

export default FaceCombinedComponent
