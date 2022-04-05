import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import TopSeller from "../components/TopSeller";
import UserProfile from "../components/UserProfile";
import { Container } from "react-bootstrap";

function User() {
  return (
    <>
      <NavBar />
      <UserProfile />
      <Container>
        <TopSeller />
      </Container>
      <Footer />
    </>
  );
}

export default User;
