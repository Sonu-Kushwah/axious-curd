import React,{useState,useEffect} from "react";
import axios from "axios";
import { Container } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import { useParams } from "react-router-dom";
function User() {
  const { id } = useParams();
  const [data, setData] = useState([]);
  
  const [fullName,setFullName]=useState({
    name:"",
    addresh:"",
    email:"",
    rating:""
  }); 

  const getAPI = async () => {
    const result = await axios.get(`http://localhost:3001/restorent/${id}`);
    console.log(result);
    //setData(result.data);
    setFullName(result.data);
  };
  useEffect(() => {
    getAPI();
  }, []);  
  return (
    <>
      <Container className="mt-5">
        <h4>User Display Page</h4>
        <h2>User ID: {id}</h2>
        <Table>
          <tbody>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Addresh</th>
              <th>Email</th>
              <th>Rating</th>
            </tr>
            <tr>
             <td>{fullName.id}</td>
             <td>{fullName.name}</td>
             <td>{fullName.addresh}</td>
             <td>{fullName.email}</td>
             <td>{fullName.rating}</td>
            </tr>
          </tbody>
        </Table>
      </Container>
    </>
  );
}

export default User;
