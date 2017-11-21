import React, { Component } from 'react'
import Book from './Book'

class Shelf extends Component {

    render() {
        return (
            <div className="bookshelf">
              <h2 className="bookshelf-title">{this.props.shelfName.text}</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                  {this.props.books.filter((book) => book.shelf === this.props.shelfName.name).map((book) => (
                    <li key={book.id} >
                      <Book 
                        coverStyle={book.imageLinks.thumbnail ?
                        {backgroundImage: `url(${book.imageLinks.thumbnail})`} : {backgroundImage: `url(${this.state.placeholder})`}}
                        onUpdateShelf={this.props.onUpdateShelf} 
                        book={book}
                      />
                    </li>
                  ))}
                </ol>
              </div>
            </div>
        )
    }
}

export default Shelf