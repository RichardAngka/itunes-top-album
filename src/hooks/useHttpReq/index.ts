import axios from "axios";
import { useEffect, useState } from "react";
import { uesHttpReqParams, useHttpReqResponse } from "./types";

const useHttpReq = ({
  method,
  baseUrl,
}: uesHttpReqParams): useHttpReqResponse => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancel = false;

    const request = async () => {
      setIsLoading(true);
      return await axios({ method, url: baseUrl })
        .then(async ({ data }) => {
          if (cancel) return;

          const response = await data;
          setData(response);
          setIsLoading(false);
        })
        .catch((error) => {
          if (cancel) return;

          setError(error);
          setData(null);
          setIsLoading(false);
        });
    };

    request();

    () => () => (cancel = true);
  }, []);

  return { data, error, isLoading };
};

export default useHttpReq;
