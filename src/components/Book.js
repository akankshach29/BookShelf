import React from 'react'

class Book extends React.Component{
    render(){
        return(
            <div>
                <img className="book-img" src={this.props.book.bookImg} alt="book img" />
                <h4>{this.props.book.title}</h4>
                <h5>{this.props.book.author}</h5>
            </div>
        )
    }
}
export default Book