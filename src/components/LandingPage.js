import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom';

export class LandingPage extends Component {
    render() {
        return (
              <div className="App">
                    <Cat />
                    <Upload_/>
  
                    <div className="flier"></div>
                    <div className="balloonCat"></div>
                    <div className="coinCat"></div>
                    <div className="ninjaCat"></div>
                    <div className="pianoCat"></div>
                    <div className="pirateCat"></div>
              </div>
        )
      }
    }

    // kitty komponent
    function Cat() {
        return (
          <div className="cat" />
        );
    }     
  
    // upload button component
    function Upload_() {
        return (
          <div className="uploadContainer">
              <input type="file" name="file"/>
  
              <Link to="/loading">
              <div className="uploadButton">
                  <div className="uploadText">Upload</div>
                  </div>
              </Link>
          </div>
        );
    }

    export default LandingPage;