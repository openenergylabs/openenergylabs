import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function MailFrom({ status, message, onValidated }) {
  return (
    <Form onSubmit={() => {}}>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>
      <Form.Group controlId="firstName">
        <Form.Label>First name</Form.Label>
        <Form.Control type="text" placeholder="First name" />
      </Form.Group>
      <Form.Group controlId="lastName">
        <Form.Label>Last name</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>
      <Form.Group controlId="phoneNumber">
        <Form.Label>Phone Number</Form.Label>
        <Form.Control type="text" placeholder="Phone Number" />
      </Form.Group>

      <Form.Group controlId="formBasicCheckbox">
        <Form.Label>Receive crowdfunding info &amp; updates?</Form.Label>
        <Form.Check type="checkbox" label="Yes , Please" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default MailFrom;
