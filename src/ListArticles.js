const ListArticles = () => {
  // fetch data
  const getData = async () => {
    const response = await fetch(
      'https://community-hacker-news-v1.p.rapidapi.com/topstories.json?print=pretty',
      {
        method: 'GET',
        headers: {
          'x-rapidapi-key':
            '2dad272f2bmsh218b44d9b7874a6p1bcef1jsn0a61d3a434a6',
          'x-rapidapi-host': 'community-hacker-news-v1.p.rapidapi.com',
        },
      }
    );

    const data = await response.json();
    console.log(data[0]);
  };
  getData();
  return <div>Here will be list of articles</div>;
};

export default ListArticles;
