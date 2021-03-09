import React from 'react';

function Article({ article, index }) {
  const style = {
    width: '40vw',
  };

  return (
    <section key={index} className='article'>
      <div>
        <img style={style} src={`${article.urlToImage}`} alt='photo' />
        <small>{article.source.name}</small>
      </div>
      <h3>{article.title}</h3>
      <small>{article.publishedAt.slice(0, 10)}</small>
      <p>{article.description}</p>
      <a href={article.url} target='_blank'>
        Read More
      </a>
    </section>
  );
}

export default Article;
