import React, { useState, useRef } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import "./signup.css";

export const Signup = () => {
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const phone = useRef(null);
  const [isLoading, setLoading] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = {
      name: name.current.value,
      password: password.current.value,
      email: email.current.value,
      number: phone.current.value,
    };
    setLoading(true);
    registerUser(data);

    name.current.value = "";
    password.current.value = "";
    email.current.value = "";
    phone.current.value = "";

    //data to be sent to backend
    console.log(data);

    //data sent and successful
    setLoading(false);
  };

  async function registerUser(content) {
    const response = await fetch("http://localhost:1337/api/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(content),
    });

    const data = await response.json();
    if (data.status === "ok") {
      alert("Registration Successful");
      window.location.href = "/login";
    }
  }

  return (
    <div className="signup-container center">
      <Form onSubmit={handleSubmit}>
        <InputGroup className="mb-3">
          <InputGroup.Text>Full Name</InputGroup.Text>
          <Form.Control
            aria-label="Full Name"
            type="text"
            placeholder="Full Name"
            ref={name}
            required
          />
        </InputGroup>
        <InputGroup className="mb-3">
          <InputGroup.Text>Email address</InputGroup.Text>
          <Form.Control
            type="email"
            placeholder="Enter email"
            ref={email}
            required
          />
        </InputGroup>
        <InputGroup className="mb-3">
          <InputGroup.Text>Mobile number</InputGroup.Text>
          <Form.Control
            type="tel"
            pattern="[0-9]{10}"
            placeholder="Enter mobile number"
            ref={phone}
            required
          />
        </InputGroup>

        <InputGroup className="mb-3">
          <InputGroup.Text>Password</InputGroup.Text>
          <Form.Control
            type="password"
            placeholder="Password"
            ref={password}
            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
            title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
            required
          />
        </InputGroup>
        <Button variant="primary" type="submit" disabled={isLoading}>
          {isLoading ? "loading..." : "Signup"}
        </Button>
      </Form>
    </div>
  );
};
