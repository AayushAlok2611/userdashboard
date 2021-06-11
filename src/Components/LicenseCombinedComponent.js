import React, { Component } from 'react'
import VideoComponent from './VideoComponent'
import ImageComponent from './ImageComponent'
import WebcamComponent from './WebcamComponent'
import MultipleImageComponent from './MultipleImageComponent'
import '../App.css';
import TextField from '@material-ui/core/TextField';

 class LicenseCombinedComponent extends Component {
    render() {
        return (
            <>
            <form>
                <div>
                    <label className="label2" htmlFor="CompanyVehicleID">Company Vehicle ID</label>
                    <input type ="text" id = "CompanyVehicleID" />
                </div>
                <div>
                    <label className="label2" htmlFor="VehicleNumber">Vehicle Number</label>
                    <input type ="text" id = "VehicleNumber" />
                </div>
                <div>
                    <label className="label2" htmlFor="VehicleAssignee">Vehicle Assignee</label>
                    <input type ="text" id = "VehicleAssignee" />
                </div>
            </form>
            <div className="col-appear">
                <MultipleImageComponent/>
                <VideoComponent/>
            </div>
            </>
        )
    }
}

export default LicenseCombinedComponent
