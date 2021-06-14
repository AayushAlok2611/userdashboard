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
     const [age,setAge] = useState('');
     const [gender,setGender] = useState('');

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

    const submitHandler = e => {
        e.preventDefault();
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
                value = {username}
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
                <br/>
                <button onClick={submitHandler}>Submit</button>
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
