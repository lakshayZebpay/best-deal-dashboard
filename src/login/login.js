import React, { useRef, useState, useContext } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import "./login.css";
import { Context } from "../App";
import postData from "../Calls/postData";

export const Login = () => {
  const getContext = useContext(Context);
  const { setIsLoggedIn } = getContext[0];
  const { setUserData } = getContext[1];

  const username = useRef(null);
  const password = useRef(null);
  const navigate = useNavigate();
  const [isLoading, setLoading] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = {
      password: password.current.value,
      username: username.current.value,
    };
    setLoading(true);
    loginUser(data);

    password.current.value = "";
    username.current.value = "";
  };

  async function loginUser(content) {
    postData("http://localhost:1337/api/login", content)
      .then((data) => {
        if (data.user) {
          setUserData(data.userData);
          alert("Login Successful");
          window.localStorage.setItem("token", data.token);
          window.localStorage.setItem("isLoggedIn", true);

          navigate("/exchange");
          setIsLoggedIn(data.user);
        } else {
          alert("Password is Wrong");
        }
      })
      .catch((err) => {
        alert("Server Error 500 " + err);
      })
      .finally(() => {
        setLoading(false);
      });
  }

  return (
    <div className="login-container center">
      <div>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicNumber">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Email/Phone number"
              ref={username}
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
