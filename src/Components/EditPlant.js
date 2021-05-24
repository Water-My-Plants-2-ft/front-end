import React, { useState, useEffect } from "react";

import { useParams } from "react-router-dom";
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
const EditPlant = () => {
  const { plant_id } = useParams();
  const [item, setItem] = useState(initialValue);
  const history = useHistory();

  useEffect(() => {
    console.log(useParams);
    console.log(plant_id);
    // axios
    //   .get(`/myplants/${plant_id}`)
    //   .then((res) => {
    //     console.log("item edit response", res.data);
    //     setItem(res.data);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  }, [plant_id]);

  //Change handler
  const onChange = (e) => {
    const { name, value } = e.target;
    setItem({ ...item, [name]: value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const newItem = {
      plant_name: item.plant_name.trim(),
      species: item.species.trim(),

      category: item.category.trim(),
    };
    axios
      .put(`/myplants/${plant_id}`, newItem)
      .then((res) => {
        console.log(res);
        setItem(initialValue);
        history.push("/myplants");
      })
      .catch((err) => {
        alert(err.response.data.message);
      });
  };

  return (
    <Container>
      <Row>
        <Col xs="12" md={{ size: 6, offset: 3 }}>
          <FormContainer>
            <h3>Edit Plant</h3>
            <form onSubmit={submitHandler}>
              <label>
                Plant Name:
                <Input
                  name="plant_name"
                  value={item.plant_name}
                  onChange={onChange}
                />
              </label>
              <label>
                Species:
                <Input
                  name="species"
                  type="text"
                  value={item.species}
                  onChange={onChange}
                />
              </label>
              <br />
              <label>
                h2o_Frequency:
                <Input
                  name="h2o_Frequency"
                  type="text"
                  value={item.h2o_Frequency}
                  onChange={onChange}
                />
              </label>
              <div>
                <Button
                  type="submit"
                  // disabled={!item.plant_name || !item.species}
                >
                  Edit Plant
                </Button>
              </div>
            </form>
          </FormContainer>
        </Col>
      </Row>
    </Container>
  );
};

export default EditPlant;
