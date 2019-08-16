import React from 'react'
import Books from './Books'

const BookShelf = props => {
    const books = <Books books={props.books} />
    return(
        <div className="bookshelf">
            <h2 className="shelf-title">{props.title}</h2> 
            <div className="shelf-books">{books}</div>
        </div>
    )
}

export default BookShelf;