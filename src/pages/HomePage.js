import React, { Component } from 'react';
import BookShelfList from '../components/BookShelfList';
import AddBookButton from '../components/AddBookButton';

class HomePage extends Component {
  render() {
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <BookShelfList />
        <AddBookButton />
      </div>
    );
  }
}

export default HomePage;
