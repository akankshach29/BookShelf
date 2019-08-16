import React from 'react'
import BookShelf from './BookShelf'
import book from '../BooksJsonData'

class MyBookCollection extends React.Component {
    state = {
        currentlyReading: [],
        toRead: [],
        read: []
    }
    componentDidMount() {
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
                    console.log(currentState)            
                }
                if(book.id === '2'){
                    currentState = { ...currentState, toRead: [ ...currentState.toRead, book ] }
                }
                if(book.id === '3'){
                    currentState = { ...currentState, read: [ ...currentState.read, book ] }
                }
            })

            this.setState(prev => currentState)
        }
    }
    // handleSearch = (book) => {
    //     for(let i = 0; i < book.length; i++){
            
    //     }
    // }
    render(){
        console.log('state', this.state)
        return(
            <div>
                <div className="books-title">
                    <h1>My Book Collection</h1>
                </div>
                <input type="text" onKeyUp={this.handleSearch} placeholder="search" />
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