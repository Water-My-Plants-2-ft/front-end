import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router";

import {
  Card as ReactCard,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  Badge,
  CardText,
} from "reactstrap";
import plantpic from "../img/plantpic.jpg";

const Card = styled(ReactCard)`
  margin-bottom: 50px;
`;

const PlantCard = ({ plant }) => {
  const history = useHistory();

  const routeToEdit = (e, item) => {
    e.preventDefault();
    history.push(`/editPlant`);
  };
  return (
    <Card>
      <CardImg top width="100%" src={plantpic} alt="plant" />
      <CardBody>
        <CardTitle tag="h5">Title: {plant.plant_name}</CardTitle>
        {/* <CardSubtitle tag="h5" className="mb-2 text-muted">
          {subtitle}
        </CardSubtitle> */}
        <CardSubtitle tag="h5" className="mb-2 text-muted">
          {" "}
          Species: {plant.species}
        </CardSubtitle>
        {/* <Badge color="secondary">Species: {plant.species}</Badge> */}
        <CardTitle>When to water plant? {plant.h2o_Frequency}</CardTitle>
        {/* <CardSubtitle tag="h5"> Daily Rental: {plant.price}</CardSubtitle> */}
      </CardBody>

      <CardBody>
        <Button onClick={routeToEdit}>Edit Plant</Button>
        <br />
        <br />
        <Button>Delete Plant</Button>
      </CardBody>
    </Card>
  );
};

export default PlantCard;
