import React from 'react';

function Article({ article }) {
  const style = {
    width: '100%',
  };

  return (
    <article className='article'>
      <div className='article-img'>
        <img style={style} src={`${article.urlToImage}`} alt='photo' />
        <p>{article.source.name}</p>
      </div>
      <div className='article-description'>
        <h3>{article.title}</h3>
        <small>{article.publishedAt.slice(0, 10)}</small>
        <p>{article.description}</p>

        <a href={article.url} target='_blank'>
          Read More
        </a>
      </div>
    </article>
  );
}

export default Article;
