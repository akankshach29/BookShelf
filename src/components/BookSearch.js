import React from 'react'
import book from '../BooksJsonData'
import Book from './Book'

class BookSearch extends React.Component {
    state = {
        value: '',
        filtered: []
    }
    onInputChange = (event) => {
        this.setState({ value: event.target.value })
        let filteredBook = book.filter(book => book.title.includes(event.target.value))
        this.setState({filtered: filteredBook});

    }
    render(){
        return(
            <div>
                <div className="books-title">
                    <h1>Books</h1>
                </div>
                <input className="searchbox" type="text" onChange={this.onInputChange} value={this.state.value} placeholder="search book" />
                <div className="books-flex">
                    {
                        this.state.filtered.map(eachBook => (
                            <li key={eachBook.id}>
                                <Book book={eachBook} />
                            </li>
                        ))
                    }
                </div>
            </div>
        )
    }
}
export default BookSearch