import axios from 'axios';
import { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../context/AuthContext'

function useAxios({ url, method, body = null, headers = {} }) {
  const { accessToken } = useContext(AuthContext);
  headers.auth = accessToken;

  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios[method](url, { headers }, body)
      .then(res => {
        setData(res.data);
      })
      .catch(err => {
        setError(err.message);
      })
      .finally(() => {
        setIsPending(false);
      })
  }, [])

  return { data, isPending, error };
}

export default useAxios
