import { useEffect, useState } from "react";
import { AxiosReq } from "../utils/Axios";

function useRequest({ url, body }) {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(null);

  useEffect(() => {
    isLoading(true);
    AxiosReq.post(url, body)
      .then((data) => {
        setData(data);
        setIsLoading(false);
      })
      .catch((err) => {
        setData(null);
        setIsLoading(false);
      });
  }, []);

  return { data, isLoading };
}
