import React, { useRef, useState, useContext } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import "./login.css";
import { Context } from "../App";

export const Login = () => {
  const getContext = useContext(Context);
  const { setIsLoggedIn } = getContext[0];

  const number = useRef(null);
  const password = useRef(null);
  const navigate = useNavigate();
  const [isLoading, setLoading] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = {
      password: password.current.value,
      number: number.current.value,
    };

    setLoading(true);
    loginUser(data);

    password.current.value = "";
    number.current.value = "";

    setLoading(false);
    setIsLoggedIn(true);
    navigate("/exchange");
  };

  async function loginUser(content) {
    const response = await fetch("http://localhost:1337/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(content),
    });
    const data = await response.json();
    if (data.user) {
      alert("Login Successful");
      window.location.href = "/exchange";
    } else {
      alert("Please check Id and password");
    }
  }

  return (
    <div className="login-container center">
      <div>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicNumber">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control
              type="tel"
              pattern="[0-9]{10}"
              placeholder="Enter mobile number"
              ref={number}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              ref={password}
              pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
              title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
              required
            />
          </Form.Group>
          <Button variant="primary" type="submit" disabled={isLoading}>
            {isLoading ? "Logging In..." : "Login"}
          </Button>
        </Form>
        <br></br>
        <div>
          <b>No account?, Register </b>
          <Button
            variant="primary"
            type="submit"
            onClick={() => navigate("/signup")}
          >
            signup
          </Button>
        </div>
      </div>
    </div>
  );
};
