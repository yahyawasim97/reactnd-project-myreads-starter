import React from 'react';
// import * as BooksAPI from './BooksAPI'
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import SearchPage from './pages/SearchPage';

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Router>
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route search="/search" exact component={SearchPage} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
