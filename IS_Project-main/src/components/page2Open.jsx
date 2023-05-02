import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { FormPage2 } from './page2'

export class RoutingClass extends React.Component {
    render() {
        <Router>
            <Routes>
                <Route exact path="/page2Open" component={<FormPage2 />} />
            </Routes>
        </Router>
    }
}
