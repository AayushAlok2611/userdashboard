import React, { Component } from 'react'
import VideoComponent from './VideoComponent'
import ImageComponent from './ImageComponent'
import WebcamComponent from './WebcamComponent'
import Image from './ImageUpload'


 class CombinedComponent extends Component {
    render() {
        return (
            <div className="row-appear">
                <Image/>
                <VideoComponent/>


            </div>
        )
    }
}

export default CombinedComponent
