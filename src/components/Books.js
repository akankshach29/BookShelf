import React from 'react'
import Book from './Book'

const Books = props => (
    <ul>
        {
            props.books.map(eachBook => (
                <li key={eachBook.id}>
                    <Book book={eachBook} />
                </li>
            ))
        }
    </ul>
)
export default Books