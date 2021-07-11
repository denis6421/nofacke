/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef, useState } from "react";
import api from "../services/api";

const usePost = <T>(): [
  T,
  (url: string, body: any) => void,
  boolean,
  boolean
] => {
  const mountedRef = useRef(true);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<any>(null);

  const post = async (customUrl: string, body: any) => {
    if (!customUrl) {
      return;
    }
    if (!mountedRef.current) return;
    setLoading(true);
    setError(false);
    const res = await api.post(customUrl, body);
    setLoading(false);
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
  return [data, post, error, !data];
};

export default usePost;
