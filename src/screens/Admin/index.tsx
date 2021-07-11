import React from "react";
import CreateProduct from "./components/CreateProduct";
import DeleteProduct from "./components/DeleteProduct";

const Admin = () => {
  return (
    <div className="admin">
      <CreateProduct />
      <DeleteProduct />
    </div>
  );
};

export default Admin;
