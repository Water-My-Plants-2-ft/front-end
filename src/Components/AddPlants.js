import React, { useState } from "react";
import schema from "../Components/validation/plantSchema";
import * as yup from "yup";
import styled from "styled-components";
import { Container, Row, Col, Button } from "reactstrap";
import axios from "axios";

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

const initialValue = {
  plant_name: "",
  species: "",

  h2o_Frequency: "",
};

//Component for owner to add an item
const AddItem = () => {
  //New item state
  const [item, setItem] = useState(initialValue);
  const history = useHistory();

  //Change handler
  const inputChange = (event) => {
    const { name, value } = event.target;

    validateItem(name, item[name]);
  };

  //Submit handler
  const onSubmit = (event) => {
    event.preventDefault();
    // console.log("New item added");
    // console.log(item);

    // axios
    //   .post("url", item)
    //   .then((res) => {
    //     alert("New Item Added 🤠");
    //     history.push("/items");
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
    setItem(initialValue);
  };

  //Errors state
  const [errors, setErrors] = useState({
    plant_name: "",
    species: "",

    h2o_Frequency: "",
  });

  //Validation
  const validateItem = (name, value) => {
    yup
      .reach(schema, name)
      .validate(value)
      .then(() => {
        setErrors({
          ...errors,
          [name]: "",
        });
      })
      .catch((err) => {
        console.log(err.errors);
        setErrors({
          ...errors,
          [name]: err.errors[0],
        });
      });
  };

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
                  name="plant_name"
                  value={item.plant_name}
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
                  name="h2o_Frequency"
                  type="text"
                  value={item.h2o_Frequency}
                  onChange={inputChange}
                />
              </label>
              <div>
                <Button
                  type="submit"
                  disabled={!item.plant_name || !item.species}
                >
                  Add Plant
                </Button>
              </div>
              <p>{errors.plant_name}</p>
              <p>{errors.species}</p>

              <p>{errors.h2o_Frequency}</p>
            </form>
          </FormContainer>
        </Col>
      </Row>
    </Container>
  );
};

export default AddItem;
