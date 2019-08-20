import React from 'react'
import { Route } from 'react-router-dom'
import MyBookCollection from './components/MyBookCollection'
import BookSearch from './components/BookSearch'
import './App.css';

const Routes = (props) => (
    <div className="App">
        <Route exact path='/' component={MyBookCollection} />
        <Route path='/search' component={BookSearch} />
    </div>
)


export default Routes