import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export const useFetch = ({
  initialData,
  url,
  options = null
}) => {
  const [data, setData] = useState(initialData);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const fetchData = async (url, options) => {
    try {
      setLoading(true);
      const response = await axios.get(url, options);
      console.log(response.data.results);
      setData(response.data.results);
    } catch (error) {
      setError(error.message);

      setTimeout(() => {
        navigate('/')
      }, 3000);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (url) {
      fetchData(url, options);
    }
  }, []);

  return {
    fetchData,
    data,
    loading,
    error
  };
};
