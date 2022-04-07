import React from "react";
import NavBar from "../components/NavBar";

import TopSeller from "../components/TopSeller";
import UserProfile from "../components/UserProfile";
import { Container } from "react-bootstrap";

function User() {
  return (
    <>
      <NavBar />
      <UserProfile />
    </>
  );
}

export default User;
