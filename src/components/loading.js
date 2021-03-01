import React from "react";
import { Spinner } from "react-bootstrap";

const Load = () => {
  const style = {
    height: "50vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  };
  return (
    <>
      <div style={style}>
        <Spinner animation="border" role="status" size="xl">
          <span className="sr-only">Loading...</span>
        </Spinner>
      </div>
    </>
  );
};

export default React.memo(Load);
