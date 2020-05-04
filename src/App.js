import React from 'react';
// import * as BooksAPI from './BooksAPI'
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import SearchPage from './pages/SearchPage';

class App extends React.Component {
  state = {
    books: [],
  };

  setBooks = (books) => {
    this.setState({
      books,
    });
  };

  render() {
    return (
      <div className="app">
        <Router>
          <Switch>
            <Route
              path="/"
              exact
              render={() => (
                <HomePage books={this.state.books} setBooks={this.setBooks} />
              )}
            />
            <Route
              search="/search"
              exact
              myBooks={this.state.books}
              render={() => <SearchPage myBooks={this.state.books} />}
            />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
