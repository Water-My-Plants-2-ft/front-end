import React, { useState, useEffect } from "react";
import { Badge } from "reactstrap";
import { SpinnerDiv, Spinner } from "./styled-components/spinner";

const MyAccount = () => {
  // const [isFetching, setIsFetching] = useState(true);
  // const [formValues, setFormValues] = useState({
  //   username: "",
  //   password: "",
  //   email: "",
  // });

  // useEffect(() => {
  //   axiosWithAuth()
  //     .get("/account")
  //     .then((res) => {
  //       console.log(res);
  //       setFormValues(res.data);
  //       setIsFetching(false);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //       setIsFetching(false);
  //     });
  // }, []);

  // if (isFetching)
  //   return (
  //     <SpinnerDiv>
  //       <Spinner color="info" />
  //     </SpinnerDiv>
  //   );
  // else
  return (
    <div>
      <h1>Account Info</h1>
      <br />
      <br />
      <div>
        <br />
        <br />
        <h2>
          Username: <Badge color="info">username</Badge>
        </h2>
        <br />
        <br />
        <h2>
          Email: <Badge color="info">email</Badge>
        </h2>
        <br />
        <br />
        <h2>
          User ID: <Badge color="info">userid </Badge>
        </h2>
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
