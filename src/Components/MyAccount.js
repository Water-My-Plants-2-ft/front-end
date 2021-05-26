import React, { useState, useEffect } from "react";
import { Badge } from "reactstrap";
import { SpinnerDiv, Spinner } from "./styled-components/spinner";
import { axiosWithAuth } from "../Components/utils/axiosWithAuth";
import { useParams } from "react-router-dom";
// import { Auth0Provider, useAuth0 } from "@auth0/auth0-react";
const userID = window.localStorage.getItem("id");
const MyAccount = (props) => {
  // const { user_id } = useParams();

  // const [isFetching, setIsFetching] = useState(false);
  const [id, setId] = useState(userID);
  const [formValues, setFormValues] = useState({
    username: "",
    password: "",
    phone: "",
  });
  // const userID = window.localStorage.getItem("id");
  // console.log(userID);
  // setId(JSON.parse(userID));

  useEffect(() => {
    axiosWithAuth()
      .get(`/users/${id}`)
      .then((res) => {
        console.log(res);

        setFormValues(res.data);
        // setIsFetching(false);
      })
      .catch((err) => {
        console.log(err);
        // setIsFetching(false);
      });
  }, []);

  if (!formValues)
    return (
      <SpinnerDiv>
        <Spinner color="info" />
      </SpinnerDiv>
    );
  else
    return (
      <div>
        <h1>Account Info</h1>
        <br />
        {/* {setId(localStorage.getItem("id"))} */}
        {/* {setId(JSON.parse(localStorage.getItem("id")))} */}
        <br />
        <div>
          <br />
          <br />
          <div className="title">
            <h2>Username: {formValues.username}</h2>
          </div>
          <br />
          {/* {setId(JSON.parse(userID))} */}
          <br />
          <div className="title">
            <h2>Phone #: {formValues.phone}</h2>
          </div>
          <br />
          <br />
          <div className="title">
            <h2>user id: {formValues.user_id}</h2>
          </div>
          <br />
          <br />

          <h2>
            Password: <Badge color="secondary"> 🤫 🤐 😶</Badge>
          </h2>
        </div>
      </div>
    );
};

export default MyAccount;
