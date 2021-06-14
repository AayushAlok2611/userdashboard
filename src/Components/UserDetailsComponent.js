import React, { Component ,useState} from 'react';
import '../App.css';

function UserDetailsComponent() {
  const [orgName,setOrgName] = useState('');
  const [regNo,setRegNo] = useState(null);
  const [address,setAddress] = useState('');
  const [adminName,setAdminName] = useState('');
  const [eID,setEID] = useState(null);
  const submitHandler = (e) => {
    e.preventDefault();
}
  return (
    <div className="UploadForm">
       <br /><br />   
      <h1>Welcome to the Surveillance System</h1>
      <br /> <br />
      <form onSubmit = {submitHandler}>
        <div>
          <label className="label2" htmlFor="OrganisationName">Name of Organisation</label>
          <input type ="text" id = "OrganisationName" value={orgName} onChange={(e)=>setOrgName(e.target.value)}/>
        </div>
        <div >
          <label className="label2" htmlFor="RegistrationNumber">Registration Number</label>
          <input type ="text" id = "RegistrationNumber" value={regNo} onChange={(e)=>setRegNo(e.target.value)}/>
        </div>
        <div>
          <label className="label2" htmlFor="Address">Address</label>
          <textarea id="Address" style={{height:50,width:'20rem'}} value={address} onChange={(e)=>setAddress(e.target.value)}></textarea>
        </div>
        <div>
          <label className="label2" htmlFor="AdminName">Administrator name</label>
          <input type ="text" id = "AdminName" value={adminName} onChange={(e)=>setAdminName(e.target.value)}/>
        </div>
        <div>
          <label className="label2" htmlFor="EmployeeID">Employee ID</label>
          <input type ="text" id = "EmployeeID" value={eID} onChange={(e)=>setEID(e.target.value)}/>
        </div>
        <button>Submit</button>
      </form>
      {/* <FormBatch /> */}
    </div>
  );
}

export default UserDetailsComponent;


// class FormBatch extends Component{
//   constructor(props){
//     super(props);
//   }


//   render(){
    

//     return (
//       <div>
        
//       </div>
     
//     );
//   }
// }
