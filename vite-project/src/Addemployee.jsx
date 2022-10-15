import React from 'react'
import { useState, useEffect } from "react"
import { ListGroup, Card, Button, Form } from "react-bootstrap";
import 'font-awesome/css/font-awesome.min.css';
import API from './API'
const Addemployee = () => {
  const[firstName, setFirstName]=useState("");
    const[middleName, setMiddleName]=useState("");
    const[lastName, setLastName]=useState("");
    const[age, setAge]=useState("");
    const[email, setEmail]=useState("");
    const[salary, setSalary]=useState("");
    const [employeeId, setEmployeeId] = useState(null);
    const [employess, setEmployees] = useState([]);

    useEffect(()=>{
        refreshEmployee()
    },[])

    const refreshEmployee = () => {
        API.get("/")  
        .then((res) => {
          setEmployees(res.data);
          // setName(res[0].name)
            // setGenre(res[0].genre)
            // setStarring(res[0].starring)
            // setMovieId(res[0].id)
          })
          .catch(console.error);
      };
    
      const onSubmit = (e) => {
        e.preventDefault();
        let item = { firstName, middleName, lastName, age, email, salary };
        API.post("/", item).then(() => refreshEmployee());
      };
    
      const onUpdate = (id) => {
        let item = { firstName ,middleName, lastName, age, email, salary };
        API.put(`/${id}/`, item).then((res) => refreshEmployee());
      };
    
      const onDelete = (id) => {
        API.delete(`/${id}/`).then((res) => refreshEmployee());
      };
    
      function selectEmployee(id) {
        let item = employess.filter((employee) => employee.id === id)[0];
        setFirstName(item.firstName);
        setMiddleName(item.middleName);
        setLastName(item.lastName);
        setAge(item.age);
        setEmail(item.email);
        setSalary(item.salary);
        setEmployeeId(item.id);
      }

      return (
        <div className="container mt-5">
          <div className="row">
            <div className="col-md-4">
              <h3 className="float-left">Hire new employee</h3>
              <Form onSubmit={onSubmit} className="mt-4">

                <Form.Group className="mb-3" controlId="formBasicName">
                  <Form.Label> First Name</Form.Label>
                  <Form.Control
                    type="name"
                    placeholder="Enter your firstName"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicName">
                  <Form.Label> Middle Name</Form.Label>
                  <Form.Control
                    type="name"
                    placeholder="Enter your middleName"
                    value={middleName}
                    onChange={(e) => setMiddleName(e.target.value)}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicName">
                  <Form.Label> Last Name</Form.Label>
                  <Form.Control
                    type="name"
                    placeholder="Enter your lastName"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </Form.Group>
    




                <Form.Group className="mb-3" controlId="formBasicGenre">
                  <Form.Label>Age</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="Enter Age"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                  />
                </Form.Group>
    
                <Form.Group className="mb-3" controlId="formBasicStarring">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter your Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Form.Group>


                <Form.Group className="mb-3" controlId="formBasicGenre">
                  <Form.Label>Salary</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="Enter Salary"
                    value={salary}
                    onChange={(e) => setSalary(e.target.value)}
                  />
                </Form.Group>
    
                <div className="float-right">
                  <Button
                    variant="primary"
                    type="submit"
                    onClick={onSubmit}
                    className="mx-2"
                  >
                    Save
                  </Button>
                  <Button
                    variant="primary"
                    type="button"
                    onClick={() => onUpdate(employeeId)}
                    className="mx-2"
                  >
                    Update
                  </Button>
                </div>
              </Form>
            </div>
            <div className="col-md-8 m">
              <table class="table">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">First Name</th>
                    <th scope="col">Middle Name</th>
                    <th scope="col">Last Name</th>
                    <th scope="col">age</th>
                    <th scope="col">Salary</th>
                    <th scope="col"></th>
                  </tr>
                </thead>
                <tbody>
                  {employess.map((employee, index) => {
                    return (
                      <tr key="">
                        <th scope="row">{employee.id}</th>
                        <td> {employee.firstName}</td>
                        <td>{employee.middleName}</td>
                        <td>{employee.lastName}</td>
                        <td>{employee.age}</td>
                        <td>{employee.salary}</td>
                        <td>
                          <i
                            className="fa fa-pencil-square text-primary d-inline"
                            aria-hidden="true"
                            onClick={() => selectEmployee(employee.id)}
                          ></i>
                          <i
                            className="fa fa-trash-o text-danger d-inline mx-3"
                            aria-hidden="true"
                            onClick={() => onDelete(employee.id)}
                          ></i>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      ); 
 
}

export default Addemployee





