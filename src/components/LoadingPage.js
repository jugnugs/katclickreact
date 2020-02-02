import React, { Component } from 'react'
import { Redirect } from 'react-router-dom';

export class LoadingPage extends Component {

    state= {
        redirect: false
    }

    componentDidMount() {
        setTimeout(() => {
            console.log('In the setTimeout function');
            this.setState({redirect : true});
        }, 2000);
    }

    render() {
        if(this.state.redirect) {
            console.log('In the redirect statement');
            return (<Redirect to="/results"/>)
        }
        return (
            <div>
                <div className="chatbox"/>
                <Cat />
                    <div className="flier"></div>
                    <div className="balloonCat"></div>
                    <div className="coinCat"></div>
                    <div className="ninjaCat"></div>
                    <div className="pianoCat"></div>
                    <div className="pirateCat"></div> */}
            </div>
        )
    }

}

function Cat() {
    return (
      <div className="cat" />
    );
}   

export default LoadingPage
