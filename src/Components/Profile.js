import React, { useState } from "react";
import {
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Card,
  Button,
  CardTitle,
  CardText,
  Row,
  Col,
} from "reactstrap";
import MyAccount from "./MyAccount";
import EditAccount from "./EditAccount";

const Profile = () => {
  const [activeTab, setActiveTab] = useState("1");
  const [funMessage, setFunMessage] = useState("");
  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  const handleClick = () => {
    setFunMessage(<h1> 🔥🎊🎊🎊🙌 🙌 🥳🥳🙌 🙌 🎉🎉🙌🙌🎊🎊🎊🔥</h1>);
  };
  return (
    <div>
      <Nav tabs className="Profile-links">
        <NavItem>
          <NavLink
            className="profileTab"
            onClick={() => {
              toggle("1");
            }}
          >
            My Account
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className="profileTab"
            onClick={() => {
              toggle("2");
            }}
          >
            Edit Account
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className="profileTab"
            onClick={() => {
              toggle("3");
            }}
          >
            Settings
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent activeTab={activeTab}>
        <TabPane tabId="1">
          <Row>
            <Col sm="12">
              <MyAccount />
            </Col>
          </Row>
        </TabPane>
        <TabPane tabId="2">
          <Row>
            <Col sm="12">
              <EditAccount />
            </Col>
          </Row>
        </TabPane>
        <TabPane tabId="3">
          <Row>
            <Col sm="6">
              <Card body>
                <CardTitle>HELLO GUYS</CardTitle>
                <CardText>click the button</CardText>
                <Button onClick={handleClick}>Click</Button>
              </Card>
              {funMessage}
            </Col>
          </Row>
        </TabPane>
      </TabContent>
    </div>
  );
};

export default Profile;
