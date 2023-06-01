import axios from "axios";
import React, { useState } from "react";
import { Container } from "react-bootstrap";
import {useHistory, useNavigate} from 'react-router-dom';
function AddUser() {
  const [fullName, setFullName] = useState({
    name: "",
    addresh: "",
    email: "",
    rating: "",
  });
  const handle = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setFullName({ ...fullName, [name]: value });
  };
  //const history1=useHistory();
  const history=useNavigate();
  const Submit=async(e)=>{
   e.preventDefault();
   const newArr={...fullName,id:new Date().getTime().toString()}
      await axios.post('http://localhost:3001/restorent',fullName);
      setFullName({name:"",addresh:"",email:"",rating:""})
        history('/');
    // history1.push("/");
  }

  return (
    <>
      <Container className="mt-5">
        <h4>Add User Page</h4>
        <form onSubmit={Submit}>
          <input
            type="text"
            name="name"
            value={fullName.name}
            onChange={handle}
            placeholder="Enter Your Name"
          />
          <br />
          <input
            type="text"
            name="addresh"
            value={fullName.addresh}
            onChange={handle}
            placeholder="Enter Your Addresh"
          />
          <br />
          <input
            type="text"
            name="email"
            value={fullName.email}
            onChange={handle}
            placeholder="Enter Your Email"
          />
          <br />
          <input
            type="text"
            name="rating"
            value={fullName.rating}
            onChange={handle}
            placeholder="Enter Your Rating"
          />
          <br />
          <button type="submit">Submit</button>
        </form>
      </Container>
    </>
  );
}

export default AddUser;
