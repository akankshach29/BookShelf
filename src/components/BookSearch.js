// import React from 'react'
// import book from '../BooksJsonData'

// class BookSearch extends React.Component {
//     state = {
//         value: ''
//     }
//     onInputChange = (event) => {
//         this.setState({ value: event.target.value })
//         console.log(event.target.value)
//         let filteredBook = book.filter(book => book.title === event.target.value)
//         console.log('Searched Book', filteredBook);
//     }
//     render(){
//         // console.log('state', this.state)
//         return(
//             <div>
//                 <div className="books-title">
//                     <h1>My Book Collection</h1>
//                 </div>
//                 <input type="text" onChange={this.onInputChange} value={this.state.value} placeholder="search" />
//             </div>
//         )
//     }
// }
// export default BookSearch