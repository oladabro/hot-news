export const API = `https://newsapi.org/v2/top-headlines?`;

export const params = new URLSearchParams({
  country: 'pl',
  category: 'general',
  pageSize: 30,
  apiKey: process.env.REACT_APP_API_KEY,
});

// const address = `https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${process.env.REACT_APP_API_KEY}`;

// const address = `https://newsapi.org/v2/top-headlines?sources=nbc-news,business-insider&apiKey=${process.env.REACT_APP_API_KEY}`;
// const address = `https://newsapi.org/v2/top-headlines?country=${country}&category=general&pageSize=30&apiKey=${process.env.REACT_APP_API_KEY}`;

// const address = `https://newsapi.org/v2/sources?country=us&apiKey=${process.env.REACT_APP_API_KEY}`;
