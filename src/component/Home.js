import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import { Link } from "react-router-dom";
function Home() {
  const [data, setData] = useState([]);
  useEffect(() => {
    console.log("first");
    getAPI();
  }, []);
  const getAPI = async () => {
    const result = await axios.get("http://localhost:3001/restorent");
    console.log(result);
    setData(result.data);
  };
  // const getAPI=()=>{
  //   const temp=axios.get('http://localhost:3001/restorent').then((result)=>{
  //     //setData(result.data);
  //     console.log(result);
  //   });
  // }
  const remove = async (id) => {
    await axios.delete(`http://localhost:3001/restorent/${id}`);
    getAPI();
  };
  return (
    <>
      <Container className="mt-5">
        <h4 className="text-center text-primary">
          Fetch Record using Axios and awaid async
        </h4>
        <hr />
        <Table>
          <tbody>
            <tr>
              <th>Id</th>
              <th>No</th>
              <th>Name</th>
              <th>Addresh</th>
              <th>Email</th>
              <th>Rating</th>
              <th>Opration</th>
            </tr>
            {data.map((item, index) => {
              return (
                <tr key={index}>
                  <td>{item.id}</td>
                  <td>{index + 1}</td>
                  <td>{item.name}</td>
                  <td>{item.addresh}</td>
                  <td>{item.email}</td>
                  <td>{item.rating}</td>
                  <td>
                    <Link to={`/User/${item.id}`}>
                      <i class="fa-solid fa-eye me-2 text-dark"></i>
                    </Link>
                    <Link to={`/EditUser/${item.id}`}>
                      <i class="fa-solid fa-pen-to-square me-2 text-success"></i>
                    </Link>
                    <Link>
                      <i
                        class="fa-solid fa-trash me-2 text-danger"
                        onClick={() => remove(item.id)}
                      ></i>
                    </Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </Container>
    </>
  );
}

export default Home;
