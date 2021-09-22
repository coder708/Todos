import React, { useEffect } from "react";

const Alert = ({ type, msg, removeAlert, list }) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      removeAlert();
    }, 900);
    return () => clearTimeout(timeout);
  }, [list]);
  return <p className={`alert ${type}`}>{msg}</p>;
};

export default Alert;
