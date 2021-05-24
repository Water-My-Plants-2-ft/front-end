import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");

  const validateForm = () => {
    return (
      name.length > 0 &&
      email.length > 0 &&
      password.length > 0 &&
      phone.length > 0
    );
  };

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <div className="Signup">
      <Form onSubmit={handleSubmit}>
        <Form.Group size="lg" controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control
            autoFocus
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="phone">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control
            type="number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </Form.Group>
      </Form>
    </div>
  );
};

export default SignUp;
