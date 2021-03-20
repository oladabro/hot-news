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
