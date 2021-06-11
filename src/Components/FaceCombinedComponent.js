import React, { Component } from 'react'
import VideoComponent from './VideoComponent'
import ImageComponent from './ImageComponent'
import WebcamComponent from './WebcamComponent'
import MultipleImageComponent from './MultipleImageComponent'
import '../App.css';


 class FaceCombinedComponent extends Component {
    render() {
        return (
            <div className="col-appear">
                <MultipleImageComponent/>
                <VideoComponent/>
            </div>
        )
    }
}

export default FaceCombinedComponent
