import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function MailFrom({ status, message, onValidated }) {
  let email, fname, lname, phone;
  const handleSubmit = () => {
    console.log(email.value);

    email &&
      fname &&
      lname &&
      phone &&
      email.value.indexOf("@") > -1 &&
      onValidated({
        EMAIL: email.value,
        FIRSTNAME: fname.value,
        LASTNAME: lname.value,
        PHONE: phone.value,
      });
  };
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          ref={(node) => (email = node)}
        />
      </Form.Group>
      <Form.Group controlId="firstName">
        <Form.Label>First name</Form.Label>
        <Form.Control
          type="text"
          placeholder="First name"
          ref={(node) => (fname = node)}
        />
      </Form.Group>
      <Form.Group controlId="lastName">
        <Form.Label>Last name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter email"
          ref={(node) => (lname = node)}
        />
      </Form.Group>
      <Form.Group controlId="phoneNumber">
        <Form.Label>Phone Number</Form.Label>
        <Form.Control
          type="text"
          placeholder="Phone Number"
          ref={(node) => (phone = node)}
        />
      </Form.Group>

      <Form.Group controlId="formBasicCheckbox">
        <Form.Label>Receive crowdfunding info &amp; updates?</Form.Label>
        <Form.Check type="checkbox" label="Yes , Please" />
      </Form.Group>
      {status === "sending" && <div style={{ color: "blue" }}>sending...</div>}
      {status === "error" && (
        <div
          style={{ color: "red" }}
          dangerouslySetInnerHTML={{ __html: message }}
        />
      )}
      {status === "success" && (
        <div
          style={{ color: "green" }}
          dangerouslySetInnerHTML={{ __html: message }}
        />
      )}
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default MailFrom;
