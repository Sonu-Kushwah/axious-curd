import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import {useHistory, useNavigate, useParams} from 'react-router-dom';
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
  const {id}=useParams();
  const Submit=async(e)=>{
   e.preventDefault();
   await axios.put(`http://localhost:3001/restorent/${id}`,fullName);
      setFullName({name:"",addresh:"",email:"",rating:""})
        history('/');
  }

  const getAPI=async()=>{
    const result=await axios.get(`http://localhost:3001/restorent/${id}`);
    console.log(result);
    setFullName(result.data)
  }
  useEffect(()=>{
    getAPI();
  },[])
  return (
    <>
      <Container className="mt-5">
        <h4 className="text-center text-primary">Edit User Page</h4>
        <hr/>
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
          <button type="submit">Update</button>
        </form>
      </Container>
    </>
  );
}

export default AddUser;
