import React, { useState } from "react";
import { apiRoutes } from "../../../constans";
import useFetch from "../../../hooks/useFetch";
import usePost from "../../../hooks/usePost";
import { IProduct, PRODUCT_TYPES } from "../../Product/interfaces";

const CreateProduct = () => {
  const [response, postData, error, loading] = usePost();

  const [name, setName] = useState("");
  const [country, setCountry] = useState("");
  const [type, setType] = useState("");
  const [batch, setBatch] = useState("");
  const [amount, setAmount] = useState(0);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (name && country && type && batch && amount) {
      const obj = { name, country, type, batch };
      const data = handleData(obj, amount);
      postData(apiRoutes.createProduct, data);
    }
  };

  const handleData = (product: IProduct, amount: number) => {
    let arr = [];
    for (let i = 0; i < amount; i++) {
      arr.push(product);
    }
    return arr;
  };

  return (
    <form onSubmit={onSubmit} className="admin-create">
      <div className="admin-create-section">
        <p>Name: </p>
        <input
          value={name}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setName(e.target.value)
          }
        />
      </div>
      <div className="admin-create-section">
        <p>Country: </p>
        <input
          value={country}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setCountry(e.target.value)
          }
        />
      </div>
      <div className="admin-create-section">
        <p>Type:</p>
        <select onChange={(e: any) => setType(e.target.value)}>
          <option>{PRODUCT_TYPES.JEANS}</option>
          <option>{PRODUCT_TYPES.SHOES}</option>
          <option>{PRODUCT_TYPES.WATCH}</option>
        </select>
      </div>
      <div className="admin-create-section">
        <p>Batch number: </p>
        <input
          value={batch}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setBatch(e.target.value)
          }
        />
      </div>
      <div className="admin-create-section">
        <p>Amount: </p>
        <input
          type="number"
          value={amount}
          onChange={(e: any) => setAmount(e.target.value)}
        />
      </div>
      <input type="submit" value="Create" />
    </form>
  );
};

export default CreateProduct;
