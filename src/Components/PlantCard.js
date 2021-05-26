import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router";
import { useParams } from "react-router-dom";
import { axiosWithAuth } from "../Components/utils/axiosWithAuth";

import {
  Card as ReactCard,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from "reactstrap";
import plantpic from "../img/plantpic.jpg";

const Card = styled(ReactCard)`
  margin-bottom: 50px;
`;

const PlantCard = ({ plant }) => {
  const { plant_id } = useParams();
  const history = useHistory();

  const routeToPlantEdit = (e, plant) => {
    e.preventDefault();
    history.push(`/editplant/${plant.plant_id}`);
  };

  const deletePlant = (id) => {
    axiosWithAuth()
      .delete(`/plants/${plant.plant_id}`)
      .then((res) => {
        console.log(res);
        // console.log("Delete:", res.data.message);
        window.location.reload();
      })
      .catch((err) => console.log(err));
  };
  // console.log(plant);
  return (
    <Card>
      <CardImg top width="100%" src={plantpic} alt="plant" />
      <CardBody>
        <CardTitle tag="h5">nickname: {plant.nickname}</CardTitle>
        {/* <CardSubtitle tag="h5" className="mb-2 text-muted">
          {subtitle}
        </CardSubtitle> */}
        <CardSubtitle tag="h5" className="mb-2 text-muted">
          {" "}
          Species: {plant.species}
        </CardSubtitle>
        {/* <Badge color="secondary">Species: {plant.species}</Badge> */}
        <CardTitle>When to water plant? {plant.h2ofrequency}</CardTitle>
        {/* <CardSubtitle tag="h5"> Daily Rental: {plant.price}</CardSubtitle> */}
      </CardBody>

      <CardBody>
        <Button
          onClick={(e) => routeToPlantEdit(e, plant)}
          key={plant.plant_id}
        >
          Edit Plant
        </Button>
        <br />
        <br />
        <Button onClick={() => deletePlant(plant_id)}>Delete Plant</Button>
      </CardBody>
    </Card>
  );
};

export default PlantCard;
