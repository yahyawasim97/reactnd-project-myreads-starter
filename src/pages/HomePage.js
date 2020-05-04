import React, { Component } from 'react';
import BookShelfList from '../components/BookShelfList';
import AddBookButton from '../components/AddBookButton';

class HomePage extends Component {
  render() {
    const { books, setBooks } = this.props;
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <BookShelfList books={books} setBooks={setBooks} />
        <AddBookButton />
      </div>
    );
  }
}

export default HomePage;
