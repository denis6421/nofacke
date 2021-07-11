/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef, useState } from "react";
import api from "../services/api";

const useFetch = <T>(): [T, (url: string) => void, boolean, boolean] => {
  const mountedRef = useRef(true);
  const [error, setError] = useState(false);
  const [data, setData] = useState<any>(null);

  const fetchData = async (customUrl?: string) => {
    if (!customUrl) {
      return;
    }
    if (!mountedRef.current) return;
    setError(false);
    const res = await api.get(customUrl);
    if (!res) {
      setError(true);
    }
    setData(res);
  };

  useEffect(() => {
    return () => {
      mountedRef.current = false;
    };
  }, []);
  return [data, fetchData, error, !data];
};

export default useFetch;
