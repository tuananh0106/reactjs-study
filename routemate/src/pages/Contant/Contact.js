import React from "react";
import { Outlet, useNavigate } from "react-router-dom";

export const Contact = () => {
  const navigate = useNavigate();

  const handleSubmit = () => {
    console.log("------");
    return navigate("/");
  };

  return (
    <>
      <div className="component">Contact</div>
      <Outlet />
      <button onClick={handleSubmit}>Back To Home</button>
    </>
  );
};
