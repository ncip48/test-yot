import React from "react";

export const Container = (props) => {
  return (
    <div className="container pt-5">
      <div className="row">{props.children}</div>
    </div>
  );
};
