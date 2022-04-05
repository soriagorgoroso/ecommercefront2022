import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
//import TopSeller from "../components/TopSeller";
import UserProfile from "../components/UserProfile";

function User() {
  return (
    <>
      <NavBar />
      <UserProfile />
      {/* <TopSeller /> */}
      <Footer />
    </>
  );
}

export default User;
