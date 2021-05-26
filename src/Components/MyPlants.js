import React, { useState, useEffect } from "react";

import { Container, Row, Col } from "reactstrap";
import { SpinnerDiv, Spinner } from "./styled-components/spinner";
import { axiosWithAuth } from "../Components/utils/axiosWithAuth";
import { Button, Form, Input } from "reactstrap";
import PlantCard from "./PlantCard";
// import { DummyData } from "./DummyData";

const MyPlants = () => {
  //   const userId = Number(localStorage.getItem("userId"));
  const [allPlants, setAllPlants] = useState([]);

  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };
  const handleSubmit = (event) => {
    setSearchTerm(event.target["title"].value);
    event.preventDefault();
  };

  useEffect(() => {
    axiosWithAuth()
      .get("/plants")
      .then((res) => {
        setAllPlants(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const gotPlantList = allPlants.length !== 0 ? true : false;

  if (!gotPlantList)
    return (
      <SpinnerDiv>
        <Spinner color="info" />
      </SpinnerDiv>
    );
  else if (gotPlantList)
    return (
      <Container>
        <div>
          <Form onSubmit={handleSubmit}>
            <div className="searchBox">
              <Input
                id="title"
                name="title"
                type="text"
                placeholder="Search items"
                onChange={handleChange}
                value={searchTerm}
              />

              <Button>Search</Button>
            </div>
          </Form>
        </div>
        <Row>
          {allPlants.map((plant) => {
            if (
              plant.nickname &&
              plant.nickname.toLowerCase().includes(searchTerm.toLowerCase())
            ) {
              return (
                <Col xs="12" sm="6" md="4" key={plant.plant_id}>
                  <PlantCard plant={plant} />
                </Col>
              );
            } else return null;
          })}
        </Row>
      </Container>
    );
  // else if (!gotPlantList)
  //   return (
  //     <Container style={{ margin: "50px auto" }}>
  //       <Row>
  //         <Col xs="12" lg={{ size: 4, offset: 4 }}>
  //           <Card>
  //             <CardBody>
  //               No Plants yet? <Link to="/addplants">Add one!</Link>
  //             </CardBody>
  //           </Card>
  //         </Col>
  //       </Row>
  //     </Container>
  //   );
  // else return <></>;
};

export default MyPlants;
