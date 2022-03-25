import React from "react";

function Footer() {
  return (
    <>
      <footer className="d-flex flex-wrap py-3 my-4 border-top">
        <div className="col-md-4">
          <div></div>
          <span className="text-muted ms-3">© 2021 Company, Inc</span>
        </div>
        <div>
          <span className="m-4">Twitter</span>
          <span className="m-4">GitHub</span>
          <span className="m-4">Linkedin</span>
          <span className="m-4">Email</span>
        </div>
      </footer>
    </>
  );
}

export default Footer;
