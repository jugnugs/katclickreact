import React, { Component} from 'react'
import {Route, Switch} from 'react-router-dom';
import '../index.css'
import LandingPage from './LandingPage'
import LoadingPage from './LoadingPage'
import ResultsPage from './ResultsPage'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false
        }
    }

    render() {
        return (
            <div className="App">
            <Title />
            <Switch>
                <Route exact path="/" component = {LandingPage}/>
                <Route exact path="/loading" component = {LoadingPage}/>
                <Route exact path="/results" component = {ResultsPage}/>
            </Switch>
            </div>
        )
    }
}

// title component
function Title() {
    return (
        <div className="Title">katClick</div>
    );
  }


export default App;