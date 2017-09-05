import React, { Component } from 'react'
import BookTop from './BookTop'

class Book extends Component {
    render() {
        return (
            <div className="book">
                <BookTop coverStyle={ this.props.coverStyle} />
                <div className="book-title">The Hobbit</div>
                <div className="book-authors">J.R.R. Tolkien</div>
            </div>
        )
    }
}

export default Book