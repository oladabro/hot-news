import React from 'react';
import { useReducer, useEffect } from 'react';
import axios from 'axios';

const initialState = {
  articles: [],
  loading: true,
  error: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_SUCCESS':
      return {
        loading: false,
        articles: action.payload,
        error: false,
      };
    case 'FETCH_ERROR':
      return {
        loading: false,
        error: action.payload,
        articles: [],
      };
    default:
      return state;
  }
};

const ListArticles = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // fetch data

  const fetchData = async () => {
    try {
      const response = await axios.get(
        'https://newsapi.org/v2/top-headlines?country=us&apiKey=ae78270a03ee4563909ff5b718228bd7'
      );
      const data = response.data.articles;
      dispatch({ type: 'FETCH_SUCCESS', payload: data });
    } catch (err) {
      dispatch({ type: 'FETCH_ERROR', payload: err.message });
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const { loading, articles, error } = state;

  return (
    <>
      <div>
        {loading && <p>Loading data...</p>}
        {error && <p>There is a server problem, please try again later</p>}
        {!articles.length == 0 && articles[0].author}
      </div>
    </>
  );
};

export default ListArticles;
