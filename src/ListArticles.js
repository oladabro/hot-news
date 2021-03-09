import React from 'react';
import { useReducer, useEffect } from 'react';
import axios from 'axios';
import Article from './Article';

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
        `https://newsapi.org/v2/top-headlines?country=gb&apiKey=${process.env.REACT_APP_API_KEY}`
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

  console.log(articles);

  return (
    <>
      <main>
        {loading && <p>Loading data...</p>}
        {error && <p>There is a server problem, please try again later</p>}

        {!articles.length == 0 &&
          articles.map((article, index) => (
            <Article article={article} index={index} />
          ))}
      </main>
    </>
  );
};

export default ListArticles;
