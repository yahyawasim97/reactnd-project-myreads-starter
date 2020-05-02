import React, { Component } from 'react';
import Book from './Book';
import { update } from '../BooksAPI';
class BookShelf extends Component {
  handleCategoryChange = async (book, shelf) => {
    try {
      await update(book, shelf);
      this.props.updateBookShelfs({ ...book, shelf });
    } catch (e) {
      console.log(e);
    }
  };

  render() {
    const { books, title } = this.props;
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{title}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {books.map((book, index) => {
              return (
                <li key={index}>
                  <Book
                    book={book}
                    handleCategoryChange={this.handleCategoryChange}
                  />
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    );
  }
}

export default BookShelf;
