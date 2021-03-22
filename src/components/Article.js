import React from 'react';

function Article({ article }) {
  const style = {
    width: '100%',
  };

  return (
    <article className='article'>
      <div className='article-img'>
        <p>Źródło: {article.source.name}</p>
        {article.urlToImage == null ? (
          <img
            style={style}
            src={require('../images/news.jpg').default}
            alt={article.source.name}
          />
        ) : (
          <img
            style={style}
            src={`${article.urlToImage}`}
            alt={article.source.name}
          />
        )}
      </div>
      <div className='article-description'>
        <h4>{article.title}</h4>
        <p>{article.publishedAt.slice(0, 10)}</p>
        <p>{article.description}</p>

        <a
          href={article.url}
          target='_blank'
          className='read-more'
          rel='noopener noreferrer'
        >
          Read More
        </a>
      </div>
    </article>
  );
}

export default Article;
