import React from 'react'
import { Route } from 'react-router-dom'
import MyBookCollection from './components/MyBookCollection'
import BookSearch from './components/BookSearch'
import './App.css';

const Routes = (props) => (
    <div className="App">
        <Route>
        <Route path='/' component={MyBookCollection} />
        <Route path='/search' component={BookSearch} />
        </Route>
    </div>
)


export default Routes