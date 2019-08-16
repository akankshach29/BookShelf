import React from 'react'
import book from '../BooksJsonData'

class Book extends React.Component{
    render(){
        return(
            <div>
                <h1>{book.title}</h1>
                <h2>{book.author}</h2>
            </div>
        )
    }
}
export default Book