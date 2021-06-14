import React, { Component } from 'react'
import VideoComponent from './VideoComponent'
import ImageComponent from './ImageComponent'
import WebcamComponent from './WebcamComponent'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MultipleImageComponent from './MultipleImageComponent'
import '../App.css';
import TextField from '@material-ui/core/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import Button from '@material-ui/core/Button';

 class FaceCombinedComponent extends Component {
    render() {
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
            />
            <br /><br />
            <TextField
              id="age" 
              label="Age"
            />
            <br /><br />
            <TextField
              id="gender" 
              label="Gender"
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
}

export default FaceCombinedComponent
