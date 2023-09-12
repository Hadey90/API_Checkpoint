// src/UserList.js
import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./UserList.css";

function UserList() {
  const [listOfUsers, setListOfUsers] = useState([]);

  useEffect(() => {
    // Make a GET request to the JSONPlaceholder API to fetch the list of users
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        setListOfUsers(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []); // Empty dependency array to run the effect only once

  return (
    <div className="custom-card">
      <h1>List of Users</h1>
      <Row>
        {listOfUsers.map((user) => (
          <Col key={user.id} sm={6} md={4} lg={3}>
            <Card style={{ margin: "1rem" }}>
              <Card.Body>
                <Card.Title className="card-title">{user.name}</Card.Title>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroup.Item>Email: {user.email}</ListGroup.Item>
                <ListGroup.Item>Phone: {user.phone}</ListGroup.Item>
                <ListGroup.Item>Website: {user.website}</ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default UserList;
