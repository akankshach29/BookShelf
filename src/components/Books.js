import React from 'react'
import Book from './Book'

const Books = props => (
    <ul className="books-flex">
        {
            props.books.map(eachBook => (
                <ul key={eachBook.id}>
                    <Book book={eachBook} />
                </ul>
            ))
        }
    </ul>
)
export default Books