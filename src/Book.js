import React, { Component } from 'react'
import BookTop from './BookTop'

class Book extends Component {
    authors = this.props.book.authors

    render() {
        return (
            <div className="book">
                <BookTop 
                    coverStyle={ this.props.coverStyle} 
                    onUpdateShelf={ this.props.onUpdateShelf }
                    book={ this.props.book }
                />
                <div className="book-title">{ this.props.book.title }</div>
                <ol className="book-author-list">
                    <div  className="book-authors">Author:</div>
                    {this.authors.map((author) => (
                        <li key="author" className="book-authors">
                           <div className="book-authors">{author}</div>
                        </li>
                    ))}
                </ol>
            </div>
        )
    }
}

export default Book