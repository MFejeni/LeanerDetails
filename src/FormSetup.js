import React from 'react'
import {  Route, BrowserRouter as Router} from 'react-router-dom'
import AddLearnerDetails from './AddLearnerDetails'
import './App.css'


const FormSetup = () =>{
    return(
        <Router>
            <a href='/AddLearnerDetails'>Application Form</a>
            <Route exact path='/AddLearnerDetails' component={AddLearnerDetails} />
        </Router>
    )
}

export default FormSetup