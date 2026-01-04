import React from "react";
import { Outlet } from "react-router-dom";

function Account({ cart, clearCart }) {
  // Pass cart & clearCart via outlet context
  return <Outlet context={{ cart, clearCart }} />;
}

export default Account;
