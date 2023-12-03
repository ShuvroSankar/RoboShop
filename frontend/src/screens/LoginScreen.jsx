import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Form,
  Col,
  Row,
  Button,
  FormGroup,
  FormLabel,
  FormControl,
} from "react-bootstrap";
import FormContainer from "../components/FormContainer";
function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    console.log("submit");
  };
  return (
    <FormContainer>
      <h1>Sign In </h1>
      <Form onSubmit={submitHandler}>
        {/* Email Form */}
        <FormGroup controlId="email" className="my-3">
          <FormLabel>Email Address</FormLabel>
          <FormControl
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></FormControl>
        </FormGroup>
        {/* Password Form */}
        <FormGroup controlId="password" className="my-3">
          <FormLabel>Password</FormLabel>
          <FormControl
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></FormControl>
          <Button type="submit" className="mt-2">
            Sign In
          </Button>
        </FormGroup>
      </Form>
      <Row className="py-2">
        <Col>
          New Customer?<Link to="/register">Register</Link>
        </Col>
      </Row>
    </FormContainer>
  );
}

export default LoginScreen;
