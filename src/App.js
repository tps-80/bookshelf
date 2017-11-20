import React from 'react'
import { Link } from 'react-router-dom'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'
import Book from './Book'

class BooksApp extends React.Component {
  state = {
    books: [],
    searchedBooks: [],
    placeholder : "http://placehold.it/183X192"
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState( { books: books })
    });
  }

  updateShelf = (book, newShelf) => {
    BooksAPI.update(book, newShelf).then((books) => { 
      book.shelf = newShelf;
      this.setState( { books: this.state.books.filter((b) => b.id !== book.id).concat(book)});
    });
  }

  onSearch = (query) => { 
    if(query) {  //in case query is empty
      BooksAPI.search(query, 10).then(
        (searchedBooks) => {
          if ( searchedBooks['error'] ) {
              this.setState({searchedBooks: []});
          } else {
            searchedBooks.map((book) => {
              let bookOnShelf = this.state.books.find((b) => b.id === book.id);
              if (bookOnShelf) {
                book.shelf = bookOnShelf.shelf;
              } else {  
                book.shelf = 'none';
              }
              return book;
            })
            this.setState({searchedBooks: searchedBooks})
          }
        }).catch((e) => {this.setState({searchedBooks: []})});
    }
  }

  render() {
  
    return (
      <div className="app">
        <Route exact path="/search" render={() => (
          <div className="search-books">
            <div className="search-books-bar">
              <Link className="close-search" to="/">Close</Link>
              <div className="search-books-input-wrapper">
                <input 
                  type="text" 
                  placeholder="Search by title or author" 
                  onKeyUp={(event) => this.onSearch(event.target.value)}
                  />
              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid">
                {this.state.searchedBooks.map((book) => (
                  <li key={book.id} >
                    <Book 
                      coverStyle={book.imageLinks.thumbnail ?
                      {width: 128, height: 192, backgroundImage: `url(${book.imageLinks.thumbnail})`} : {width: 128, height: 192, backgroundImage: `url(${this.state.placeholder})`}}
                      onUpdateShelf={this.updateShelf} 
                      book={book}
                    />
                  </li>
                ))}</ol>
            </div>
          </div>
          )}/>
        <Route exact path="/" render={() => (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Currently Reading</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                      {this.state.books.filter((book) => book.shelf === "currentlyReading").map((book) => (
                        <li key={book.id} >
                          <Book 
                            coverStyle={{width: 128, height: 192, backgroundImage: `url(${book.imageLinks.thumbnail})`}}
                            onUpdateShelf={this.updateShelf} 
                            book={book}
                          />
                        </li>
                      ))}
                    </ol>
                  </div>
                </div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Want to Read</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                      {this.state.books.filter((book) => book.shelf === "wantToRead").map((book) => (
                        <li key={book.id} >
                          <Book 
                            coverStyle={{width: 128, height: 192, backgroundImage: `url(${book.imageLinks.thumbnail})`}}
                            onUpdateShelf={this.updateShelf} 
                            book={book}
                          />
                        </li>
                      ))}
                    </ol>
                  </div>
                </div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Read</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                      {this.state.books.filter((book) => book.shelf === "read").map((book) => (
                        <li key={book.id} >
                          <Book 
                            coverStyle={{width: 128, height: 192, backgroundImage: `url(${book.imageLinks.thumbnail})`}}
                            onUpdateShelf={this.updateShelf} 
                            book={book}
                          />
                        </li>
                      ))}
                    </ol>
                  </div>
                </div>
              </div>
            </div>
            <div className="open-search">
              <Link to="/search">Add a book</Link>
            </div>
          </div>
          )}/>
      </div>
    )
  }
}

export default BooksApp
