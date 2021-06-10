import React from 'react';
import './App.css';
import UplaodForm from './FileUpload';
import ImageComponent from './Components/ImageComponent';
import Navigator from './Components/NavigationBar';
import  {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import WebcamComponent from './Components/WebcamComponent';
import VideoComponent from './Components/VideoComponent';
import CombinedComponent from './Components/CombinedComponent';
import Image from './Components/ImageUpload';





function App() {
  return (
    <div className="App">
      <Router>
      <Navigator />
      <Switch>
      <Route path='/imgupload' exact component={ImageComponent}></Route>
      <Route path='/' exact component={UplaodForm}></Route>
      <Route path='/webcamupload' exact component={WebcamComponent}></Route>
      <Route path='/videoupload' exact component={VideoComponent}></Route>
      <Route path="/combined" exact component={CombinedComponent}></Route>
      <Route path="/img" exact component={Image}></Route>

      </Switch>
      </Router>
    </div>
  );
}

export default App;
