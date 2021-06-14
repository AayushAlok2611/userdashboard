import React, { useState} from 'react'
import VideoComponent from './VideoComponent'
import ImageComponent from './ImageComponent'
import WebcamComponent from './WebcamComponent'
import MultipleImageComponent from './MultipleImageComponent'
import RaisedButton from 'material-ui/RaisedButton';
import '../App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from '@material-ui/core/TextField';

 function LicenseCombinedComponent () {
     const [vID,setVID] = useState(0);
     const [vNo,setVNo] = useState(0);
     const [assignee,setAssignee] = useState('');
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
                <br/> <br/>
                <RaisedButton>Submit</RaisedButton>
                <br /><br /><br /><br />
                <div className="col-appear">
                <MultipleImageComponent/>
                <VideoComponent/>
                </div>
                </React.Fragment>
                </MuiThemeProvider>
            </div>
        )
}

export default LicenseCombinedComponent
