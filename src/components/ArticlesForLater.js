import React from 'react';
import { useEffect } from 'react';

export default function ArticlesForLater() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className='for-later'>
      <h1>Tu będą twoje zapisane artykuły</h1>
    </div>
  );
}
