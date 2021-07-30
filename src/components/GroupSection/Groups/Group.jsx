import React from "react";
import { Button } from "react-bootstrap";

function Group({ name, imgSrc }) {
  return (
    <div className="d-flex justify-content-between align-items-center my-3 p-2">
      <div>
        <img className="mx-2" src={imgSrc} alt="Person" />
        <span>{name}</span>
      </div>
      <Button
        size="sm"
        variant="outline-dark"
        style={{
          borderRadius: "1rem",
          width: "5rem",
          height: "2rem",
        }}
      >
        Follow
      </Button>
    </div>
  );
}

export default Group;
