import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const useProductID = (): [string | null] => {
  const [productId, setProductId] = useState<string | null>(null);
  const { id }: any = useParams();
  useEffect(() => {
    if (id) {
      setProductId(id);
    } else {
      setProductId(null);
    }
  }, [id]);
  return [productId];
};

export default useProductID;
