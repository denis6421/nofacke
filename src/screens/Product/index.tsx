import React, { Suspense, useEffect } from "react";
import { apiRoutes } from "../../constans";
import { images } from "../../constans/images";
import useFetch from "../../hooks/useFetch";
import Model from "./components/Model";
import useProductUrl from "./hooks/useProductUrl";
import { IProduct } from "./interfaces";

const Product = () => {
  const [productId] = useProductUrl();
  const [data, fetchData, error, loading] = useFetch<IProduct | null>();

  useEffect(() => {
    if (productId) {
      fetchData(`${apiRoutes.getProduct}${productId}`);
    }
  }, [productId]);

  console.log({ data });

  return data ? (
    <div className="product">
      <h4 className="product-name">Name: {data.name}</h4>
      <p className="product-id">ID: {data._id}</p>
      <p className="product-type">Type: {data.type}</p>
      <p className="product-country">Country: {data.country}</p>
      <p className="product-batch">Batch: {data.batch}</p>
      <figure className="product-image">
        {/* <img src={data.avatar} alt="product" /> */}
        <Suspense fallback={<div>loading...</div>}>
          <Model />
        </Suspense>
      </figure>
    </div>
  ) : (
    <p>loading...</p>
  );
};

export default Product;
