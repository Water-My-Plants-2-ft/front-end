import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button } from "reactstrap";

import { axiosWithAuth } from "../Components/utils/axiosWithAuth";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

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

const Error = styled.h4`
  color: red;
`;

const userID = window.localStorage.getItem("id");

const EditAccount = () => {
  // const [id, setId] = useState(userID);
  const [formValues, setFormValues] = useState({
    username: "",
    password: "",
    phone: "",
  });
  // const [alert, setAlert] = useState(false);
  const [error, setError] = useState("");
  const history = useHistory();

  useEffect(() => {
    axiosWithAuth()
      .get(`/users/${userID}`)
      .then((res) => {
        console.log(res);
        // setFormValues(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();
    axiosWithAuth()
      .put(`users/${userID}`, formValues)
      .then((res) => {
        console.log("success");
        history.push("/myaccount");
      })
      .catch((err) => {
        console.log(err);
        console.log(err.response);
        setError(err.response.statusText);
      });
  };
  const onChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <Container>
        <br />
        <br />

        <Error>{error} </Error>
        <Row>
          <Col xs="12" md={{ size: 6, offset: 3 }}>
            <h1>Edit Account</h1>
            <FormContainer>
              <div>
                <div>
                  <form onSubmit={onSubmit}>
                    <div>
                      <Input
                        value={formValues.username}
                        onChange={onChange}
                        name="username"
                        type="text"
                        placeholder="New Username"
                      />
                    </div>
                    <div>
                      <Input
                        value={formValues.phone}
                        onChange={onChange}
                        name="phone"
                        type="phone"
                        placeholder="New Number"
                      />
                    </div>
                    <div>
                      <Input
                        value={formValues.password}
                        onChange={onChange}
                        name="password"
                        type="password"
                        placeholder="New Password"
                      />
                    </div>

                    <Button type="submit">Save Changes!</Button>
                  </form>
                </div>
              </div>
            </FormContainer>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default EditAccount;
