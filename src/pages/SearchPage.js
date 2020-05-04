import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { search, update } from '../BooksAPI';
import Book from '../components/Book';
class SearchPage extends Component {
  state = { books: [] };
  handleSearchChange = async (e) => {
    if (e.target.value) {
      this.getResults(e.target.value);
    } else {
      this.setState({
        books: [],
      });
    }
  };

  getResults = async (value) => {
    try {
      let response = await search(value);
      if (!response.error) {
        this.setState({ books: response });
      } else {
        this.setState({
          books: [],
        });
      }
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

  handleCategoryChange = async (book, shelf) => {
    try {
      await update(book, shelf);
      this.updateBookShelfs({ ...book, shelf });
    } catch (e) {
      console.log(e);
    }
  };

  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/" className="close-search">
            Close
          </Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              onChange={this.handleSearchChange}
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {this.state.books.map((book, index) => {
              this.props.myBooks.forEach((myBook) => {
                if (myBook.id === book.id) {
                  book.shelf = myBook.shelf;
                }
              });
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

export default SearchPage;
