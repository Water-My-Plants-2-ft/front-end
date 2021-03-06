import React, { useState } from "react";
// import * as yup from "yup";
// import schema from "../Components/validation/registrationSchema.js";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { Container, Row, Col, Button } from "reactstrap";
import styled from "styled-components";

const FormContainer = styled.div`
  margin-top: 150px;
  width: 100%;
`;

const Input = styled.input`
  width: 100%;
  padding: 6px 10px;
  border: 1px solid #d5d5d5;
  border-radius: 5px;
  margin-bottom: 15px;
`;

const SignupPage = () => {
  const initialFormValues = {
    username: "",
    password: "",
    phone: "",
  };

  const [formValues, setFormValues] = useState(initialFormValues);

  // const [disabled, setDisabled] = useState(true);
  const history = useHistory();

  const onSubmit = (e) => {
    e.preventDefault();
    axios
      .post(
        "https://water-my-plants-web41-leah.herokuapp.com/api/auth/register",
        formValues
      )
      .then((res) => {
        console.log(res);
        // localStorage.setItem("token", res.data.token);
        history.push("/login");
      })
      .catch((err) => console.log(err));
    // setSubmissionErrors(err.response.data.message));
    setFormValues(initialFormValues);
  };

  const onChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  // useEffect(() => {
  //   schema.isValid(formValues).then((valid) => {
  //     setDisabled(!valid);
  //   });
  // }, [formValues]);

  return (
    <Container>
      <Row>
        <Col xs="12" md={{ size: 6, offset: 3 }}>
          <FormContainer>
            <div className="signup-form">
              <h2>Create an account, then sign in!</h2>
              <br />
              <br />

              <div>
                <form onSubmit={onSubmit}>
                  <div>
                    <Input
                      value={formValues.username}
                      onChange={onChange}
                      name="username"
                      type="text"
                      placeholder="Username"
                    />
                  </div>

                  <div>
                    <Input
                      value={formValues.phone}
                      onChange={onChange}
                      name="phone"
                      type="text"
                      placeholder="Phone Number"
                    />
                  </div>
                  <div>
                    <Input
                      value={formValues.password}
                      onChange={onChange}
                      name="password"
                      type="password"
                      placeholder="Password"
                    />
                  </div>
                  <div></div>
                  <Button type="submit">Sign Up!</Button>
                  <div></div>
                </form>
              </div>
            </div>
          </FormContainer>
        </Col>
      </Row>
    </Container>
  );
};

export default SignupPage;
