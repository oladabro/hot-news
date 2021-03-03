import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';

const ListArticles = () => {
  const [articles, setArticles] = useState([]);

  // fetch data

  useEffect(() => {
    console.log('chce załadować dane');
  }, []);
  // const getData = async () => {
  //   const response = await fetch(
  //     'https://newsapi.org/v2/top-headlines?country=us&apiKey=ae78270a03ee4563909ff5b718228bd7',
  //     // 'https://newsapi.org/v2/everything?q=morawiecki&apiKey=ae78270a03ee4563909ff5b718228bd7',
  //     {
  //       method: 'GET',
  //       // headers: {
  //       //   'x-rapidapi-key':
  //       //     '2dad272f2bmsh218b44d9b7874a6p1bcef1jsn0a61d3a434a6',
  //       //   'x-rapidapi-host': 'community-hacker-news-v1.p.rapidapi.com',
  //       // },
  //     }
  //   );

  //   const data = await response.json();
  //   // setArticles(data);
  //   console.log(response);
  // };

  // getData().then((data) => {
  //   console.log(data.articles);
  //   let template = '';

  //   data.map((article) => {
  //     template = `<div>${article.author}</div>`;
  //   });
  // });

  return <div>Here will be list of articles</div>;
};

export default ListArticles;
