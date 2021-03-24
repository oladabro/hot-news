import Header from './Header';
import ListArticles from './ListArticles';
import ArticlesForLater from './ArticlesForLater';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    console.log('dzień dobry');
  });
  return (
    <Router>
      <div className='App'>
        <Header />
        <Switch>
          <Route path='/articles-for-later'>
            <ArticlesForLater />
          </Route>
          <Route path='/:category?'>
            <ListArticles />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
