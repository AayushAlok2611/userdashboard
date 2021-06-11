import React, { Component } from 'react';
import '../App.css';

function UploadForm() {
  return (
    <div className="UplaodForm">
       <br /><br />   
      <h1>Welcome to the Surveillance System</h1>
      <br /> <br />
      <form>
        <div>
          <label className="label2" htmlFor="OrganisationName">Name of Organisation</label>
          <input type ="text" id = "OrganisationName" />
        </div>
        <div >
          <label className="label2" htmlFor="RegistrationNumber">Registration Number</label>
          <input type ="text" id = "RegistrationNumber" />
        </div>
        <div>
          <label className="label2" htmlFor="Address">Address</label>
          <textarea id="Address" style={{height:50,width:'20rem'}}></textarea>
        </div>
        <div>
          <label className="label2" htmlFor="AdminName">Administrator name</label>
          <input type ="text" id = "AdminName" />
        </div>
        <div>
          <label className="label2" htmlFor="EmployeeID">Employee ID</label>
          <input type ="text" id = "EmployeeID" />
        </div>
      </form>
      <FormBatch />
    </div>
  );
}

export default UploadForm;


class FormBatch extends Component{
  constructor(props){
    super(props);
  }


  render(){
    

    return (
      <div>
        
      </div>
     
    );
  }
}
