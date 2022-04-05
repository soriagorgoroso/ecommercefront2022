import React from "react";
import { Tooltip, OverlayTrigger, Button } from "react-bootstrap";
import "./AboutThis.css";

function AboutThis() {
  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Simple tooltip
    </Tooltip>
  );

  return (
    <>
      <div className="buttonUs">
        <OverlayTrigger
          placement="right"
          delay={{ show: 250, hide: 400 }}
          overlay={renderTooltip}
        >
          <Button variant="success">US!!</Button>
        </OverlayTrigger>
      </div>
    </>
  );
}
export default AboutThis;
