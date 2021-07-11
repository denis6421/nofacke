/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import Img from "../../components/Img";
import LoadingHandler from "../../components/LoadingHandler";
import { apiRoutes } from "../../constans";
import { productImages } from "../../constans/images";
import useFetch from "../../hooks/useFetch";
import ProductLoader from "./components/ProductLoader";
import useProductID from "./hooks/useProductID";
import { IProduct, PRODUCT_TYPES } from "./interfaces";

const Product = () => {
  const [productId] = useProductID();
  const [data, fetchData] = useFetch<IProduct | null>();

  useEffect(() => {
    if (productId) {
      fetchData(`${apiRoutes.getProduct}${productId}`);
    }
  }, [productId]);

  return (
    <div className="product">
      <LoadingHandler isLoading={!data} CustomLoader={<ProductLoader />}>
        <>
          <Img src={productImages[data?.type as PRODUCT_TYPES]} alt="product" />
          <div className="product-details">
            <h4 className="product-details-name">{data?.name}</h4>
            <div className="product-details-data">
              <section>
                <h5>Origin</h5>
                <p>{data?.country}</p>
              </section>
              <section>
                <h5>Batch</h5>
                <p>{data?.batch}</p>
              </section>
              <section>
                <h5>Brand</h5>
                <p>{data?.brand}</p>
              </section>
            </div>
          </div>
        </>
      </LoadingHandler>
    </div>
  );
};

export default Product;
