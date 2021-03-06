# MyReads Project

It is a bookshelf app that allows you to select and categorize books you have read, are currently reading, or want to read. The project is build on react providing efficient performance and interactive UI.

## Getting Started

To get started developing right away:

1. Clone the application:
`$ git clone https://github.com/yahyawasim97/reactnd-project-myreads-starter.git`

2. Install the dependencies:
`$ npm install`

3. Start the application:
`$ npm start`

The application would start at http://localhost:3000 by default.

## Functionality

The project contain two pages:

1. Home page: 
    This page displays the all the availble bookshelves providing option with selecting or changing the bookshelf accordindly.
    
2. Search Page:
    This page using the backend api to fetch different books from the backend, these books can be added to bookshelves.


## Backend Server

To simplify your development process, we've provided a backend server for you to develop against. The provided file [`BooksAPI.js`](src/BooksAPI.js) contains the methods you will need to perform necessary operations on the backend:

* [`getAll`](#getall)
* [`update`](#update)
* [`search`](#search)

### `getAll`

Method Signature:

```js
getAll()
```

* Returns a Promise which resolves to a JSON object containing a collection of book objects.
* This collection represents the books currently in the bookshelves in your app.

### `update`

Method Signature:

```js
update(book, shelf)
```

* book: `<Object>` containing at minimum an `id` attribute
* shelf: `<String>` contains one of ["wantToRead", "currentlyReading", "read"]  
* Returns a Promise which resolves to a JSON object containing the response data of the POST request

### `search`

Method Signature:

```js
search(query)
```

* query: `<String>`
* Returns a Promise which resolves to a JSON object containing a collection of a maximum of 20 book objects.
* These books do not know which shelf they are on. They are raw results only. You'll need to make sure that books have the correct state while on the search page.

## Important
The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.

## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). You can find more information on how to perform common tasks [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

## Contributing
The main purpose of this repository is to continue learning React, improving the way it is written.
