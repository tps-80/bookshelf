import React, { Component } from 'react'
import Select from './Select'

class BookTop extends Component {
    render() {
        return (
            <div className="book-top">
                <div className="book-cover" style={ this.props.coverStyle }></div>
                <div className="book-shelf-changer">
                    <Select  
                        onUpdateShelf={ this.props.onUpdateShelf } 
                        book={ this.props.book }
                    />
                </div>
            </div>
        ) 
    }
}

export default BookTop