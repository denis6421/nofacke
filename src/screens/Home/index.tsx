/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { apiRoutes } from "../../constans";
import useFetch from "../../hooks/useFetch";
import { IProduct } from "../Product/interfaces";

function Home() {
  const [data, fetchData] = useFetch<IProduct[] | null>();

  useEffect(() => {
    fetchData(apiRoutes.getProducts);
  }, []);

  const history = useHistory();
  return (
    <div>
      {data &&
        data.map((e: IProduct) => {
          return (
            <div key={e._id} onClick={() => history.push(`${e._id}`)}>
              {e.name}
            </div>
          );
        })}
    </div>
  );
}

export default Home;
