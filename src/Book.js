import React, { Component } from 'react'
import BookTop from './BookTop'

class Book extends Component {
    authors = this.props.bookAuthors

    render() {
        return (
            <div className="book">
                <BookTop coverStyle={ this.props.coverStyle} />
                <div className="book-title">{ this.props.bookTitle }</div>
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