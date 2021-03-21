import React from 'react';
import { useReducer, useEffect } from 'react';
import axios from 'axios';
import { API } from '../utils/utils.js';
import Article from './Article';
import { params } from '../utils/utils.js';
import { useParams } from 'react-router-dom';

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
  const { category } = useParams();
  // const [position, setPosition] = useState[(0, 0)];

  // fetch data

  const fetchData = async (category) => {
    if (category === undefined) {
      params.set('category', 'general');
    } else {
      params.set('category', category);
    }

    const url = API + params.toString();

    try {
      const response = await axios.get(url);

      const data = response.data.articles;

      dispatch({ type: 'FETCH_SUCCESS', payload: data });
    } catch (err) {
      dispatch({ type: 'FETCH_ERROR', payload: err.message });
    }
  };

  useEffect(() => {
    fetchData(category);
    window.scrollTo(0, 0);
  }, [category]);

  const { loading, articles, error } = state;

  console.log(articles);

  return (
    <>
      <main className='container'>
        {loading && <p>Loading data...</p>}
        {error && <p>There is a server problem, please try again later</p>}

        {!articles.length == 0 &&
          articles.map((article, index) => (
            <Article article={article} key={index} />
          ))}
      </main>
    </>
  );
};

export default ListArticles;
