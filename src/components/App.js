import Navbar from './Navbar';
import ListArticles from './ListArticles';
import ArticlesForLater from './ArticlesForLater';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className='App'>
        <Navbar />
        <Switch>
          <Route exact path='/:category?'>
            <ListArticles />
          </Route>
          <Route exact path='/articles-for-later'>
            <ArticlesForLater />
            <div>Tutaj będą twoje zapisane artykuły</div>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
