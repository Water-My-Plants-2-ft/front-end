import React, { useState } from "react";
// import schema from "../Components/validation/plantSchema";
// import * as yup from "yup";
import styled from "styled-components";
import { Container, Row, Col, Button } from "reactstrap";

import { axiosWithAuth } from "../Components/utils/axiosWithAuth";

import { useHistory } from "react-router";

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
const userID = window.localStorage.getItem("id");
const initialValue = {
  nickname: "",
  species: "",
  h2ofrequency: "",
  user_id: userID,
};

//Component for owner to add an item
const AddItem = () => {
  //New item state
  const [item, setItem] = useState(initialValue);
  const history = useHistory();

  //Change handler
  const inputChange = (e) => {
    setItem({
      ...item,
      [e.target.name]: e.target.value,
    });

    //validateItem(name, item[name]);
  };

  //Submit handler
  const onSubmit = (event) => {
    event.preventDefault();

    axiosWithAuth()
      .post("/plants", item)
      .then((res) => {
        console.log("New item added");
        console.log(item);
        // alert("New Item Added 🤠");

        history.push("/myplants");
      })
      .catch((err) => {
        console.log(err);
      });
    setItem(initialValue);
  };

  //Errors state
  // const [errors, setErrors] = useState({
  //   nickname: "",
  //   species: "",
  //   h2ofrequency: "",
  // });

  //Validation
  // const validateItem = (name, value) => {
  //   yup
  //     .reach(schema, name)
  //     .validate(value)
  //     .then(() => {
  //       setErrors({
  //         ...errors,
  //         [name]: "",
  //       });
  //     })
  //     .catch((err) => {
  //       console.log(err.errors);
  //       setErrors({
  //         ...errors,
  //         [name]: err.errors[0],
  //       });
  //     });
  // };

  return (
    <Container>
      <Row>
        <Col xs="12" md={{ size: 6, offset: 3 }}>
          <FormContainer>
            <h3>Add an Plant</h3>
            <form onSubmit={onSubmit}>
              <label>
                Plant Name:
                <Input
                  name="nickname"
                  value={item.nickname}
                  onChange={inputChange}
                />
              </label>
              <label>
                Species:
                <Input
                  name="species"
                  type="text"
                  value={item.species}
                  onChange={inputChange}
                />
              </label>
              <br />
              <label>
                h2o_Frequency:
                <Input
                  name="h2ofrequency"
                  type="text"
                  value={item.h2ofrequency}
                  onChange={inputChange}
                />
              </label>
              <div>
                <Button type="submit">Add Plant</Button>
              </div>
              {/* <p>{errors.nickname}</p>
              <p>{errors.species}</p>

              <p>{errors.h2ofrequency}</p> */}
            </form>
          </FormContainer>
        </Col>
      </Row>
    </Container>
  );
};

export default AddItem;
