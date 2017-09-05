import React, { Component } from 'react'
import BookTop from './BookTop'

class Book extends Component {
    render() {
        return (
            <div className="book">
                <BookTop coverStyle={ this.props.coverStyle} />
                <div className="book-title">{ this.props.bookTitle }</div>
                <div className="book-authors">{ this.props.bookAuthor }</div>
            </div>
        )
    }
}

export default Book