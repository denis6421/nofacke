import React, { useState } from "react";
import { apiRoutes } from "../../../constans";
import usePost from "../../../hooks/usePost";

const DeleteProduct = () => {
  const [itemToDelete, setItemToDelete] = useState("");
  const [postData] = usePost();

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (itemToDelete) {
      postData(apiRoutes.deleteProduct, { id: itemToDelete });
    }
  };

  return (
    <form onSubmit={onSubmit} className="admin-delete">
      <div className="admin-delete-section">
        <p>Item to delete: </p>
        <input
          value={itemToDelete}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setItemToDelete(e.target.value)
          }
        />
      </div>
      <input type="submit" value="Delete" />
    </form>
  );
};

export default DeleteProduct;
