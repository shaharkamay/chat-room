// useAxios hook

import { useState, useEffect } from "react";
import axios from "axios";

// {
//   method: "get",
//   url: "/api/tickets",
//   options: {
//     headers: { accept: "*/*" },
//     params: { limit: 5, searchText: "" },
//   },
// }
const useAxios = (axiosOptions) => {
  const { url, options, method, body } = axiosOptions;

  const [response, setResponse] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  let axiosRequest;

  const fetchData = () => {
    if (method === "get" || method === "delete") {
      axiosRequest = axios[method](url, options);
    } else {
      axiosRequest = axios[method](url, JSON.parse(body));
    }

    axiosRequest
      .then((res) => {
        setResponse(res.data);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchData();
  }, [axiosOptions]);

  return { response, error, loading };
};

export default useAxios;
