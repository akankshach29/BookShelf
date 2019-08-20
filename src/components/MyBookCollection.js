import React from 'react'
import BookShelf from './BookShelf'
import book from '../BooksJsonData'
import Book from './Book'

class MyBookCollection extends React.Component {
    
    state = {
        currentlyReading: [],
        toRead: [],
        read: [],
        value: '',
        filtered: []
    }
    componentDidMount() {
        console.log(window.books);
        
        if(book){
            let currentState = {
                currentlyReading: [],
                toRead: [],
                read: []
            }

            book.forEach(book => {
                if(book.id === '1'){
                    // currentState.currentlyReading.push(book)
                    currentState = { ...currentState, currentlyReading: [ ...currentState.currentlyReading, book ] }
                    // console.log(currentState)            
                }
                if(book.id === '2' || book.id === '4'){
                    currentState = { ...currentState, toRead: [ ...currentState.toRead, book ] }
                }
                if(book.id === '3'){
                    currentState = { ...currentState, read: [ ...currentState.read, book ] }
                }
            })

            this.setState(prev => currentState)
        }
    }
    onInputChange = (event) => {
        this.setState({ value: event.target.value })
        // console.log(event.target.value)
        let filteredBook = book.filter(book => book.title.includes(event.target.value))
        // console.log('Searched Book', filteredBook);
        this.setState({filtered: filteredBook});

    }
    render(){
        // console.log('state', this.state.filtered)
        return(
            <div>
                <div className="books-title">
                    <h1>My Book Collection</h1>
                </div>
                <input type="text" onChange={this.onInputChange} value={this.state.value} placeholder="search" />
                <div className="books-flex">
                    {
                        this.state.filtered.map(eachBook => (
                            <li key={eachBook.id}>
                                <Book book={eachBook} />
                            </li>
                        ))
                    }
                </div>
                <div>
                    <BookShelf title='Currently Reading' books={this.state.currentlyReading} />
                    <BookShelf title='To Read' books={this.state.toRead} />
                    <BookShelf title='Read' books={this.state.read} />
                </div>
            </div>
        )
    }
}

export default MyBookCollection;