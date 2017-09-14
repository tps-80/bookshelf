import React, { Component } from 'react'

class Select extends Component {
    constructor(props) {
        super(props);
        this.state = {value: 'coconut'};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
        alert('Shelf you selected is: ' + event.target.value);
        this.this.props.onUpdateShelf(this.props.book, event.target.value)
    }

    handleSubmit(event) {
        alert('Shelf you selected is: ' + this.state.value);
        event.preventDefault();
    }

    render() {
            console.log('book from Select is', this.props.book)


        return (
            <form>
            <select value={this.state.value} onChange={this.handleChange}>
                <option value="none" disabled>Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
            </select>

            </form>
        )
    }
}


export default Select