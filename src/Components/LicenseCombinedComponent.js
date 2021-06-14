import React, { useState} from 'react'
import VideoComponent from './VideoComponent'
import ImageComponent from './ImageComponent'
import WebcamComponent from './WebcamComponent'
import MultipleImageComponent from './MultipleImageComponent'
import '../App.css';
import TextField from '@material-ui/core/TextField';

 function LicenseCombinedComponent () {
     const [vID,setVID] = useState(null);
     const [vNo,setVNo] = useState(null);
     const [assignee,setAssignee] = useState('');
     const submitHandler = (e) => {
         e.preventDefault();
     }
        return (
            <>
            <form onSubmit={submitHandler}>
                <div>
                    <label className="label2" htmlFor="CompanyVehicleID">Company Vehicle ID</label>
                    <input type ="text" id = "CompanyVehicleID" value={vID} onChange={(e)=>setVID(e.target.value)}/>
                </div>
                <div>
                    <label className="label2" htmlFor="VehicleNumber">Vehicle Number</label>
                    <input type ="text" id = "VehicleNumber" value={vNo} onChange={(e)=>setVNo(e.target.value)}/>
                </div>
                <div>
                    <label className="label2" htmlFor="VehicleAssignee">Vehicle Assignee</label>
                    <input type ="text" id = "VehicleAssignee" value={assignee} onChange={(e)=>setAssignee(e.target.value)}/>
                </div>
                <button>Submit</button>
            </form>
            <div className="col-appear">
                <MultipleImageComponent/>
                <VideoComponent/>
            </div>
            </>
        )
}

export default LicenseCombinedComponent
