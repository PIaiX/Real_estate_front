import React from "react";

export default function FormErrorMessage(props) {
  return <div className="text-danger mt-1 ms-1 fs-09">{props.children}</div>;
}
