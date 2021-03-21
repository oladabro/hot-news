import React from 'react';

function Article({ article }) {
  const style = {
    width: '100%',
  };
  console.log(article.urlToImage);
  return (
    <article className='article'>
      <div className='article-img'>
        {article.urlToImage == null ? (
          <img style={style} src={require('../images/news.jpg').default} />
        ) : (
          <img style={style} src={`${article.urlToImage}`} alt='photo' />
        )}
        <p>{article.source.name}</p>
      </div>
      <div className='article-description'>
        <h3>{article.title}</h3>
        <p>{article.publishedAt.slice(0, 10)}</p>
        <p>{article.description}</p>

        <a href={article.url} target='_blank' className='read-more'>
          Read More
        </a>
      </div>
    </article>
  );
}

export default Article;
