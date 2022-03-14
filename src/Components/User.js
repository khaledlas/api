import React from "react";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";

const User = ({ user }) => {
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>{user.name + " " + user.username}</Card.Title>
          <Card.Text>
            {user.address.street +
              " " +
              user.address.suite +
              " " +
              user.address.city +
              " " +
              user.address.zipcode}
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroupItem>Mail: {user.email}</ListGroupItem>
          <ListGroupItem>Phone: {user.phone}</ListGroupItem>
          <ListGroupItem>Website: {user.website}</ListGroupItem>
          <ListGroupItem>Company: {user.company.name}</ListGroupItem>
        </ListGroup>
        {/* <Card.Body>
          <Card.Link href="#">Company</Card.Link>
          <Card.Link href="#">Geo</Card.Link>
        </Card.Body> */}
      </Card>
    </div>
  );
};

export default User;
