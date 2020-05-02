import React, { Component } from 'react';
import BookShelf from './BookShelf';
import { getAll } from '../BooksAPI';
class BookShelfList extends Component {
  state = {
    books: [],
  };

  componentDidMount() {
    this.fetchBooks();
  }

  fetchBooks = async () => {
    try {
      let response = await getAll();
      this.setState({
        books: response,
      });
    } catch (e) {
      console.log(e);
    }
  };

  updateBookShelfs = (book) => {
    let books = [...this.state.books];
    let index = books.findIndex((b) => b.title === book.title);
    books[index] = book;
    this.setState({
      books,
    });
  };
  render() {
    return (
      <div className="list-books-content">
        {/* Currently Reading */}
        <BookShelf
          title="Currently Reading"
          books={this.state.books.filter((b) => b.shelf === 'currentlyReading')}
          updateBookShelfs={this.updateBookShelfs}
        />
        {/* Want to Read */}
        <BookShelf
          title="Want to Read"
          books={this.state.books.filter((b) => b.shelf === 'wantToRead')}
          updateBookShelfs={this.updateBookShelfs}
        />
        {/* Read */}
        <BookShelf
          title="Read"
          books={this.state.books.filter((b) => b.shelf === 'read')}
          updateBookShelfs={this.updateBookShelfs}
        />
      </div>
    );
  }
}

export default BookShelfList;
